const add = function(a, b) {
    return a + b;
};

const substract = function(a, b) {
    return a - b;
}

const multiple = function(a, b) {
    return a * b;
}

const divide = function(a, b) {
    if (b == 0) {
        return "Cannot divide by 0";
    }
    return a / b;
}
console.log(divide(10, 0));

