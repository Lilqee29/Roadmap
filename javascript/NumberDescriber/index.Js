const isPositive = (num) => num > 0;
const isNegative = (num) => num < 0;
const isZero = (num) => num === 0;
const isEven =(num)=> num%2 === 0

function describeNumber(number){
  return { positive: isPositive(number), 
      negative: isNegative(number), 
      zero: isZero(number), 
      even: isEven(number), 
      odd: !isEven(number) 
    }
}



