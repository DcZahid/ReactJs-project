<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type, X-Requested-With');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT');
$con = new mysqli('localhost', 'root', '', 'react_seelife');
$id=$_GET['id'];
$data=$con->query('select * from volunteer where id='.$id)->fetch_assoc();
header('Content-Type: Application/json');
echo json_encode($data);