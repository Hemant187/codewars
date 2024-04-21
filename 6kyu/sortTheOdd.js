// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

// P: sorting only odd element in ascending order, don't change even
// R: result -> array, given array will not empty ,console log and return 
// E: [4,5,8,3,7] -> [4,3,8,5,7]
// Pseudo code: 
// 1.an array of odds 2. sort in ascending order 3. loop the array and check if ele is odd replace with first ele of odd array and remove first ele of odd array

function sortTheOdd(array){
  const odd = array.filter(ele=> ele%2 != 0).sort((a,b)=> a-b)
  const result = array.map(ele => ele%2==0 ? ele : odd.shift())
  console.log(result)
  return result
}