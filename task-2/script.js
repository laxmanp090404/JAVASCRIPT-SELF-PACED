const outputScreen = document.querySelector(".outputscreen");

// Create display element dynamically
const display = document.createElement("li");
// 0 before any expression
display.textContent = "0";
outputScreen.appendChild(display);

let currentInput = "";

// Selecting all buttons
const buttons = document.querySelectorAll(".keys");

// Adding event listeners ie for click
buttons.forEach(button => {
    button.addEventListener("click", () => {
        // extract text content /value
        const value = button.textContent;

        // Numbers
        if (button.classList.contains("num")) {
            handleNumber(value);
        }

        // Operators
        else if (button.id === "plus") handleOperator("+");
        else if (button.id === "minus") handleOperator("-");
        else if (button.id === "multiply") handleOperator("*");
        else if (button.id === "divide") handleOperator("/");

        // Equalto
        else if (button.id === "equalto") calculateResult();

        // Clear
        else if (button.id === "clearBtn") clearAll();

        // Backspace
        else if (button.id === "backspaceBtn") backspace();
    });
});

// Handle numbers
function handleNumber(num) {
    if (currentInput === "0") {
        currentInput = num;
    } else {
        currentInput += num;
    }
    updateDisplay();
}

// Handle operators
function handleOperator(operator) {

    //operator is pressed first then it is invalid like  + 5
    if (currentInput === "") return;

    const lastChar = currentInput.slice(-1);

    // Prevent multiple operators like 5+* -> 5*
    if ("+-*/".includes(lastChar)) {
        currentInput = currentInput.slice(0, -1) + operator;
    } else {
        currentInput += operator;
    }

    updateDisplay();
}

// Calculate result
function calculateResult() {

    const result = eval(currentInput);
    currentInput = result.toString();
    updateDisplay();
}

// Clear all
function clearAll() {
    currentInput = "";
    display.textContent = "0";
}

// Backspace
function backspace() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}

// Update display
function updateDisplay() {
    display.textContent = currentInput || "0";
}