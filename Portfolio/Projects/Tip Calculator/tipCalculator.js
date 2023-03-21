function calculate()
{
    var amount = parseFloat(document.getElementById("text-input-id").value);
    var percent = parseFloat(document.getElementById("slider").value);
    var tip = percent * amount / 100;
    var total = amount + tip
    document.getElementById("tip").innerHTML = " $" + tip;
    document.getElementById("total").innerHTML = " $" + total;

}

function percentFunc()
{
    var percent = document.getElementById("slider").value;
    document.getElementById("buttton-value").innerHTML = percent;
}