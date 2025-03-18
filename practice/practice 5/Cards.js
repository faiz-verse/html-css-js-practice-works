var body = document.querySelector("body");
var cardInfo = document.querySelectorAll(".cardInfo");
var h1 = document.querySelector("h1");
var switchText = document.querySelector(".switchText")
var button = document.querySelector(".button");
var buttonText = document.querySelector(".buttonText");
var buttonBall = document.querySelector(".buttonBall");

var isOn = true;

buttonBall.addEventListener("click", function () {
    if (isOn) {
        // for environment
        body.style.backgroundColor = "white";
        cardInfo.forEach(card => {
            card.style.background = "linear-gradient(transparent, white, white)";
            card.style.color = "black";
        });
        h1.style.color = "black";
        // For changing css of the h1::after
        // Select the stylesheet (assuming the first stylesheet in the document)
        let stylesheet = document.styleSheets[0];
        // Add or modify the rule for h1::after
        stylesheet.insertRule(`
        h1::after {
        content: "SIMPLE CARDS";
        font-family: Arial, Helvetica, sans-serif;
        font-size: 120px;
        font-weight: 900;
        color:transparent;
        -webkit-text-stroke: 2px black;
        position: absolute;
        inset: 0 0 0 0;
        z-index: 2;
        transition: all 0.5s ease;
        }`, stylesheet.cssRules.length);

        switchText.style.color = "black";

        // for button
        buttonText.innerHTML = "Light";
        buttonText.style.left = "40%";
        buttonText.style.color = "black";
        buttonBall.style.backgroundColor = "black";
        button.style.border = "2px solid black";
        buttonBall.style.left = "3%";
        button.style.backgroundColor = "white";

        isOn = false;
    }
    else {
        // for environment
        body.style.backgroundColor = "black";
        cardInfo.forEach(card => {
            card.style.background = "linear-gradient(transparent, black, black)";
            card.style.color = "white";
        });
        h1.style.color = "white";
        // For changing css of the h1::after
        // Select the stylesheet (assuming the first stylesheet in the document)
        let stylesheet = document.styleSheets[0];
        // Add or modify the rule for h1::after
        stylesheet.insertRule(`
        h1::after {
        content: "SIMPLE CARDS";
        font-family: Arial, Helvetica, sans-serif;
        font-size: 120px;
        font-weight: 900;
        color:transparent;
        -webkit-text-stroke: 2px white;
        position: absolute;
        inset: 0 0 0 0;
        z-index: 2;
        transition: all 0.5s ease;
        }`, stylesheet.cssRules.length);

        switchText.style.color = "white";

        // for button
        buttonText.innerHTML = "Dark";
        buttonText.style.left = "3%";
        buttonBall.style.left = "62%";
        buttonText.style.color = "white";
        buttonBall.style.backgroundColor = "white";
        button.style.border = "2px solid white";
        button.style.backgroundColor = "black";

        isOn = true;
    }
})
