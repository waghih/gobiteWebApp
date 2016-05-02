<?php 
	
	header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type, x-xsrf-token");

	require_once('dbConnect.php');
	// include('../connection.php');
	$data = json_decode(file_get_contents("php://input"));
	// $token = $data->token;
	$token = uniqid();

	$check = $db->query("SELECT * FROM user WHERE token=$token");
	$check = $check->fetchAll();

	if (count($check) == 1){
		echo "authorized";
	} else {
		echo "unauthorized";
	}

?>