<?php
//header("Access-Control-Allow-Origin: *");	// For cross site access if data was on separate server.
header("Content-Type: application/json; charset=UTF-8");

$config = parse_ini_file("config.ini");

$host = $config['host'];
$dbname = $config['dbname'];
$username = $config['username'];
$password = $config['password'];

$connection = new PDO("mysql:host=$hostname;dbname=$dbname", $username, $password);

$sql = "SELECT * FROM customers";
$stmt = $connection->prepare($sql);
$stmt->execute();

// Fetch results into an array
$result = $stmt->fetchAll( PDO::FETCH_ASSOC );

// Convert to JSON
$json_data = json_encode($result);

echo $json_data;	
