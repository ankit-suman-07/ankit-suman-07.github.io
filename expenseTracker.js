var food = 0;
  var travel = 0;
  var gadget = 0;
  var emi = 0;
  var investment = 0;
  var rent = 0;

function addColumn()
{
  const amount = document.getElementById("amount").value;
  const category = document.getElementById("category").value;
  const date = document.getElementById("date").value;
  

  if(category == "Food")
    food += parseInt(amount);
  if(category == "Travel")
    travel += parseInt(amount);
  if(category == "Gadget")
    gadget += parseInt(amount);
  if(category == "EMI")
    emi += parseInt(amount);
  if(category == "Investment")
    investment += parseInt(amount);
  if(category == "Rent")
    rent += parseInt(amount);
  
  var table = document.getElementById("details_table_1");
  var row = table.insertRow(0);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  cell1.innerHTML = category;
  cell2.innerHTML = "$" + amount;
  cell3.innerHTML = date;
  pieChart(food, travel, gadget, emi, investment, rent);
  
}

function pieChart(food, travel, gadget, emi, investment, rent)
  {
    var xValues = ["Food", "Travel", "Gadget", "EMI", "Investment", "Rent"];
      var yValues = [food, travel, gadget, emi, investment, rent];
      var barColors = ["#2B6747", "#FEE266", "#154854", "brown", "#E05A47", "orange", "#CEAA44", ];
      
      new Chart("myChart", {
        type: "pie",
        data: {
          labels: xValues,
          datasets: [{
            backgroundColor: barColors,
            data: yValues
          }]
        },
        options: {
          title: {
            display: true,
            text: "Category-Wise Expenses"
          }
        }
      });
  }