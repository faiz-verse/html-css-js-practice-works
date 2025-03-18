var one = document.querySelector("#_1");
var two = document.querySelector("#_2");
var three = document.querySelector("#_3");
var four = document.querySelector("#_4");
var five = document.querySelector("#_5");
var six = document.querySelector("#_6");
var seven = document.querySelector("#_7");
var eight = document.querySelector("#_8");
var nine = document.querySelector("#_9");
var dot = document.querySelector("#dot");
var zero = document.querySelector("#_0");
var equals = document.querySelector("#equalsButton");

//operations
var add = document.querySelector("#add");
var subtract = document.querySelector("#subtract");
var multiply = document.querySelector("#multiply");
var divide = document.querySelector("#divide");
var raiseTo = document.querySelector("#raiseTo");
var percent = document.querySelector("#percent");
var allClear = document.querySelector("#allClear");
var clear = document.querySelector("#clear");

//answer
var answer = document.querySelector("#answer");

var ansContent = "";

function updateAnswer(value) {
    ansContent = ansContent + value;
    answer.innerHTML = ansContent;
}

function changeSignAndCalculate(value) {
    try {
        // Convert the string to an array of characters
        let valueArray = value.split('');
        // Iterate through the array and replace "÷" with "/"
        for (let i = 0; i < valueArray.length; i++) {
            if (valueArray[i] === "÷") {
                valueArray[i] = "/";
            }
            else if (valueArray[i] === "x") {
                valueArray[i] = "*";
            }
            else if (valueArray[i] === "^") {
                valueArray[i] = "**";
            }
            else if (valueArray[i] === "%") {

                valueArray[i] = "/100";
            }
        }
        // Join the array back into a string
        value = valueArray.join('');
        //call calculate function
        calculate(value);
    } catch {
        console.log("Error");
        answer.innerHTML = "Error";
    }
}

function calculate(value) {
    try {
        answer.innerHTML = eval(value);
        ansContent = eval(value);
        console.log(eval(value));
    } catch (e) {
        console.log("Error" + e)
        answer.innerHTML = "Error";
    }
}

one.addEventListener("click", function () {
    updateAnswer("1");
});

two.addEventListener("click", function () {
    updateAnswer("2");
});

three.addEventListener("click", function () {
    updateAnswer("3");
});

four.addEventListener("click", function () {
    updateAnswer("4");
});

five.addEventListener("click", function () {
    updateAnswer("5");
});

six.addEventListener("click", function () {
    updateAnswer("6");
});

seven.addEventListener("click", function () {
    updateAnswer("7");
});

eight.addEventListener("click", function () {
    updateAnswer("8");
});

nine.addEventListener("click", function () {
    updateAnswer("9");
});

dot.addEventListener("click", function () {
    updateAnswer(".");
});

zero.addEventListener("click", function () {
    updateAnswer("0");
});

divide.addEventListener("click", function () {
    updateAnswer("÷");
});

multiply.addEventListener("click", function () {
    updateAnswer("x");
});

subtract.addEventListener("click", function () {
    updateAnswer("-");
});

add.addEventListener("click", function () {
    updateAnswer("+");
});

raiseTo.addEventListener("click", function () {
    updateAnswer("^");
});

percent.addEventListener("click", function () {
    updateAnswer("%");
});

allClear.addEventListener("click", function () {
    answer.innerHTML = "0";
    ansContent = "";
});

clear.addEventListener("click", function () {
    let ansContentArr = answer.innerHTML.split('');
    ansContentArr[ansContentArr.length - 1] = "";
    ansContent = ansContentArr.join('');
    answer.innerHTML = ansContentArr.join('');
});

equals.addEventListener("click", function () {
    changeSignAndCalculate(answer.innerHTML);
});

