function pow() {
  if ( checkNumber() ) {
    result = checkExponentSign();
    return result;
  }  
  else 
    console.log ('Error. Reload page and enter integer.');
}

function checkNumber() {
  return !isNaN( parseFloat(base) ) && isFinite(base) && !isNaN( parseFloat(exp) ) && isFinite(exp) && parseInt(base) == base && parseInt(exp) == exp; 
}

function checkExponentSign() {
  var result = 1;  
  
  if (exp >= 0) {
      result = raise(base, exp, result);
  } else {
      exp = -exp;
      result = 1 / raise(base, exp, result);
    }

  return result;
}

function raise(a, n, res) {
  for (var i = 0; i < n; i++) {
    res *= a;
  }
  
  return res;
}    


var base = prompt("Enter the Base number");
var exp = prompt("Enter the Exponent");

var hex = base.substring(0,2);

  if (hex === '0X' || hex === '0x') {
    var result = pow();
    console.log ('Result: ', base, '^', exp, '=', result.toString(16));
  } else {
    var result = pow();
    console.log ( 'Result: ', base, '^', exp, '=', result );
  }


    











