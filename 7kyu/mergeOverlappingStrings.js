// This kata requires you to write a function which merges two strings together. It does so by merging the end of the first string with the start of the second string together when they are an exact match.

// "abcde" + "cdefgh" => "abcdefgh"
// "abaab" + "aabab" => "abaabab"
// "abc" + "def" => "abcdef"
// "abc" + "abc" => "abc"
// NOTE: The algorithm should always use the longest possible overlap.

// "abaabaab" + "aabaabab" would be "abaabaabab" and not "abaabaabaabab"
function mergeStrings(a, b){
  //   let count = 0
  //   console.log(a,b)
  //   for(let i = 0; i < a.length; i++){
  //     if(a[i] === b[count]){
  //       count++
  //     }else{
  //       count = 0;
  //       a[i] === b[count] && count++;
  //     }
  //   }
  //   return a + b.slice(count)
    //P: merge strings
    //R: str
    //E: 'abcd', 'cde' -> abcde
    //PseudoCode: a endswith b.slice(b.length - 0)
    for(let i = b.length; i>= 1; i--){
      if(a.endsWith(b.slice(0,i))){
        return a + b.slice(i)
      }
    }
    return a + b
  }
  