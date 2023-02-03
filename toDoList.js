var task_dict = {}
var count = 0;


function addToList()
{
    var task = document.getElementById("text-ID").value;
    var x = document.getElementById("table-id").rows.length;
    var table = document.getElementById("table-id");
    
    task_dict[task] = count;
    count += 1;
    
    var row = table.insertRow(x);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.id = "cell-id";
    cell2.id = "data-id";
   

    var checkbox = document.createElement('input');
             
            // Assigning the attributes
            // to created checkbox
            checkbox.type = "checkbox";
            checkbox.name = "name";
            checkbox.value = "value";
            checkbox.id = "id";

            checkbox.onclick = function() {
                removeToDo(task);
              };
            

    cell1.appendChild(checkbox);
    cell2.innerHTML = task;
    document.getElementById("text-ID").value = "";
    
}

// Function to remove an item from the to-do list
function removeToDo(task) {
    var myTable = document.getElementById('table-id');
    myTable.rows[task_dict[task]].cells[1].innerHTML = "<del>" + task + "</del>";
    

   

   
  }