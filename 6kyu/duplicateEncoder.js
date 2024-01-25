// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 


function duplicateEncode(word){
    let unique = []
    word = word.toLowerCase()
    for(let i=0 ; i<word.length; i++){
      if(word.indexOf(word[i]) == word.lastIndexOf(word[i])){
        unique.push('(')
      }else{
        unique.push(')')
      }
    }
    return unique.join('')
}
function duplicateEncode(word){
    let arr = word.toLowerCase().split('');
    let count = {}
    let result = []
    arr.forEach(item => {
      count[item] = (count[item] || 0 ) + 1 ;
    })
    arr.forEach(item => {
      if(count[item] > 1){
        result.push(')')
      }else{
        result.push('(')
      }
    })
    return result.join('')
}


function duplicateEncode(word){
    return word
  .toLowerCase()
  .split('')
  .map((a,i,w)=>{
     return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
    }).join('')
}
