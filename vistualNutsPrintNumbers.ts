

/*
  That code it's working with 1, 100 or 1, 500 and so on.

  To keep it working when developers making small features, we should have unit tests, 
  unit tests in that case should prevent new features break our code.

  We could have BDD with integration tests to test our api calls
*/

export function visualNutsPrintNumbers(startAtNumber: number, endAtNumber: number) { 
  for (let numberToDivide = startAtNumber; numberToDivide < endAtNumber; numberToDivide++) { 
    
    if (isDivisibleBy(numberToDivide, 3) && isDivisibleBy(numberToDivide, 5)) { 
      console.log('Visual Nuts');
      continue;
    }
    if (isDivisibleBy(numberToDivide, 3)) { 
      console.log('Visual');      
      continue;
    }
    if (isDivisibleBy(numberToDivide, 5)) {       
      console.log('Nuts');
      continue;
    }
    console.log(numberToDivide)
  }
}

export function isDivisibleBy(numberToDivide: number, divisor: number) { 
  return (numberToDivide % divisor) === 0;
}
