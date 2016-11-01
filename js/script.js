var base = prompt("Enter the Base number");
var exp = prompt("Enter the Exponent");
 
 if (base == '' || base == null || exp == '' || exp == null) 
   {console.log ('Error. Reload page and enter integer.')}
 else
   { 
    base = +base;
    exp = +exp;
    pow();
   } 

function pow() {
  if ( isNaN(base) || isNaN(exp) || parseInt (base) !== base || parseInt (exp) !== exp ) 
    {console.log ('Error. Reload page and enter integer.')} 
  else 
    {console.log ('Result: ', base, '^', exp, '=', check())}
}

function check() {
  var result = 1;  
  if (exp >= 0) 
    {
      result = raise(base, exp, result);
    }
  else 
    {
      exp = -exp;
      result = 1 / raise(base, exp, result);
    }

  return result;
}

function raise(base, exp, result) 
{
  for (var i = 0; i < exp; i++) 
  {
    result = result * base;
  }
  
  return result;
}    









