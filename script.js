//code

"this is a string";

var myValue = 5;
var mySecondValue = 7 + 9;
var myThirdValue = myValue + mySecondValue;

alert (myThirdValue);

//**************
// Scope of variables

var constant = 32;

function celciustofarenheit (temperature)
{
  var farenheitTemp = temperature * 9 / 5 + constant;
  return farenheitTemp;

}

output.innerHTML = celciustofarenheit (100);

//**************
// Scoping - nested functions

function hypotenuse ()
{
  var side1 = 3;
  var side2 = 4;

  function squareSide1 ()
  {
    return side1 * side1;
  }

  function squareSide2 ()
  {
    return side2 * side2;
  }

  return Math.sqrt(squareSide1() + squareSide2());
}


output.innerHTML = hypotenuse ();