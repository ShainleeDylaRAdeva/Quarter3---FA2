function calculate(operation) {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  let result;

  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById('result').innerText = "Please enter valid numbers.";
    return;
  }

  if (operation === '+') {
    result = num1 + num2;
    document.getElementById('result').innerText = `The sum of ${num1} and ${num2} is ${result}.`;
  } else if (operation === '-') {
    result = num1 - num2;
    document.getElementById('result').innerText = `The difference of ${num1} and ${num2} is ${result}.`;
  } else if (operation === '*') {
    result = num1 * num2;
    document.getElementById('result').innerText = `The product of ${num1} and ${num2} is ${result}.`;
  } else if (operation === '/') {
    if (num2 !== 0) {
      result = num1 / num2;
      document.getElementById('result').innerText = `The quotient of ${num1} and ${num2} is ${result}.`;
    } else {
      document.getElementById('result').innerText = "Error: Division by zero is not allowed.";
    }
  } else if (operation === '%') {
    result = num1 % num2;
    document.getElementById('result').innerText = `The remainder of ${num1} divided by ${num2} is ${result}.`;
  } else {
    document.getElementById('result').innerText = "The operation is invalid.";
  }
}
