function getArrayParams(...arr) {
  if (arr.length == 0) {
    return 0;
  }

  let min = Math.min(...arr);
  let max = Math.max(...arr);

  function findAverage(acc, item, index) {
    let sum = acc + item;
    if (index === arr.length - 1) {
      return sum / arr.length
    }
    return sum
  }
  
 let avg = +(arr.reduce(findAverage, 0)).toFixed(2);

  return {min, max, avg};
}

function summElementsWorker(...arr) {
  if (arr.length == 0) {
    return 0;
  }

  let sum = arr.reduce((acc, iteam) => {
    return acc + iteam
  }, 0)

  return sum;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length == 0) {
    return 0;
  }

  let difference = Math.max(...arr) - Math.min(...arr);

  return difference;

}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }

  let differenceEvenOdd = sumEvenElement - sumOddElement;

  return differenceEvenOdd;

}

function averageEvenElementsWorker(...arr) {
  if (arr.length == 0) {
    return 0;
  }

  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    } 
  }
  
  let averageEvenElements = sumEvenElement / countEvenElement;

  return averageEvenElements;
}

function makeWork (arrOfArr, func) {
  maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    func(...arrOfArr[i]);
    const result = func(...arrOfArr[i]);
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    } 
  };

  

  return maxWorkerResult;
 
}

