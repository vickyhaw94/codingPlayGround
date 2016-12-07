/*
Description:

Write a small function that returns the values of an array that are not odd.

All values in the array will be integers. Return the good values in the order they are given.

function noOdds( values )
*/

function noOdds( values ){
  var result=[];
  for(var i=0; i<values.length; i++){
    if(values[i]%2 == 0){
      result.push(values[i]);
    }
  }
  return result;
}

/*one of the best solution*/
function no_odds( values ){
  return values.filter(function(item) {
    return item % 2 == 0  
  });
}