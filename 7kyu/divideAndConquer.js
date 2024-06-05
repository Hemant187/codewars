// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

// Return as a number.

function divCon(x){
  //P: array with integer and str integer, 
  //R: integer - str integer, one number
  //E: [2,3,'2','2'] -> 1
  //PseudoCode: iterate through array add integer and substract string integer
  return x.reduce((acc, current) => {
        return (typeof current == 'number') ? acc + current : acc - Number(current)
  },0)
}