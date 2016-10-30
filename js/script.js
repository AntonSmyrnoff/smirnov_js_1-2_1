function pow() {
  var base = prompt("Enter the Base number");
  var exp = prompt("Enter the Exponent");
  var raise = 1;

  if (exp >= 0) {
    for (var i = 0; i < exp; i++) {
    raise = raise * base;
    }
  }
  
  else {
    exp = exp * (-1);
    for (var i = 0; i < exp; i++) {
    raise = raise * base;
    }
    raise = 1 / raise;
  }


  return raise;
}

console.log ('Result:', pow())



