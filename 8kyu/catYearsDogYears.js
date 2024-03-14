// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

var humanYearsCatYearsDogYears = function(humanYears) {
    let catYear =0 , dogYear=0
    for(i=1; i<=humanYears;i++){
      if(i==1){catYear+=15, dogYear+=15}
      if(i==2){catYear+=9, dogYear+=9}
      if(i>2){catYear+=4, dogYear+=5}
    }
    return [humanYears,catYear,dogYear];
  }
