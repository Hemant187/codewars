// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

function longest(s1, s2) {
    const str = s1.concat(s2);
    let uniq = "";
    for(let i=0 ;i<str.length;i++){
      if(uniq.includes(str[i]) == false){
        uniq += str[i]
      }
    }
    return uniq.split('').sort().join('')
    // return Array.from(new Set(s1,s2)).sort().join('')
    // return [... new Set(s1,s2)].sort().join('')
  }