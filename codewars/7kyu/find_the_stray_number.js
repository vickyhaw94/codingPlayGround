/*You are given an odd-length array of integers, 
in which all of them are the same, except for one single number.

Implement the method stray which accepts such array, 
and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples:

[1, 1, 2] => 2

[17, 17, 3, 17, 17, 17, 17] => 3*/

/*My Solution*/
function stray(numbers) {
  var arrOne = [];
  var arrTwo = [];
  var preset = numbers[0];
  for(var i = 0; i < numbers.length; i++){
    if(preset == numbers[i]){
       arrOne.push(numbers[i]);
    }
    else{
      arrTwo.push(numbers[i])
    }
  }
  if(arrOne.length > arrTwo.length){
    return parseInt(arrTwo.toString());
  }
  else{
    return parseInt(arrOne.toString());
  }
}

/*One of the best solution using indexof properties*/
function stray(numbers){
  for (var i in numbers){
     if ( numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i]) ){
		 return numbers[i]}
  }
}

