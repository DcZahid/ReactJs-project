<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type, X-Requested-With');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT');
$con = new mysqli('localhost', 'root', '', 'react_seelife');

$data=$con->query('SELECT * FROM `donation` ORDER by id DESC LIMIT 3')->fetch_all(MYSQLI_ASSOC);
header('Content-Type: Application/json');
echo json_encode($data);