/*
Description:

Given a string made up of letters a, b, and/or c, 
switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

Example:

'acb' --> 'bca'
'aabacbaa' --> 'bbabcabb'
*/

function switcheroo(x){
  var result ="";
  for(var i = 0; i <x.length ; i++){
    if(x[i] == "a"){
      result += "b";
    }
    else if(x[i] == "b"){
      result += "a"
    }
    else{
      result += "c";
    }
  }
  return result;
}

/*two of the best solution*/
function switcheroo(x){
  return x.replace(/[ab]/g, function(c) { return c === 'a' ? 'b' : 'a'; });
}


function switcheroo(x){
  return x.split('').map(function(e){
    if (e =='b')return 'a';
    if (e == 'a') return 'b';
    if(e=='c') return 'c'
  }).join('');
}
