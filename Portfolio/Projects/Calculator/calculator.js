var expression = "";

function addToLast(val)
{
  expression += val;
  document.getElementById("text-area").innerHTML = expression;
}

function delLastVal()
{
  expression = expression.substring(0, expression.length-1);
  document.getElementById("text-area").innerHTML = expression;
}

function calculate()
{
  try {
    document.getElementById("text-area").innerHTML = eval(expression);
  } catch (error) {
    document.getElementById("text-area").innerHTML = "Invalid Expression!!!";
  }
  
}

function clearAll()
{
  expression = "";
  document.getElementById("text-area").innerHTML = expression;
}