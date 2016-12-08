/*
Description:

Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

If the input array is empty or null, return an empty array:

C#/Java: new int[] {} / new int[0];
C++: std::vector<int>();
JavaScript/CoffeeScript/PHP: [];
ATTENTION!

The passed array should NOT be changed. Read more here.

For example:

input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]
return [10, -65].
*/

function countPositivesSumNegatives(input) {
    var resultArray = [];
    var countP = 0;
    var sumN = 0;
    if(input === null || input.length == 0){
       return [];
    }else{
        for(var i = 0; i<input.length; i++){
         if(input[i] > 0) { 
           countP += 1;
           } 
         else{
           sumN += input[i];
           }
       }  
    }
    resultArray.push(countP);
    resultArray.push(sumN);
    return resultArray;
}

/*one of the best solution*/
function countPositivesSumNegatives(input) {
  return input && input.length ? input.reduce(function(p, c, i, s){
    c <= 0 ? p[1] += c : p[0] += 1;
    return p;
  }, [0, 0]) : [];
}