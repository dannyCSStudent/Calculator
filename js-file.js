const buttons = document.querySelectorAll(".digit");
const signs = document.querySelectorAll(".sign");
const input = document.getElementById("digits");
const calculate = document.getElementById("calculation");
const equalSign = document.getElementById("result");
const point = document.getElementById("dot");


let isStarted = false;
let isOn = false;
let firstValue = "";
let isFirstValue = false;
let secondValue = "";
let isSecondVaue = false;
let symbol = "";
let result = 0;
let isComplete = false;
let isFirst = true;
let isDot = false;

function clear() {
    firstValue = "";
    isFirstValue = false;
    secondValue = "";
    isSecondVaue = false;
    symbol = "";;
    isComplete = false;
    isFirst = true;
    isDot = false;
    input.textContent = "";
    input.textContent = "0";
    calculate.textContent = "";
};

const add = function (a, b) {
    return a + b;
};

const substract = function (a, b) {
    return a - b;
};

const multiple = function (a, b) {
    return a * b;
};

const divide = function (a, b) {
    if (b == 0) {
        return "Cannot divide by 0";
    };
    return a / b;
};

const operate = function (a, b, operator) {
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

const displayFirst = (a) => {
    firstValue += a;
    if (firstValue.length > 14) {
        return;
    };
    input.textContent = firstValue;
};

const displaySecond = (a) => {
    secondValue += a;
    if (secondValue.length > 14) {
        return;
    };
    input.textContent = secondValue;
};

function getFirstValue() {
    if (isOn === true) {
        firstValue = firstValue * - 1;
    }
    return parseFloat(firstValue);
};
function getSecondValue() {
    return parseFloat(secondValue);
};

equalSign.onclick = () => {
    if (isComplete === false && isFirst === false
            && isSecondVaue === true) {
        calculate.textContent = firstValue +
            " " + symbol + " " + secondValue;
        result = operate(getFirstValue(), getSecondValue(), symbol);
        if ((toString(result)).length > 14) {
            
            result = Math.round(result * 100000000) / 100000000;
            console.log(result);
        }
        input.textContent = "";
        input.textContent = result;
        isFirst = true;
        isDot = false;
    };
};

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.value == "0") {
            if (isFirst === true) {
                if (firstValue == "")
                return;
            }
            else {
                if (secondValue == "") {
                    return;
                }                
            }
        }
        isStarted = true;
        if (isComplete === true) {
            return;
        }
        if (button.value == "+/-") {
            if (isFirst === true) {
                let temp = firstValue;
                firstValue = "";
                displayFirst(temp * -1);
            }
            else {
                let temp = secondValue;
                secondValue = "";
                displaySecond(temp * -1);
            }
            return;
        }
        if (isFirst === true) {
            if (button.value == "." && isDot === false) {
                isDot = true;
                displayFirst(button.value);
                return;
            }
            else if (button.value == "." && isDot === true) {
                return;
            }
            else {
                displayFirst(button.value);
                isFirstValue = true;
            }
        }
        else {
            if (button.value == "." && isDot === false) {
                console.log(isFirst + " 1" + isDot);
                isDot = true;
                displaySecond(button.value);
                return;
            }
            else if (button.value == "." && isDot === true) {
                console.log(isFirst + " 2" + isDot);
                return;
            }
            else {
                console.log(isFirst + " 3" + isDot);
                displaySecond(button.value);   
            }
            // this can go in the else clause.
            isSecondVaue = true;
        }
    });
});

signs.forEach((sign) => {
    sign.addEventListener("click", () => {
        if (sign.value == "C") {
            clear();
            return;
        }
        if (isStarted === false) {
            return;
        };        
        isStarted = false;
        if (isFirstValue === true && isSecondVaue === true) {
            const consecOperation = operate(getFirstValue(), getSecondValue(), symbol);
            symbol = sign.value;
            calculate.textContent = consecOperation + " " + symbol;
            input.textContent = "";
            input.textContent = "0";
            firstValue = consecOperation;
            secondValue = "";
            isSecondVaue = false;
            isFirst = false;
            isComplete = false;
            return;
        }
        symbol = sign.value;
        calculate.textContent = getFirstValue() + " " + symbol;
        input.textContent = "";
        input.textContent = "0";
        isFirst = false;
        isDot = false;
    });
});






