// Global History Array
const calculationHistory = []

// Operation Function
function add(a, b) {
  const result = a + b;

  return result;
}

function subtract(a, b) {
  const result = a - b;

  return result;
}

function multiply(a, b) {
  const result = a * b;

  return result;
}

function divide(a, b) {
  if (b === 0) {
    console.log("Error: Cannot divide by zero");
    return null;
  }
  const result = a / b;

  return result;
}

// Logging calculation to history