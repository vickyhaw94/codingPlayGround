/*
Description:

It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter.

*/

function removeChar(str){
  var arr =[];
  for(var i = 0 ; i < str.length; i++){
    if(i == 0 || i == str.length-1 ){
    }
    else{
      arr.push(str[i]);
    }
  }
  return arr.join("");
};

/*two of the best solution*/
function removeChar(str) {
  return str.slice(1, -1);
}

function removeChar(str){
 return str.substring(1, str.length-1);
};
