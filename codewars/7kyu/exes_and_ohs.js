/*
Description:

Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contains any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/

function XO(str) { 
    var strL = str.toLowerCase();
    var xArr =[];
    var oArr =[];
    for(var i = 0; i< strL.length; i++){
      if(strL[i] == "x" ){
        xArr.push(strL[i]);
      }else if(strL[i] == "o"){
        oArr.push(strL[i]);
      }
    }
    return xArr.length == oArr.length ? true : false;
}

/*one of the best solution*/
function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}