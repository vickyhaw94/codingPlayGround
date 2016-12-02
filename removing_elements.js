/*
Take an array and remove every second element out of that array. 
Always keep the first element and start removing with the next element.

Example:

myArr = ['Keep', 'Remove', 'Keep', 'Remove', 'Keep', ...];
None of the arrays will be empty, so you don't have to worry about that!
*/

/*My Solution*/
function removeEveryOther(arr){
    var returnArr = [];
    for(var i = 0; i <arr.length ; i ++){
      if(i == 0 || i % 2 == 0){
        returnArr.push(arr[i]);
      }
    }
    return returnArr;
}

/*One of the best solution using filter; filter will return an array and note that it did not change the original array
*/
function removeEveryOther(arr){
	return arr.filter(function(elem, index){
		return index % 2 === 0;
	});
}