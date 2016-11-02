function pow() {
  
  if ( checkNumber(base) && checkNumber(exp) ) {
    result = checkExponentSign(base, exp);

    var hex = base.substring(0,2);

    if (hex === '0X' || hex === '0x') {
    console.log ('Result hex: ', base, '^', exp, '=', result.toString(16));
    } else {
      console.log ( 'Result: ', base, '^', exp, '=', result );
      }
  }  
  else 
    console.log ('Error. Reload page and enter integer.');

}

function checkNumber(a) {
  return !isNaN( parseFloat(a) ) && isFinite(a) && parseInt(a) == a; 
}

function checkExponentSign(a, n) { //возвращает результат вовзведения числа "а" в степень "n"
  var res = 1;  
  
  if (n >= 0) {
      res = raise(a, n, res);
  } else {
      n = -n;
      res = 1 / raise(a, n, res);
    }

  return res;
}

function raise(a, n, res) {
  for (var i = 0; i < n; i++) {
    res *= a;
  }
  
  return res;
}    


var base = prompt("Enter the Base number");
var exp = prompt("Enter the Exponent");

pow();


    











