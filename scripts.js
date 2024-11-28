let mainContainer = document.createElement("div");
mainContainer.classList.add("main-container");

let body = document.querySelector("body");
body.append(mainContainer);

let numberBox = document.createElement("div");
numberBox.classList.add("number-box");
mainContainer.append(numberBox);

let keypad = document.createElement("div");
keypad.classList.add("keypad");
mainContainer.append(keypad);

let numKeys = document.createElement("div");
numKeys.classList.add("numKeys");
numKeys.classList.add("key-containers");
keypad.append(numKeys);

let zeroKey = document.createElement("div");
zeroKey.classList.add("zeroKey");
zeroKey.classList.add("key-containers");
zeroKey.classList.add("keys");
zeroKey.textContent = 0;
keypad.append(zeroKey);


let signKeys = document.createElement("div");
signKeys.classList.add("signKeys");
signKeys.classList.add("key-containers");
keypad.append(signKeys);

for (let i = 0; i < 9; i++) {
    let numKey = document.createElement("div");
    numKey.classList.add("numKey");
    numKey.classList.add("keys");
    numKey.textContent = i+1;
    numKeys.append(numKey);
}

const signs = ['+', '-', '×', '÷'];

for (let i = 0; i < 4; i++) {
    let signKey = document.createElement("div");
    signKey.classList.add("signKey");
    signKey.classList.add("keys");
    signKey.textContent = signs[i];
    signKeys.append(signKey);
}