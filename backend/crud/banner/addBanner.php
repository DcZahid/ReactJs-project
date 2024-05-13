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

$target_dir="../images/";
$target_file= $target_dir.basename($_FILES["photo"]["name"]);
if(move_uploaded_file($_FILES["photo"]["tmp_name"],$target_file)) {
    $photo=$_FILES["photo"]["name"];
}else{
    $photo='';
}
$query="INSERT INTO `banner`( `title1`, `details`, `photo`, `btn1`, `title2`, `btn2`) VALUES ('$title1','$details','$photo','$btn1','$title2','$btn2')";
if($title1!=''){
    $con->query($query);    
    echo json_encode(['status'=> true]);
}else{
    echo json_encode(['status'=> false]);
}