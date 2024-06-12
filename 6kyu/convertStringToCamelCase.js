// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

//Params : string
//Result: string, cameCase

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"

// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"
//PseudoCode: create result variable and iterate through str and join chars to result if (- or _) next char capital
//Code:
function toCamelCase(str){
  let result = ''
  if(str.length <= 1) return str;
  for(let i =0; i< str.length; i++){
    if(str[i] === '_' || str[i] === '-'){
      result +=  str[i+1].toUpperCase();
      i++;
    }else{
      result += str[i]
    }
  }
  console.log(result)
  return result
}
toCamelCase("the-stealth-warrior")