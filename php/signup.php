<?php 
    // include("../connection.php");
    require_once('dbConnect.php');

    $data = json_decode(file_get_contents("php://input"));
    $username = $data->username;
    $password = $data->password;

    // $pool = '0123456789abcdefghijklmnoABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $pool = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

    $check_user = "SELECT email FROM user where email=$username";

    if(mysqli_query($con,$check_user)){
        echo "username already exist"
    }else{
        while(true){
            $randomId = u . substr(str_shuffle(str_repeat($pool, 5)), 0, 5);
            $sql = "SELECT * FROM user where id=$randomId";
            $requestId = mysqli_query($con,$sql);
            if($requestId == null){
                break;
            }
        }

        $q = "INSERT INTO users (id, email, password, role) VALUES (:id, :email, :password, :role)";
        $query = $db->prepare($q);
        $execute = $query->execute(array(
            ":id" => $randomId,
            ":email" => $username,
            ":password" => sha1($username.$password),
            ":role" => 1
        ));

        echo "new user added"
    }    

    echo json_encode($username);
    mysqli_close($con);
?>