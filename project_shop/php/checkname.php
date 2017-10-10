<?php
    $uname =$_REQUEST["uname"];
	if($uname==""){
	    die("notice:it can't be null");
	}
    require("00-init.php");
	$sql="select*from xz_user where uname='$uname'";
	$result=mysqli_query($conn,$sql);
	$row=mysqli_fetch_row($result);
	if($row === null){
	   echo "notice:it can be used";
	}else{
	   echo "notice:it has been used";
	}
?>













