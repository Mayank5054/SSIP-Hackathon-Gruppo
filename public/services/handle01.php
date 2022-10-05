<?php
include_once("./login_class.php");
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Methods:GET,POST,OPTIONS,PUT,DELETE');
header('Access-Control-Allow-Headers:Content-Disposition,Content-Type,Content-Length,Accept-Encoding');
header('Content-Type:multipart/form-data');
$a=json_decode(file_get_contents("php://input"),true);
// print_r($a);
// $arr=parse_url($_SERVER['REQUEST_URI']);
// $str=explode('&',$arr['query']);
// $email=explode("=",$str[0])[1];
// $password=explode("=",$str[1])[1];
$email=$a["email"];
$password=$a["password"];
// echo $email;
// echo $password;
$ab=new validation();
$check_result=$ab->check($email,$password);
if($check_result){
$check=$ab->existence($email,$password);
}
else{
      echo "LOGIN_CREDENTIALS_INVALID";
}

?>