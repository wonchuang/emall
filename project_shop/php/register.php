<?php
  $uname =$_REQUEST["uname"];
  $upwd =$_REQUEST["upwd"];
  $email =$_REQUEST["email"];
  $phone =$_REQUEST["phone"];
  $gender= $_REQUEST["gender"];
  if($uname==""){
     die("<script language='javascript'> alert('uname can\'t be empty'); </script>");
  }
  if($upwd==""){
     die("<script language='javascript'> alert('password can\'t be empty'); </script>");
  }
   require("00-init.php");
 $sql="insert into xz_user(uname,upwd,email,phone,gender)   values('$uname','$upwd','$email','$phone','$gender')";
 $result=mysqli_query($conn,$sql);
 if($result){
     echo "<script language='javascript'> alert('register-successful!');
	 setTimeout(\"window.location='../login.html'\",1000); </script>";
 }else{
     echo "<script language='javascript'> alert('register-failed!');
	 setTimeout(\"window.location='../register.html'\",1000); </script>";
  }

?>