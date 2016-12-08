/*
Description:

Your task is to write function findSum.

Upto and including n, this function will return the sum of all multiples of 3 and 5.

For example:

findSum(5) should return 8 (3 + 5)

findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)
*/

function findSum(n) {
  var numberOfThree = Math.floor(n/3);
  var numberOfFive = Math.floor(n/5);
  var arrThree = [];
  var arrFive = [];
  var result = 0;
  for(var i = 1; i <= numberOfThree; i++){
  arrThree.push(i* 3);
  }
  for(var i = 1; i <= numberOfFive; i++){
  arrFive.push(i* 5);
  }
  
  var arrCombine = arrThree.concat(arrFive);
  var arrCombine = arrCombine.filter(function(item,index){
    return arrCombine.indexOf(item) === index;
  });
  
  for(var i = 0; i< arrCombine.length; i++){
    result += arrCombine[i];
  }
  
  return result;
  
}

/*one of the best solution*/
function findSum(n) {
  let result = 0;
  for (let i = 0; i <= n; i += 1) {
    if (i % 3 ===0 || i % 5 === 0) result += i
  }
  return result
}