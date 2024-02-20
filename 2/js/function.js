const checkLength = function (string, maxlength) {
  if(string <= maxlength){
    return true;
  }
  return false;
};

checkLength();


const sumNumbers = function(firstNumber, secondNumber){
  if(firstNumber % 2 && secondNumber % 2 === 0){
    const sum = firstNumber + secondNumber;
    return sum;
  }
};

sumNumbers();
