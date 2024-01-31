// Build Tower
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]

function buildTower(nFloors){
    let tower = [];
    for (let i =0; i< nFloors; i++){
        tower.push(' '.repeat(nFloors - i - 1)
                + "*".repeat(i + i +1)
                + " ".repeat(nFloors - i - 1)             
        );
    }
    return tower
}

// P: nFloor * tower
// R: number
// Example 
function buildTower(nFloors){
    return Array.from({length:nFloors}, function(v,k){
        const spaces  = ' '.repeat(nFloors - k - 1)
        return spaces + '*'.repeat(k + k + 1) + spaces
    })
}