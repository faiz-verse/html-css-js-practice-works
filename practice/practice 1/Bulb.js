var btn = document.querySelector("button");
var bulbneck = document.querySelector(".neck");
var bulbhead = document.querySelector(".head");
var page = document.querySelector("body");

var face = document.querySelector(".face");
var eye = document.querySelector(".eyes");
var eyeCross = document.querySelector(".cross")
var mouth = document.querySelector(".mouth");
//var teeth = document.querySelector(".teeth");
//var tongue = document.querySelector(".tongue");

var isOn = true;

btn.addEventListener("click", function () {

    if (isOn == true) {
        btn.innerHTML = "On";
        btn.style.backgroundColor = "rgb(60, 255, 89)";
        btn.style.boxShadow = "0px 0px 20px rgb(60,255,89)";

        bulbhead.style.backgroundColor = "transparent";
        bulbhead.style.boxShadow = "none"
        bulbhead.style.border = "1px solid white";

        bulbneck.style.backgroundColor = "black";
        bulbneck.style.transition = "all";
        bulbneck.style.transitionDuration = "1.5s";
        
        page.style.backgroundColor = "black";

        face.style.backgroundColor = "black";
        face.style.transitionDuration = "1.8s";
        
        eye.style.display = "none";
        eyeCross.style.display = "flex";

        mouth.style.height = "1%";
        //tongue.style.display = "none";
        //teeth.style.borderRadius = "0 0 30% 30%";
        //teeth.style.height = "100%";
        mouth.style.backgroundColor = "white";

        isOn = false;
    }
    else{
        btn.innerHTML = "Off";
        btn.style.backgroundColor = "rgb(255, 60, 60)";
        btn.style.boxShadow = "0px 0px 20px rgb(255, 60, 60)";
        
        bulbhead.style.backgroundColor = "yellow";
        bulbhead.style.boxShadow = "0px 0px 50px yellow"
        bulbhead.style.border = "none";

        bulbneck.style.backgroundColor = "yellow";
        bulbneck.style.transition = "all";
        bulbneck.style.transitionDuration = "1.5s";
        
        page.style.backgroundColor = "lightgoldenrodyellow";

        face.style.backgroundColor = "coral"
        
        eye.style.display = "flex";
        eyeCross.style.display = "none";

        mouth.style.height = "30%";
        //teeth.style.height = "30%";
        //tongue.style.display = "flex";
        //teeth.style.borderRadius = "0 0 0 0";
        mouth.style.backgroundColor = "rgb(255, 80, 80)";

        isOn = true;
    }

});