// Given an array of numbers and an index, return either the index of the smallest number that is larger than the element at the given index, or -1 if there is no such index ( or, where applicable, Nothing or a similarly empty value ).

// Notes
// Multiple correct answers may be possible. In this case, return any one of them.
// The given index will be inside the given array.
// The given array will, therefore, never be empty.

// Example
// leastLarger( [4, 1, 3, 5, 6], 0 )  =>  3
// leastLarger( [4, 1, 3, 5, 6], 4 )  => -1

function leastLarger(a,i){
  return console.log(a.indexOf(Math.min(...a.filter(e => e> a[i]))))
}

function leastLarger(a,i) {
  //P: return index of smallest num larger than given index
  //R: index or -1
  //E: ([1,2,3,4,5], 2) => 3
  //PsuedoCode: any ele in arr that is larger than indexed ele return ele's index else -1
  
  let result = -1;
  const index = a[i];
  const b = [...a].sort((a,b) => a-b);
  
  for(let ele of b){
    if(ele > index){
      result = a.indexOf(ele)
      break
    }
  }
  return result
}