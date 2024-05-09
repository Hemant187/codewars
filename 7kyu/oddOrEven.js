// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// Examples:
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"
// Have fun!

function oddOrEven(arr) {
  return arr.reduce((a,b)=>a+b,0) % 2 ? 'odd' : 'even';
}

function oddOrEven(array) {
  //enter code here
 //P: determine sum of ele is odd or even
 //R:  only number, return str 
 //E: [0,1,4] -> 'odd'
 //pseudoCode: sum the eles and check odd or even
 if (!array) { array = [0]}
 const sum = array.reduce((acc, ele) => acc+ele , 0);
 return sum % 2 === 0 ? "even" : "odd";
}