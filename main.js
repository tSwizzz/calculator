let output = document.getElementById("screen");
let firstNum = 0;
let secondNum = 0;
let total;
let operand = false;

const resetCalc = document.getElementById("buttonAC");
    resetCalc.addEventListener('click', reset);
const seven = document.getElementById("button7");
    seven.addEventListener('click', choseSeven);
const eight = document.getElementById("button8");
    eight.addEventListener('click', choseEight);
const divide = document.getElementById("buttonDivide");
    divide.addEventListener('click', division);

//calculations//////////
function reset () {
    output.textContent = 0;
    firstNum = 0;
    secondNum = 0;
    operand = false;
}

function division () {
     return operand = true;
     }
//calculations end//////////

function choseSeven () {
    if(!operand) {
        output.textContent = firstNum + 7;
        firstNum = output.textContent;
    }
    else {
        output.textContent = secondNum + 7;
        secondNum = output.textContent;
    }
}

function choseEight () {
    if(!operand) {
        output.textContent = firstNum + 8;
        firstNum = output.textContent;
    }
    else {
        output.textContent = secondNum + 8;
        secondNum = output.textContent;
    }
}
