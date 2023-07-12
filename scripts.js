var label = document.getElementById("label");
var contain = document.getElementById('cont');
var btnz = document.getElementById('eql-btns');
var colors = ["red", "blue", "green", "orange", "purple"];
var shadows = ["0px 2px 4px red", "0px 2px 4px blue", "0px 2px 4px green", "0px 2px 4px orange", "0px 2px 4px purple"];
var index = 0;

let result = document.getElementById("result");

function appendNumber(number) {
    result.value += number;
}

function appendOperator(operator) {
    result.value += operator;
}

function clearResult() {
    result.value = "";
}

function calculateResult() {
    try {
        result.value = eval(result.value);
    } catch (error) {
        result.value = "Error";
    }
}


function changeColor() {
    label.style.color = colors[index];
    label.style.borderBottomColor = colors[index];
    index = (index + 1) % colors.length;

    btnz.style.color = colors[index];
    contain.style.boxShadow = shadows[index];
    index = (index + 1) % shadows.length;


}

setInterval(changeColor, 1000);  // Change color every 1 second
