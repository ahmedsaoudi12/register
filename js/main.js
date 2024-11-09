


function validate()
{
var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
var password = document.getElementById("password").value;
var confirm = document.getElementById("confirm").value;

var message = document.getElementById("error");
message.style.color="#fff";
message.style.textAlign="center";
message.style.backgroundColor= "red";
message.style.padding="10px";



if( email=="" && name=="" && password==""&& confirm==""){

    message.innerHTML ="enter valid data";
    return false;
}
else if(name.length <5 || name.length >15){

    message.innerHTML ="please Insert 5-15 character in username";
    return false;
}

else if(email.indexOf("@")==-1){

    message.innerHTML ="Please Enter Valid Email";
    return false;
}else if (password.length<8){

    message.innerHTML ="please Insert atleast 8 character in password";
    return false;
}

else if(password != confirm){

    message.innerHTML ="please Matched password";
    return false;
}
else{
   
    return true;
}




}


