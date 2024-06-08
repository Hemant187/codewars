// Kids drink toddy.
// Teens drink coke.
// Young adults drink beer.
// Adults drink whisky.
// Make a function that receive age, and return what they drink.

// Rules:

// Children under 14 old.
// Teens under 18 old.
// Young under 21 old.
// Adults have 21 or more.
// Examples: (Input --> Output)

// 13 --> "drink toddy"
// 17 --> "drink coke"
// 18 --> "drink beer"
// 20 --> "drink beer"
// 30 --> "drink whisky"

//Params: always Number !null !""
//Result: string
//Example: 13 --> "drink toddy", 20 --> "drink whisky"
//PseudoCode: function(age){logic} age >= 21 whisky, >=18 beer, >=14 coke <14 toddy
function peopleWithAgeDrink(age){
  return age>=21 ? 'drink whisky' : age >= 18 ? 'drink beer' : age >= 14 ? 'drink coke' : 'drink tobby';
}
// peopleWithAgeDrink(10)
// peopleWithAgeDrink(14)
// peopleWithAgeDrink(20)
// peopleWithAgeDrink(29)