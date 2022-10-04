<?php
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
           $db=new mysqli("localhost","SSIP","SSIP","ssip",3306);
           if($db)
           {
               $co=$db->query("select * from user_data where email='" . $em . "' and password='" .$pw . "'");
               $fetch=$co->fetch_row();
               if($fetch==null){
                return "USER_NOT_EXISTS";
               }
               else{
                return "UNIQUE_ID";
               }
           }
           else{
                return "EXTERNAL_DATABASE_ERROR";
           }
           $db->close();
    }
}

?>