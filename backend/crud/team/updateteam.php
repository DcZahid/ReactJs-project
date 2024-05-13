<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type, X-Requested-With');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT');
$con = new mysqli('localhost', 'root', '', 'react_seelife');

$name = $_POST['name'];
$designation = $_POST['designation'];
$details = $_POST['details'];
$id = $_POST['id'];


$target_dir = "../images/";
$target_file = $target_dir . basename($_FILES["photo"]["name"]);
if (move_uploaded_file($_FILES["photo"]["tmp_name"], $target_file)) {
    $photo = $_FILES["photo"]["name"];
    $query = "UPDATE `team` SET `name`='$name',`designation`='$designation',`details`='$details',`photo`='$photo' WHERE id=$id";
} else {
    $query = "UPDATE `team` SET `name`='$name',`designation`='$designation',`details`='$details' WHERE id=$id";
}

if ($name != '') {
    $con->query($query);
    echo json_encode(['status'=>true]);
}else{
    echo json_encode(['status'=>false]);
}