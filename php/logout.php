<?php 
	// include('../connection.php');
	require_once('dbConnect.php');
	
	$data = json_decode(file_get_contents("php://input"));
	$token = $data->token;
	$db->query("UPDATE user SET token='LOGGED OUT' WHERE token=$token");
?>