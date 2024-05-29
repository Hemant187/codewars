// Write a function, isItLetter or is_it_letter or IsItLetter, which tells us if a given character is a letter or not.

const isItLetter = (char) => char.toLowerCase() !== char.toUpperCase() 

function isItLetter(character) {
  return "abcdefghijklmnopqrstuvwxyz".includes(character.toLowerCase());
}