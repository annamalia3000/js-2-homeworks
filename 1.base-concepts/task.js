"use strict"
function solveEquation(a, b, c) {
  let d = Math.pow(b, 2) - 4 * a * c;
  let arr = [];

  if (d < 0) {
    arr = [];
  } else if (d === 0) {
    arr.push(-b / (2 * a));
  } else {
    arr.push((-b + Math.sqrt(d)) / (2 * a));
    arr.push((-b - Math.sqrt(d) ) / (2 * a));
  };

  return arr;
}



function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let P = percent / 100 / 12;
  let S = amount - contribution;
  let payment = S * (P + (P / (((1 + P) ** countMonths) - 1)));
  let total = (payment * countMonths).toFixed(2);

  return (parseFloat(total)); 
}