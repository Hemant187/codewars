// Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// "Hey fellow warriors"  --> "Hey wollef sroirraw" 
// "This is a test        --> "This is a test" 
// "This is another test" --> "This is rehtona test"

// function spinWords(string){
//   //P: take string Words more than 5 letters reverse and return the string
//   //R: str with space if str have more than one word
//   //E: 'This is another test' -> 'This is rehtona test'
//   //PsuedoCode:str -> array, apply loop and condition for word which have more than 5 latters
//   //Code:
//   const result = string.split(' ').map(ele => {
//     if(ele.length >= 5){ 
//       return ele.split('').reverse().join('')
//     }else{
//       return ele
//     }
//   }).join(' ')
//   return result
// }


function spinWords(words){
  return words.split(' ').map(function (word) {
    return (word.length > 4) ? word.split('').reverse().join('') : word;
  }).join(' ');
}