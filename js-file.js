const buttons = document.querySelectorAll(".digit");
const signs = document.querySelectorAll(".sign");
const changeSign = document.getElementById("plus-minus");
const reset = document.getElementById("clear");
const percentage = document.getElementById("percent");
const input = document.getElementById("digits");
const calculate = document.getElementById("calculation");
const equalSign = document.getElementById("result");

let firstValue = "";
let isFirstValue = true;
let secondValue = "";
let isSecondVaue = false;
let symbol = "";
let result = 0;
let isStarted = false;
let temp = "";

const clear = () => {
    firstValue = "";
    isFirstValue = true;
    secondValue = "";
    isSecondVaue = false;
    symbol = "";
    result = 0;
    isStarted = false;
    temp = "";
    input.textContent = "";
    input.textContent = "0";
    calculate.textContent = "";
};

const add = (a, b) => {
    return a + b;
};

const substract = (a, b) => {
    return a - b;
};

const multiple = (a, b) => {
    return a * b;
};

const divide = (a, b) => {
    if (b == 0) {
        isStarted = false;
        throw new Error(input.textContent = "Cannot divide by 0");
       
        // make sure to refresh
    };
    return a / b;
};

const operate = (a, b, operator) => {
    
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

const percent = (p) => {
    let temp = p / 100;
    return temp
};

const display = (c) => {
    temp += c;
    if (temp.length > 14) {
        return;   
    }
    input.textContent = temp;
};
    
const getValue = (v) => {
    return parseFloat(v);
};

equalSign.onclick = () => {
    if (isSecondVaue === true && isStarted === true) {
        calculate.textContent = firstValue + 
            " " + symbol + " " + secondValue;
        input.textContent = "";
        result = operate(getValue(firstValue), getValue(secondValue), symbol);
        if (result.toString().length > 14) {
            result = result.toExponential(3);
        }
        temp = "";
        display(result);
        firstValue = temp;
        isFirstValue = true;
        isSecondVaue = false;
    };
};

changeSign.onclick = () => {
    if (isStarted === false) {
        return;
    }
    if (isFirstValue === true && isSecondVaue === false) {
        let c = temp;
        temp = "";
        display(c * - 1);
    }
    else if (isFirstValue === false && isSecondVaue === true) {
        let c = temp;
        temp = "";
        display(c * - 1);
    }
};

reset.onclick = () => {
    clear();
};

percentage.onclick = () => {
    if (isFirstValue === true && isSecondVaue === false) {
        let c = temp;
        temp = "";
        display(c / 100);
    }
    else if (isFirstValue === false && isSecondVaue === true) {
        let c = temp;
        temp = "";
        display(c / 100);
    }
};

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        isStarted = true;
        // if (button.value == "0") {
        //     if (input.textContent == "0") {
        //         return;
        //     }
        // }
        if (button.value == ".") {
            if ((input.textContent).includes(".")) {
                return;
            }
            isStarted = false;
        }
        if (isFirstValue === true && isSecondVaue === false) {
            display(button.value);
            firstValue = temp;
        }
        else if (isFirstValue === false && isSecondVaue === true) {
            display(button.value);
            secondValue = temp;
        }
    });
});

signs.forEach((sign) => {
    sign.addEventListener("click", () => {
        if (isStarted === false) {
            return;
        }
        if (isFirstValue === true && isSecondVaue === false) {
            calculate.textContent = getValue(temp) + " " + sign.value;
            input.textContent = "";
            input.textContent = "0";
            symbol = sign.value;
            temp = "";
            isFirstValue = false;
            isSecondVaue = true;
            isStarted = false;
        }
        else if (isFirstValue === false && isSecondVaue === true) {
            const newFirstValue = operate(getValue(firstValue), getValue(secondValue), symbol);
            calculate.textContent = newFirstValue + " " + sign.value;
            input.textContent = "";
            input.textContent = "0";
            firstValue = newFirstValue;
            symbol = sign.value;
            secondValue = "";
            isSecondVaue = true;
            isFirstValue = false;
            isStarted = false;
            temp = "";
        }
    });
});
