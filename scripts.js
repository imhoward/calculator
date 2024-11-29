let firstNum;
let sign;
let secondNum;
let signClicked;
let firstClicked = 0;

// Creation of the calculator body/layout

let mainContainer = document.createElement("div");
mainContainer.classList.add("main-container");

let body = document.querySelector("body");
body.append(mainContainer);

let numberBox = document.createElement("div");
numberBox.classList.add("number-box");
mainContainer.append(numberBox);

let expressionBox = document.createElement("div");
expressionBox.classList.add("expression-box");
numberBox.append(expressionBox);

let keypad = document.createElement("div");
keypad.classList.add("keypad");
mainContainer.append(keypad);

let numKeys = document.createElement("div");
numKeys.classList.add("numKeys");
numKeys.classList.add("key-containers");
keypad.append(numKeys);

let zeroKey = document.createElement("button");
zeroKey.classList.add("zeroKey");
zeroKey.classList.add("key-containers");
zeroKey.classList.add("keys");
zeroKey.textContent = 0;

zeroKey.addEventListener('click', function(e) {
    if (firstClicked == 1) {
        numberBox.textContent = 0;
        firstClicked = 0;
        //secondNum = i+1;
    } else {
        if ((numberBox.textContent).length < 8 ) {
            numberBox.textContent += 0;
        }
    }
});

keypad.append(zeroKey);


let signKeys = document.createElement("div");
signKeys.classList.add("signKeys");
signKeys.classList.add("key-containers");
keypad.append(signKeys);

for (let i = 0; i < 9; i++) {
    let numKey = document.createElement("button");
    numKey.classList.add("numKey");
    numKey.classList.add("keys");
    numKey.textContent = i+1;

    numKey.addEventListener('click', function(e) {
        if (firstClicked == 1) {
            numberBox.textContent = i+1;
            firstClicked = 0;
        } else {
            if ((numberBox.textContent).length < 8 ) {
                numberBox.textContent += i+1;
            }
        }
    });

    numKeys.append(numKey);
}

const signs = ['+', '-', '×', '÷', '='];

for (let i = 0; i < 5; i++) {
    let signKey = document.createElement("button");
    signKey.classList.add("signKey");
    signKey.classList.add("keys");
    signKey.textContent = signs[i];

    if (i < 4) {
        signKey.addEventListener('click', function(e) {
            signMode = 1;
            firstNum = parseInt(numberBox.textContent);
            firstClicked = 1;
            signClicked = signs[i];
        });
    } else {
        signKey.addEventListener('click', function(e) {
            secondNum = parseInt(numberBox.textContent);
            operate(firstNum, secondNum, signClicked);
        });
    }

    signKeys.append(signKey);
}

let clearKey = document.createElement("button");
clearKey.classList.add("clear-key");
clearKey.classList.add("keys");
clearKey.textContent = 'C';

clearKey.addEventListener('click', function(e) {
    numberBox.textContent = null;
    firstNum = 0;
    secondNum = 0;
    signClicked = null;
    signMode = 0;
});

keypad.append(clearKey);

// Calculator functionality

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function operate(x, y, sign) {
    if (sign == '+') {
        let result = add(x,y);
        if (result.toString().length > 8) {
            numberBox.textContent = "NaN";
            firstClicked = 1;
        } else {
            numberBox.textContent = result;
        }
    }
    else if (sign == '-') {
        let result = subtract(x,y);
        if (result.toString().length > 8) {
            numberBox.textContent = "NaN";
            firstClicked = 1;
        } else {
            numberBox.textContent = result;
        }
    }
    else if (sign == '×') {
        let result = multiply(x,y);
        if (result.toString().length > 8) {
            numberBox.textContent = "NaN";
            firstClicked = 1;
        } else {
            numberBox.textContent = result;
        }
    }
    else if (sign == '÷') {
        let result = divide(x,y);
        if (result.toString().length > 8 && result % 1 == 0) {
            numberBox.textContent = "NaN";
            firstClicked = 1;
        } 
        else if (result.toString().length > 8 && result % 1 != 0) {
            let decimals = result % 1;
            let wholes = result - decimals;
            if (decimals.toString().length > 6) {
                numberBox.textContent = result.toFixed(6-(wholes.toString().length-1));
            }
        }
        else {
            numberBox.textContent = result;
        }
    }
}
