// A 6-sided die is rolled a number of times and the results are plotted as a character-based histogram.

// Example:

//     10
//     #
//     #
// 7   #
// #   #
// #   #     5
// #   #     #
// # 3 #     #
// # # #     #
// # # # 1   #
// # # # #   #
// -----------
// 1 2 3 4 5 6
// Task
// You will be passed all the dice roll results, and your task is to write the code to return a string representing a histogram, so that when it is printed it has the same format as the example.

// Notes
// There are no trailing spaces on the lines
// All lines (including the last) end with a newline \n
// A count is displayed above each bar (unless the count is 0)
// The number of rolls may vary but is always less than 100
var histogram = function(rolls) {
  //get max num
  let maxCount = Math.max(...rolls)
  //end of histogram
  let ans = '-----------\n1 2 3 4 5 6\n'
  if(maxCount == 0) return ans
  let histogram = ''
  //array to str then trim-end spaces give new line
  for(let i = maxCount; i>=0; i--){
    histogram += rolls.map(ele => {
      if(i == ele && ele > 0){
        return ele
      }else if(ele > i){
        return '#'
      }else{
        return ' '
      }
    }).join(' ').trimEnd() + '\n'
  }
histogram += ans
return histogram
}
