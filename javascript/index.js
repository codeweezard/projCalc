const userInput = document.querySelector("#input-number");
const addBtn = document.querySelector("#btn-add");
const subtractBtn = document.querySelector("#btn-subtract");
const multiplyBtn = document.querySelector("#btn-multiply");
const divideBtn = document.querySelector("#btn-divide");
const currentResult = document.querySelector("#current-result");

let defaultResult = 0;

const output = (result) => {
    currentResult.textContent = result;
}

const add = _ => {
    const enteredNumber = parseInt(userInput.value);
    defaultResult += enteredNumber;
    console.log(defaultResult);
    output(defaultResult);
}

const subtract = _ => {
    const enteredNumber = parseInt(userInput.value);
    defaultResult -= enteredNumber;
    output(defaultResult);
}

const multiply = _ => {
    const enteredNumber = parseInt(userInput.value);
    defaultResult *= enteredNumber;
    output(defaultResult);
}

const divide = _ => {
    const enteredNumber = parseInt(userInput.value);
    defaultResult /= enteredNumber;
    output(defaultResult);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);