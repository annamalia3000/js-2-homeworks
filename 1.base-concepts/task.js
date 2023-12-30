"use strict"
function solveEquation(a, b, c) {
  let d = Math.pow(b, 2) - 4 * a * c;
  let arr = [];

  if (d === 0) {
    arr.push(-b / (2 * a));
  } else if (d > 0) {
    arr.push((-b + Math.sqrt(d)) / (2 * a));
    arr.push((-b - Math.sqrt(d) ) / (2 * a));
  };

  return arr;
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let percentMonth = percent / 100 / 12;
  let loanBody = amount - contribution;
  let payment = loanBody * (percentMonth + (percentMonth / (((1 + percentMonth) ** countMonths) - 1)));
  let totalPayment = (payment * countMonths).toFixed(2);

  return (parseFloat(totalPayment)); 
}