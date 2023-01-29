let number1 = "";
let number2 = "";
let operator = "";

function clear() {
  number1 = "";
  number2 = "";
  operator = "";
  screen.textContent = "0";
}

function addToFirstNumber(num) {
    if(number1.length < 6) { 
    number1 += num;
    screen.textContent = number1;
    }
}

function addToSecondNumber(num) {
    if(number2.length < 6) {
        number2 += num;
        screen.textContent = number2;
    }
}

function add(num1, num2) {
    return parseInt(num1) + parseInt(num2);
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
  if (num2 == 0){
    alert("You can't divide by zero!");
    clear();
    return screen.textContent = "0";
  } else { 
    return Math.round((num1 / num2) * 100) / 100;
  }
}

function operate(operator, num1, num2) {
    if(operator == '+') {
        return add(num1, num2);
    } else if (operator == '-') {
        return subtract(num1, num2);
    } else if (operator == '*') {
        return multiply(num1, num2);
    } else if(operator == '/') {
        return divide(num1, num2);
    }
}

const zero = document.querySelector('.item18');
zero.addEventListener("click", () => {
  if (operator == "") {
    addToFirstNumber(0);
  } else {
    addToSecondNumber(0);
  }
});

const one = document.querySelector('.item14');
one.addEventListener("click", () => {
  if (operator == "") {
    addToFirstNumber(1);
  } else {
    addToSecondNumber(1);
  }
});

const two = document.querySelector('.item15');
two.addEventListener("click", () => {
  if (operator == "") {
    addToFirstNumber(2);
  } else {
    addToSecondNumber(2);
  }
});

const three = document.querySelector('.item16');
three.addEventListener("click", () => {
  if (operator == "") {
    addToFirstNumber(3);
  } else {
    addToSecondNumber(3);
  }
});

const four = document.querySelector('.item10');
four.addEventListener("click", () => {
  if (operator == "") {
    addToFirstNumber(4);
  } else {
    addToSecondNumber(4);
  }
});

const five = document.querySelector('.item11');
five.addEventListener("click", () => {
  if (operator == "") {
    addToFirstNumber(5);
  } else {
    addToSecondNumber(5);
  }
});

const six = document.querySelector('.item12');
six.addEventListener("click", () => {
  if (operator == "") {
    addToFirstNumber(6);
  } else {
    addToSecondNumber(6);
  }
});

const seven = document.querySelector('.item6');
seven.addEventListener("click", () => {
  if (operator == "") {
    addToFirstNumber(7);
  } else {
    addToSecondNumber(7);
  }
});

const eight = document.querySelector('.item7');
eight.addEventListener("click", () => {
  if (operator == "") {
    addToFirstNumber(8);
  } else {
    addToSecondNumber(8);
  }
});

const nine = document.querySelector('.item8');
nine.addEventListener("click", () => {
  if (operator == "") {
    addToFirstNumber(9);
  } else {
    addToSecondNumber(9);
  }
});

const screen = document.querySelector('.item1');

const divideSign = document.querySelector('.item5');
divideSign.addEventListener("click", () => {
  if(number2 == ""){
    operator = "/";
  } else {
    number1 = operate(operator, number1, number2);
    number2 = "";
    operator = "/";
    screen.textContent = number1;
  }
});

const multiplySign = document.querySelector('.item9');
multiplySign.addEventListener("click", () => {
  if (number2 == "") {
    operator = "*";
  } else {
    number1 = operate(operator, number1, number2);
    number2 = "";
    operator = "*";
    screen.textContent = number1;
  }
});

const subtractSign = document.querySelector('.item13');
subtractSign.addEventListener("click", () => {
if (number2 == "") {
    operator = "-";
  } else {
    number1 = operate(operator, number1, number2);
    number2 = "";
    operator = "-";
    screen.textContent = number1;
  }
});

const addSign = document.querySelector('.item17');
addSign.addEventListener("click", () => {
  if (number2 == "") {
    operator = "+";
  } else {
    number1 = operate(operator, number1, number2);
    number2 = "";
    operator = "+";
    screen.textContent = number1;
  }
});

const equalSign = document.querySelector('.item20');
equalSign.addEventListener("click", () => {
  if (number1 == "" || number2 == "" || operator == ""){
    screen.textContent = "0";
  } else {
    screen.textContent = operate(operator, number1, number2);
  }
});

const clearButton = document.querySelector('.item2');
clearButton.addEventListener("click", clear);

const point = document.querySelector('.item19');
point.addEventListener("click", () => {
  if (operator == "") {
    if(number1.includes(".")){
      return;
    } else {
      addToFirstNumber(".");
    }
  } else {
    if(number2.includes(".")){
      return;
    } else {
      addToSecondNumber(".");
    }
  }
});
