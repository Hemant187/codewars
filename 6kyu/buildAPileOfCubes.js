// You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?

// The parameter of the function findNb (find_nb, find-nb, findNb, ...) will be an integer m and you have to return the integer n such as
// Examples:
// findNb(1071225) --> 45

// findNb(91716553919377) --> -1

function findNb(m) {
  let n = 1;
  let volume = 0;
  while (volume < m) {
    volume += Math.pow(n, 3);
    if (volume == m) {
      return n;
    }
    n++;
  }
  return -1;
}