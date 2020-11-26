$(document).ready(function(){
    $("#login").on('click',login);
    function login(){
        var uname = $("#uname").val();
     var password = $("#pwd").val();
   if(uname=="admin" && password=="12345")
   {
         alert("Login Sucessful");
         window.location="todo.html";
     }
     
    else{
        alert("Login failed");
   // //     // return true;
    }



    }

})