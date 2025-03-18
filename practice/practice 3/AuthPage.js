var signInContainer = document.querySelector("#signInContainer");
var signUpContainer = document.querySelector("#signUpContainer");

var coverContainer = document.querySelector("#coverContainer");
var signUpInfo = document.querySelector("#signUpInfo");
var signInInfo = document.querySelector("#signInInfo");

var signInButton = document.querySelector("#signInButton");
var signUpButton = document.querySelector("#signUpButton");

signInButton.addEventListener("click", function(){
    coverContainer.style.left = "510px";
    
    signUpContainer.style.display = "hidden";
    signInContainer.style.display = "flex";

    signInInfo.style.left = "0px";
    signUpInfo.style.right = "-500px";
    
});

signUpButton.addEventListener("click", function(){
    coverContainer.style.left = "10px";
    
    signInContainer.style.display = "hidden";
    signUpContainer.style.display = "flex";
    
    signUpInfo.style.right = "0px";
    signInInfo.style.left = "-500px";
});