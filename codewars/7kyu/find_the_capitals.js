/*
Description:

Instructions

Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

Example

Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );
*/

function capitals(word) {
  var resultArr = [];
	for(var i =0; i<word.length; i++){
    if(word[i] === word[i].toUpperCase()){
      resultArr.push(i);
    }
  }
  return resultArr;
};

/*one of the best solution*/
var capitals = function (word) {
  return word.split('').reduce(function(n, l, i){
    return /[A-Z]/.test(l) && n.push(i), n;
  }, []);
};
