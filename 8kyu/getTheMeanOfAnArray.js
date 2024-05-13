// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.



function getAverage(marks){
  //TODO : calculate the downward rounded average of the marks array
  //P: calculate average, valid array
  //R: nearest integer
  //E: [2,3,4,1] -> 2.5 -> 3
  //PseudoCode : sum of array, divide to the length and return nearest integer
  const sum = marks.reduce((acc, ele) => acc + ele);
  return Math.floor(sum / marks.length);
}