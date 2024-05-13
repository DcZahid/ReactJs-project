<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type, X-Requested-With');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT');
$con = new mysqli('localhost', 'root', '', 'react_seelife');

$title1=$_POST['title1'];
$details=$_POST['details'];
$btn1=$_POST['btn1'];
$title2=$_POST['title2'];
$btn2=$_POST['btn2'];
$id=$_POST['id'];

$target_dir="../images/";
$target_file= $target_dir.basename($_FILES["photo"]["name"]);
if(move_uploaded_file($_FILES["photo"]["tmp_name"],$target_file)) {
    $photo=$_FILES["photo"]["name"];
    $query="UPDATE `banner` SET `title1`='$title1',`title2`='$title2',`photo`='$photo',`details`='$details',`btn1`='$btn1',`btn2`='btn2' WHERE id=$id";
}else{
    $query="UPDATE `banner` SET `title1`='$title1',`title2`='$title2',`details`='$details',`btn1`='$btn1',`btn2`='$btn2' WHERE id=$id";
}

if($title1!=''){
    $con->query($query);    
    echo json_encode(['status'=> true]);
}else{
    echo json_encode(['status'=> false]);
}