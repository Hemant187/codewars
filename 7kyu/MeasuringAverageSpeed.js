// eed is a crucial measure of success for any aspiring warrior, so let's write a function to calculate it.

// Average Speed is calculated by dividing distance by time. Given two strings as input the first of which indicates a codewarrior's distance travelled (in metres or kilometres) and the second indicating the time it takes them to travel (in seconds or minutes), return a string indicating their speed in miles per hour rounded to the nearest integer.

// For the purposes of this kata one metre per second is defined as 2.23694 miles per hour.

// So for example given the input values of distance & time "3km" and "5min" we should return a speed value of "22mph".

function calculateSpeed(distance, time) {
  distance = distance.includes('km') ?  (distance.slice(0, -2) * 1000) : distance.slice(0, -1)
  time = time.includes('min') ? (time.slice(0,-3) * 60) : time.slice(0, -1)
  console.log( distance, time)
  let result = Math.round(((distance) / (time)) * 2.23694)
  return result + 'mph'
}
