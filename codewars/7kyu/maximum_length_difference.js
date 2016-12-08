/*
Description:

You are given two arrays a1 and a2 of strings. 
Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

Find max(abs(length(x) − length(y)))

If a1 or a2 are empty return -1 in each language except in Haskell where you will return Nothing.

Example:

s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
mxdiflg(s1, s2) --> 13
*/

function mxdiflg(a1, a2) {
  if(a1.length == 0 || a2.length == 0){
    return -1;
  }else{
    var maxA1 = 0;
    var maxA2 = 0;
    var minA1 = a1[0].length;
    var minA2 = a2[0].length;
    var maxMinArrA1 = [];
    var maxMinArrA2 = [];
    for(var i = 0; i<a1.length; i++){
      if(a1[i].length > maxA1){
        maxA1 = a1[i].length;
      }
    }
    for(var i = 0; i<a2.length; i++){
      if(a2[i].length > maxA2){
        maxA2 = a2[i].length;
      }
    }
    
    for(var i = 0; i<a1.length; i++){
      if(a1[i].length < minA1){
        minA1 = a1[i].length;
      }
    }
    for(var i = 0; i<a2.length; i++){
      if(a2[i].length < minA2){
        minA2 = a2[i].length;
      }
    }
    
    maxMinArrA1.push(maxA1);
    maxMinArrA2.push(maxA2);
    maxMinArrA1.push(minA1);
    maxMinArrA2.push(minA2);
  }
  
  maxMinArrA1 = maxMinArrA1.sort((a, b) => a - b);
  maxMinArrA2 = maxMinArrA2.sort((a, b) => a - b);
  
  var maxDifference = maxMinArrA1[maxMinArrA1.length -1] - maxMinArrA2[0];
  var maxDifference2 = maxMinArrA2[maxMinArrA2.length -1] - maxMinArrA1[0];
  
  return (maxDifference > maxDifference2) ? maxDifference : maxDifference2;
}



/*two of the best solution*/
function mxdiflg(a1, a2) {
  if (a1.length === 0 || a2.length === 0) return -1
  let l1 = a1.map(str => str.length)
  let l2 = a2.map(str => str.length)
  return Math.max(Math.max(...l1) - Math.min(...l2), Math.max(...l2) - Math.min(...l1))
}

function mxdiflg(a1, a2) {
    var mx = -1;
    for (var x in a1)
        for (var y in a2) {
            var diff = Math.abs(a1[x].length - a2[y].length);
            if (diff > mx)
                mx = diff;
        }
    return mx;
}