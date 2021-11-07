const firstNumber = document.querySelector(".first-number");
const secondNumber = document.querySelector(".second-number");
const btnSum = document.querySelector(".btn-sum");
const btnSubstract = document.querySelector(".btn-substract");
const btnMultiplication = document.querySelector(".btn-multiplication");
const btnDivision = document.querySelector(".btn-division");

const output = document.querySelector(".output");

btnSum.addEventListener("click", SumClickHandler);

function SumClickHandler() {
  var sum = Number(firstNumber.value) + Number(secondNumber.value);
  output.innerText = sum;
}

btnSubstract.addEventListener("click", SubstractClickHandler);

function SubstractClickHandler() {
  var substract = Number(firstNumber.value) - Number(secondNumber.value);
  output.innerText = substract;
}

btnMultiplication.addEventListener("click", MultiplicationClickHandler);

function MultiplicationClickHandler() {
  var multiplication = Number(firstNumber.value) * Number(secondNumber.value);
  output.innerText = multiplication;
}

btnDivision.addEventListener("click", DivisionClickHandler);

function DivisionClickHandler() {
  var division = Number(firstNumber.value) / Number(secondNumber.value);
  output.innerText = division;
}
