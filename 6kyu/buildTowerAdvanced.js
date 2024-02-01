// Build Tower Advanced
// Build Tower by the following given arguments:

// number of floors (integer and always greater than 0)
// block size (width, height) (integer pair and always greater than (0, 0))
// Tower block unit is represented as *. Tower blocks of block size (2, 1) and (2, 3) would look like respectively:

//   **
//   **
//   **
//   **
// for example, a tower of 3 floors with block size = (2, 3) looks like below

// [
//   '    **    ',
//   '    **    ',
//   '    **    ',
//   '  ******  ',
//   '  ******  ',
//   '  ******  ',
//   '**********',
//   '**********',
//   '**********'
// ]
// and a tower of 6 floors with block size = (2, 1) looks like below

// [
//   '          **          ', 
//   '        ******        ', 
//   '      **********      ', 
//   '    **************    ', 
//   '  ******************  ', 
//   '**********************'
// ]
// Don't return a whole string containing line-endings but a list/array/vector of strings instead!

function towerBuilder(nFloors, nBlockSz){
    const tower = [];
    const [w, h] = nBlockSz;
    for(let floor=0; floor<nFloors;floor++){
        const spaces = ' '.repeat(w * (nFloors - floor - 1));
        const stars = '*'.repeat(w * (floor + floor +1));
        for(let i=0; i<h;i++){
            tower.push(spaces + stars + spaces);
        }
    }
    return tower;
}

function towerBuilder(nFloors, nBlockSz) {
    const tower = []
    for(let i=0; i<nFloors; i++){
      for(let j=0; j<nBlockSz[1];j++){
        tower.push(' '.repeat(nBlockSz[0]).repeat(nFloors -i -1)
                  +'*'.repeat(nBlockSz[0]).repeat(i + i +1)
                  +' '.repeat(nBlockSz[0]).repeat(nFloors -i - 1))
      }
    }
    return tower
      
  }