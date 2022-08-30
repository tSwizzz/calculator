//Only problem with this calculator is that the user must
//press the "=" every time to get the result. It doesn't
//automatically grant the result every time another
//operand button is clicked. I'll fix later.. maybe 
let output = document.getElementById("screen");
let firstNum = 0, secondNum = 0, result = 0, total = 0;
let operand = false, add = false, subtract = false, multiply = false, div = false;
let theQuestionOfAllMotherlyQuestionsHaveBeenQuestioned = "?";

const resetCalc = document.getElementById("buttonAC");  resetCalc.addEventListener('click', reset);
const one = document.getElementById("button1");         one.addEventListener('click', choseOne);
const two= document.getElementById("button2");          two.addEventListener('click', choseTwo);
const three = document.getElementById("button3");       three.addEventListener('click', choseThree);
const four = document.getElementById("button4");        four.addEventListener('click', choseFour);
const five = document.getElementById("button5");        five.addEventListener('click', choseFive);
const six = document.getElementById("button6");         six.addEventListener('click', choseSix);
const seven = document.getElementById("button7");       seven.addEventListener('click', choseSeven);
const eight = document.getElementById("button8");       eight.addEventListener('click', choseEight);
const nine = document.getElementById("button9");        nine.addEventListener('click', choseNine);
const zero = document.getElementById("buttonZero");     zero.addEventListener('click', choseZero);
const divide = document.getElementById("buttonDivide"); divide.addEventListener('click', division);
const multi = document.getElementById("buttonMultiply"); multi.addEventListener('click', multiplication);
const sub = document.getElementById("buttonSubtract");  sub.addEventListener('click', subtraction);
const adding = document.getElementById("buttonAdd");    adding.addEventListener('click', addition);
const equal = document.getElementById("buttonEquals");  equal.addEventListener('click', solve);
const smiley = document.getElementById("buttonSmile");  smiley.addEventListener('click', smileyFace);
const posNeg = document.getElementById("buttonPosNeg"); posNeg.addEventListener('click', posNegSign);
const question = document.getElementById("buttonIDK");  question.addEventListener('click', questionMark);

function solve() {
    if(div) {
        total = firstNum / secondNum;
        output.textContent = total;
        firstNum = total, secondNum = 0, div = false;
    }
    if(multiply) {
        total = firstNum * secondNum;
        output.textContent = total;
        firstNum = total, secondNum = 0, multiply = false;
    }
    if(subtract) {
        total = firstNum - secondNum;
        output.textContent = total;
        firstNum = total, secondNum = 0, subtract = false;
    }
    if(add) {
        total = parseInt(firstNum) + parseInt(secondNum);
        output.textContent = total;
        firstNum = total, secondNum = 0, add = false;
    }
}

function reset() {
    output.textContent = 0, firstNum = 0, secondNum = 0, operand = false;
}
function addition() {
    operand = true, add = true;
}
function subtraction() {
    operand = true, subtract = true;
}
function multiplication() {
    operand = true, multiply = true;
}
function division() { 
    operand = true, div = true;
}
function smileyFace() { //meme
    output.textContent = "hurray my guy. reset the board now u broke it.";
}
function posNegSign() { //another meme
    output.textContent = "I'M TOO LAZY TO DO THIS OK AND IT WASN'T REQUIRED EITHER";
}
function questionMark() { //i don't even know
    output.textContent = theQuestionOfAllMotherlyQuestionsHaveBeenQuestioned;
}
function choseOne() {
    if(!operand) {
        output.textContent = firstNum + 1;
        firstNum = output.textContent;
    }
    else {
        output.textContent = secondNum + 1;
        secondNum = output.textContent;
    }
}
function choseTwo() {
    if(!operand) {
        output.textContent = firstNum + 2;
        firstNum = output.textContent;
    }
    else {
        output.textContent = secondNum + 2;
        secondNum = output.textContent;
    }
}
function choseThree() {
    if(!operand) {
        output.textContent = firstNum + 3;
        firstNum = output.textContent;
    }
    else {
        output.textContent = secondNum + 3;
        secondNum = output.textContent;
    }
}
function choseFour() {
    if(!operand) {
        output.textContent = firstNum + 4;
        firstNum = output.textContent;
    }
    else {
        output.textContent = secondNum + 4;
        secondNum = output.textContent;
    }
}
function choseFive() {
    if(!operand) {
        output.textContent = firstNum + 5;
        firstNum = output.textContent;
    }
    else {
        output.textContent = secondNum + 5;
        secondNum = output.textContent;
    }
}
function choseSix() {
    if(!operand) {
        output.textContent = firstNum + 6;
        firstNum = output.textContent;
    }
    else {
        output.textContent = secondNum + 6;
        secondNum = output.textContent;
    }
}
function choseSeven() {
    if(!operand) {
        output.textContent = firstNum + 7;
        firstNum = output.textContent;
    }
    else {
        output.textContent = secondNum + 7;
        secondNum = output.textContent;
    }
}
function choseEight() {
    if(!operand) {
        output.textContent = firstNum + 8;
        firstNum = output.textContent;
    }
    else {
        output.textContent = secondNum + 8;
        secondNum = output.textContent;
    }
}
function choseNine() {
    if(!operand) {
        output.textContent = firstNum + 9;
        firstNum = output.textContent;
    }
    else {
        output.textContent = secondNum + 9;
        secondNum = output.textContent;
    }
}
function choseZero() {
    if(!operand) {
        output.textContent = firstNum + 0;
        firstNum = output.textContent;
    }
    else {
        output.textContent = secondNum + 0;
        secondNum = output.textContent;
    }
}