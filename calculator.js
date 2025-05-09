// Global History Array
const calculationHistory = []

// Operation Functions
function add(a, b) {
  const result = a + b;
  logCalculation(a, b, "+", result)
  console.log(`Result: ${result}`)
  return result;
}

function subtract(a, b) {
  const result = a - b;
  logCalculation(a, b, "-", result)
  console.log(`Result: ${result}`)
  return result;
}

function multiply(a, b) {
  const result = a * b;
  logCalculation(a, b, "*", result)
  console.log(`Result: ${result}`)
  return result;
}

function divide(a, b) {
  if (b === 0) {
    console.log("Error: Cannot divide by zero");
    return null;
  }
  const result = a / b;
  logCalculation(a, b, "/", result)
  console.log(`Result: ${result}`)
  return result;
}

// Logging calculation to history
function logCalculation(a, b, operator, result) {
  calculationHistory.push({
    operand1: a,
    operand2: b,
    operator: operator,
    result: result
  });
}

// Display history
function showHistory() {
  if (calculationHistory.length === 0) {
    console.log("No calculations yet");
    return;
  }

  console.log("Calculation History");
  calculationHistory.forEach((calc, index) => {
    console.log(`${index + 1}: ${calc.operand1} ${calc.operator} ${calc.operand2} = ${calc.result}`);
  });
}

add(10, 5);
subtract(5, 2);
multiply(2, 4);
divide(18, 6);
divide(10, 0);
showHistory();