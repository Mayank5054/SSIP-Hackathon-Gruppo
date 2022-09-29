<?php
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
echo $check_result;

class validation{
      function check($em,$pw){
        $em_answer=preg_match("/^([a-zA-Z]+[0-9]*[_.-]?[a-zA-Z0-9]{1,})@([a-z]+[-]?[a-z]+.[a-z]{2,})$/",$em,$match);
        $pw_answer_num=preg_match("/[0-9]+/",$pw,$match01);
        $pw_answer_small=preg_match("/[a-z]+/",$pw,$match02);
        $pw_answer_cap=preg_match("/[A-Z]+/",$pw,$match03);
        $pw_answer_special=preg_match("/[_@#$-.]+/",$pw,$match04);
        $pw_length=preg_match("/(.){8,}/",$pw,$match05);
        if($em_answer && $pw_length && $pw_answer_num && $pw_answer_small && $pw_answer_cap && $pw_answer_special){
              return true;
        }
        else{
            return false;
        }
      }
}
?>