<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type, X-Requested-With');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT');
$con = new mysqli('localhost', 'root', '', 'react_seelife');

$title=$_POST['title'];
$details=$_POST['details'];
$days=$_POST['days'];
$hours=$_POST['hours'];
$minutes=$_POST['minutes'];
$seconds=$_POST['seconds'];
$btn=$_POST['btn'];
$id=$_POST['id'];

$target_dir="../images/";
$target_file= $target_dir.basename($_FILES["photo"]["name"]);
if(move_uploaded_file($_FILES["photo"]["tmp_name"],$target_file)) {
    $photo=$_FILES["photo"]["name"];
    
    $query = "update event set title='$title',photo='$photo',details='$details',days='$days',hours='$hours',minutes='$minutes',seconds='$seconds',btn='$btn' where id=$id";
}else{
    $query = "update event set title='$title',details='$details',days='$days',hours='$hours',minutes='$minutes',seconds='$seconds',btn='$btn' where id=$id";
}
if($title!=''){
    $con->query($query);    
    echo json_encode(['status'=> true]);
}else{
    echo json_encode(['status'=> false]);
}