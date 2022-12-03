<?php
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
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
    function existence($em,$pw){
           $db=new mysqli("localhost","SSIP","SSIP","grouppo",3306);
           if($db)
           {
            //    $co=$db->query("select * from signup where email='" . $em . "' and password='" .$pw . "'");
            // and user_password='".$pw."'
              
              $check_exist=$db->query("select * from signup where email='".$em."'");
            echo $check_exist;
              $object_of_exist=$check_exist->fetch_assoc();
               if($object_of_exist==null){
                return "USER_NOT_EXISTS";
               }
               else{
                $db->query("use grouppo;");
                $db->query("source D:/ssip/ssip_script01.sql");
                $co=$db->query("CALL tableID('" . $em . "','" . $pw . "');");
                $fetch=$co->fetch_all(1);    
                $data=json_encode($fetch);
                return $data;
               }
           }
           else{
                return "EXTERNAL_DATABASE_ERROR";
           }
           $db->close();
    }
    function generate_UID($str){
        $user_name=date("mydhis");
        $ans=str_split($user_name,strlen($user_name)/2);
        $user_id=str_shuffle($ans[0].$str.$ans[1]);
        return $user_id;
    }
}


?>