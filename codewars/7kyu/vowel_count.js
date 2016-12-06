/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, and u as vowels for this Kata.
*/



function getCount(str) {
  var vowelsCount = 0;
  var arr = str.split("");
  var vowelsList = ["a", "e" , "i", "o" , "u"];
  for(var i = 0; i< arr.length; i++){
    if(vowelsList.indexOf(arr[i]) < 0){
      vowelsCount += 0;
    }
    else{
      vowelsCount += 1;
    }
  }
  return vowelsCount;
}
/*Use indexOf to check against multiple value*/