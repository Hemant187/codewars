// Task
// Let's say that "g" is happy in the given string, if there is another "g" immediately to the right or to the left of it.

// Find out if all "g"s in the given string are happy.

// Example
// For str = "gg0gg3gg0gg", the output should be true.

// For str = "gog", the output should be false.

// Input/Output
// [input] string str
// A random string of lower case letters, numbers and spaces.

// [output] a boolean value
// true if all "g"s are happy, false otherwise.

function gHappy(str) {
  //P: String
  //R: true or false
  //E: str = "gg0gg3gg0gg" -> true, str = "gog" -> false
  //PseudoCode: iterate if g then check next or previous ele is g or not
  let result = true
  str.split('').forEach((ele, i) => {
    if(ele === 'g'){
      if(str[i+1] !== 'g' && str[i-1] !== 'g'){
        result = false
      }
    }            
  })
  return result
}