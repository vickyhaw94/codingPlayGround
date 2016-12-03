/*In this simple assignment you are given a number and have to make it negative.
But maybe the number is already negative?

Example:

makeNegative(1); // return -1
makeNegative(-5); // return -5
makeNegative(0); // return 0
*/

/*My Solution*/
function makeNegative(num) {
  if(num < 0){
    return num;
  }
  else if(num > 0){
    return num * -1;
  }else{
    return 0;
  }
}

/*One of the best solution using the .abs features*/
function makeNegative(num) {
  return -Math.abs(num);
}

/*Using ternary operator which takes three operands and this is also known as a shortcut for if statement */

function makeNegative(num) {
  return num < 0 ? num : -num;
}
