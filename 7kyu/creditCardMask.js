// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// Examples (input --> output):
// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""

// // "What was the name of your first pet?"
// "Skippy" --> "##ippy"
// "Nananananananananananananananana Batman!" --> "####################################man!"

//P: string ''
//R: show only last 4 digit hide other digits, if < 4 digit -> string
//E:  "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""
//PseudoCode: if str < 4 -> str, str.length - 4 replace '#' and last 4 digits
function maskify(cc){
  //check if length is less then 4
  if(cc.length <= 4) return cc;
  //hide except last 4 digits
  return '#'.repeat(cc.length - 4) + cc.slice(-4);
}