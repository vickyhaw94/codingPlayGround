/*
Description:

Write a function called repeatStr which repeats the given string string exactly n times.

repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"
*/

function repeatStr (n, s) {
  var result = "";
  for(var i = 0; i <n; i ++){
    result += s;
  }
  return result;
}

/*one of the best solution*/
function repeatStr (n, s) {
  return s.repeat(n);
}