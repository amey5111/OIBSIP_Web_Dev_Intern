let currentInput = "";
let previousInput = "";
let operator = "";
let answer = 0;

const smallUpperPartDisplay = document.getElementById('smallUpperPartDisplay');
const bigLowerPartDisplay = document.getElementById('bigLowerPartDisplay');

function updateDisplay() {
    bigLowerPartDisplay.textContent = currentInput || "0";
    smallUpperPartDisplay.textContent = previousInput;
}

function onNumClick(num) {
    if (currentInput === "0" && num === 0) return;
    currentInput += num;
    updateDisplay();
}

function onActionClick(action) {
    if (action === "sqrt") {
        currentInput = Math.sqrt(parseFloat(currentInput)).toString();
        updateDisplay();
        return;
    }
    if (action === '+-') {
        currentInput = (-parseFloat(currentInput)).toString();
        updateDisplay();
        return;
    }
    if (currentInput === "" && action === ".") {
        currentInput = "0.";
        updateDisplay();
        return;
    }
    if (currentInput !== "" || action === "(" || action === ")") {
        currentInput += action;
        updateDisplay();
    }
}

function onDeleteClick() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}

function onClearClick() {
    currentInput = "";
    previousInput = "";
    operator = "";
    updateDisplay();
}

function useAns() {
    currentInput = answer.toString();
    updateDisplay();
}

function onEnterClick() {
    try {
        previousInput = currentInput;
        currentInput = currentInput.replace(/x/g, '*'); // Replace 'x' with '*'
        currentInput = eval(currentInput).toString();
        answer = parseFloat(currentInput);
    } catch (error) {
        currentInput = "Error";
    }
    updateDisplay();
    setTimeout(() => {
        currentInput = "";
        previousInput = "";
        updateDisplay();
    }, 2000); // Clear display after 2 seconds
}

updateDisplay();
