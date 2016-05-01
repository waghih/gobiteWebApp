<?php 
	require_once('dbConnect.php');
	// include('../connection.php');
	$data = json_decode(file_get_contents("php://input"));
	$token = $data->token;

	$check = $db->query("SELECT * FROM user WHERE token=$token");
	$check = $check->fetchAll();

	if (count($check) == 1){
		echo "authorized";
	} else {
		echo "unauthorized";
	}

?>