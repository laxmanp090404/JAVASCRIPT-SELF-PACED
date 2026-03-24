# Simple Calculator


## Features

- **Basic Arithmetic Operations**: verify addition (`+`), subtraction (`-`), multiplication (`*`), and division (`/`).
- **Clear Function**: Reset the calculator to its initial state with the 'C' button.
- **Backspace**: Delete the last entered digit or operator.

## Code Highlights

The calculation logic uses a safe evaluation approach and prevents invalid operator sequences:

```javascript
// Prevent multiple operators like 5+* -> 5*
if ("+-*/".includes(lastChar)) {
    currentInput = currentInput.slice(0, -1) + operator;
} else {
    currentInput += operator;
}
```
