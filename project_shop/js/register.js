 function all(id){
		  return document.getElementById(id);
		 }
 function getXhr(){
			 var xhr;
		     if(window.XMLHttpRequest){
                  xhr= new XMLHttpRequest;
		     }else{
			      xhr= new ActiveXObject("Microsoft.XMLHttp"); 
			  }
              return xhr;
		  }
  //验证用户密码和确认密码是否一致
     function checkCpwd(){
	   //获取两个的值，分别保存在变量里
	   var upwd=all("upwd").value;
	   var cpwd=all("cpwd").value;
	   if(upwd == ""){
	      all("cpwd-show").innerHTML="the password can't be empty";
	   }else{
		   //判断两个变量的值是否一致，并将提示信息显示在cpwd-show
		   if(upwd == cpwd){
			  all("cpwd-show").innerHTML="NOTICE:PASS";
		   }else{
			  all("cpwd-show").innerHTML="NOTICE:DIFFERENT PASSWORD";
			}
	   }
	 }
	 //验证用户是否存在
	 function checkName(){
	       var xhr = getXhr();
		   var url="php/checkname.php?uname="+all("uname").value;
		   xhr.open("get",url,true);
	       xhr.onreadystatechange=function(){
		     if(xhr.readyState==4&& xhr.status==200){
				all("uname-show").innerHTML=xhr.responseText;
			 }
		   }
		   xhr.send(null);
	 }












