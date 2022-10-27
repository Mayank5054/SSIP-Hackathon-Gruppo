<?php
require_once "./login_class.php";
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Methods:GET,POST,OPTIONS,PUT,DELETE');
header('Access-Control-Allow-Headers:Content-Disposition,Content-Type,Content-Length,Accept-Encoding');
header('Content-Type:multipart/form-data');

$a = json_decode(file_get_contents("php://input"), true);
$email = $a["email"];
$password = $a["password"];
$conf_pass = $a['confirm_password'];
$name=$a['name'];
if ($password == $conf_pass) {
    $obj = new validation();
    $check_result = $obj->check($email, $password);
    if ($check_result) 
    {
        $ans = $obj->existence($email, $password);
        if ($ans != "USER_NOT_EXISTS") 
        {
            echo "USER_ALREADY_EXISTS";
        } 
        else 
        {
            $db = new mysqli("localhost", "SSIP", "SSIP", "ssip", 3306);
            if ($db) 
            {
                $userID=$obj->generate_UID($name);
                $db->query("use grouppo");
                $db->query("source D:/ssip/ssip_script01.sql");
                $co=$db->query("CALL createAccount('" . $email . "','" . $password . "','" . $userID ."')");
                echo "USER_ACCOUNT_CREATED";
                echo $userID;
                $db->close();

            } 
            else 
            {
                echo "EXTERNAL_DATABASE_ERROR";
            }
        }
    } 
    else 
    {
        echo "REGISTER_CREDENTIALS_INVALID";
    }
} 
else 
{
    echo "PASSWORD_NOT_SAME";
}
