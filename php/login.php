<?php 
    // include("../connection.php");
	require_once('dbConnect.php');

    $data = json_decode(file_get_contents("php://input"));
    $username = $data->username;
    $password = sha1($data->password.$username);
    
    $sql = "SELECT email FROM user WHERE email='$username' AND password='$password'";

    // $userInfo = $db->query("SELECT email FROM user WHERE email='$username' AND password='$password'");
    // $userInfo = $userInfo->fetchAll();

    $r = mysqli_query($con,$sql);

	$token; 
	if (mysqli_num_rows($r)){
		//This means that the user is logged in and let's givem a token :D :D :D
		$token = $username . " | " . uniqid() . uniqid() . uniqid();
		$sql2 = "UPDATE restaurant SET rating = (SELECT AVG(rating) FROM review where restaurant_id=$restaurant_id) WHERE id = $restaurant_id";
		
		$q = "UPDATE user SET token='$token' WHERE email='$username' AND password='$password'";
		mysqli_query($con,$q);

    echo json_encode($token);
	} else {
	echo "ERROR";
	}
	
	
	

?>