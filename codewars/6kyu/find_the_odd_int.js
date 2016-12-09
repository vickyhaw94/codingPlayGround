/*
Description:

Given an array, find the int that appears an odd number of times.

There will always be only one integer that appears an odd number of times.
*/

function findOdd(A) {
  var result = 0;
  var sorted = A.sort(function(a, b){return a - b;});
  console.log(sorted);
  for(var i = 0; i <sorted.length; i++){
    if((sorted.lastIndexOf(sorted[i]) - sorted.indexOf(sorted[i])) % 2 === 0){
      result = sorted[i];
    }
  }
  return result;
}

/*
One of the best solution
*/
const findOdd = (xs) => xs.reduce((a, b) => a ^ b);