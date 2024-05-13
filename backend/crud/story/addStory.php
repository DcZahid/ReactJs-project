<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type, X-Requested-With');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT');
$con = new mysqli('localhost', 'root', '', 'react_seelife');

$title=$_POST['title'];
$company=$_POST['company'];
$date=$_POST['date'];

$target_dir="../images/";
$target_file= $target_dir.basename($_FILES["photo"]["name"]);
if(move_uploaded_file($_FILES["photo"]["tmp_name"],$target_file)) {
    $photo=$_FILES["photo"]["name"];
}else{
    $photo='';
}
$query="insert into story(title,photo,company,date)values('$title','$photo','$company','$date ')";
if($title!=''){
    $con->query($query);    
    echo json_encode(['status'=> true]);
}else{
    echo json_encode(['status'=> false]);
}