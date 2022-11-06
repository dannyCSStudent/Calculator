let firstValue = "";
let isFirstValue = true;
let secondValue = "";
let isSecondVaue = false;
let symbol = "";
let result = 0;
 
const add = function(a, b) {
    return a + b;
};

const substract = function(a, b) {
    return a - b;
};

const multiple = function(a, b) {
    return a * b;
};

const divide = function(a, b) {
    if (b == 0) {
        return "Cannot divide by 0";
    };
    return a / b;
};

const operate = function(a, b, operator) {
    switch (operator) {
        case "+":
            return add(a, b);
        case "-":
            return substract(a, b);
        case "x":
            return multiple(a, b);
        case "/":
            return divide(a, b);
    };
};

const buttons = document.querySelectorAll(".digit");
const signs = document.querySelectorAll(".sign");
const input = document.getElementById("digits");
const calculate = document.getElementById("calculation");
const equalSign = document.getElementById("result");

equalSign.onclick = () => {
    
    if (isFirstValue === false) {
        calculate.textContent = firstValue + 
            " " + symbol + " " + secondValue;
        result = operate(getFirstValue(), getSecondValue(), symbol);
        input.textContent = "";
        input.textContent = result;
        isSecondVaue = true;
        isFirstValue = true;
        secondValue = "";
        firstValue = "";
    };
};

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (isFirstValue === true) {
            displayFirstValue(button.value);
        }
        else {
            displaySecondValue(button.value);
        }
    });
});

signs.forEach((sign) => {
    sign.addEventListener("click", () => {
        if (!(isFirstValue)) {
            return;
        };
        if (isSecondVaue === true) {
            firstValue = result;
        };
        symbol = sign.value;
        calculate.textContent = getFirstValue() + " " + symbol;
        input.textContent = "";
        input.textContent = "0";
        isFirstValue = false;
    });
});


function displayFirstValue(a) {
    
    firstValue += a;
    if (firstValue.length > 14) {
        return;
    };

    input.textContent = firstValue;
};

function displaySecondValue(a) {
    secondValue += a;
    if (secondValue.length > 14) {
        return;
    };
    input.textContent = secondValue;
};

function getFirstValue() {
    return parseFloat(firstValue);
};
function getSecondValue() {
    return parseFloat(secondValue);
};



