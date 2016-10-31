var base = +prompt("Enter the Base number");
var exp = +prompt("Enter the Exponent");


if (isNaN(base) || isNaN(exp)) 
  {console.log ('One or both argument is not number')} 
else 
  {console.log ('Result: ', base, '^', exp, '=', pow())}


function pow() {
  var result = 1;  
  if (exp >= 0) 
    {
      result = raise (base, exp, result);
    }
  else 
    {
      exp = -exp;
      result = 1 / raise (base, exp, result);
    }

  return result;
}

function raise (base, exp, result) 
{
  for (var i = 0; i < exp; i++) 
  {
    result = result * base;
  }
  
  return result;
}    









