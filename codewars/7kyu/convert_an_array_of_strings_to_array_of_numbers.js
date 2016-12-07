/*
Description:

Oh no!

Some really funny web dev gave you an array of numbers from his API response as an array of strings!

You need to cast the whole array to the correct type.

Create the function

that takes as a parameter an array of numbers represented as strings and outputs an array of numbers.

ie:["1", "2", "3"] to [1, 2, 3]

Note that you can receive floats as well.
*/

function toNumberArray(stringarray){
  var returnArray = [];
  for(var i = 0; i < stringarray.length; i++){
    returnArray.push(parseFloat(stringarray[i]));
  }
  return returnArray;
}

/*one of the best solution*/
function toNumberArray(stringarray){
  return stringarray.map(Number);
}