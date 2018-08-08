var multiplyNumber = document.getElementById("multiply");

var result = document.getElementById("result");

function multiply() {
  var number1 = document.getElementById("number1").value;
  var number2 = document.getElementById("number2").value;

  //var value = parseInt(number1) + parseInt(number2);
  var value = Number(number1) + Number(number2);
  var value = +number1 + +number2;
  
  result.innerHTML = "The result is "+value;
}

multiplyNumber.onclick = multiply;