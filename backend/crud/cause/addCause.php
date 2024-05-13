<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type, X-Requested-With');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT');
$con = new mysqli('localhost', 'root', '', 'react_seelife');

$title=$_POST['title'];
$details=$_POST['details'];
$btn=$_POST['btn'];
$raised=$_POST['raised'];
$goal=$_POST['goal'];
$donors=$_POST['donors'];

$target_dir="../images/";
$target_file= $target_dir.basename($_FILES["photo"]["name"]);
if(move_uploaded_file($_FILES["photo"]["tmp_name"],$target_file)) {
    $photo=$_FILES["photo"]["name"];
}else{
    $photo='';
}
$query="INSERT INTO `cause`( `title`, `details`, `photo`, `btn`, `raised`, `goal`, `donors`) VALUES ('$title','$details','$photo','$btn','$raised','$goal','$donors')";
if($title!=''){
    $con->query($query);    
    echo json_encode(['status'=> true]);
}else{
    echo json_encode(['status'=> false]);
}