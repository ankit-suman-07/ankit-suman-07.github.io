var vals = [0, 0, 0, 0, 0, 0, 0, 0, 0]
var count = 0;
var gameOver = 0;

function checkWinner(i, id)
{
    if (count%2 == 0)
    {
      document.getElementById(id).innerHTML = "O";
      vals[i] = 1;
      document.getElementById(id).disabled = true;
    }    
    else
    {
      document.getElementById(id).innerHTML = "X";
      vals[i] = -1;
      document.getElementById(id).disabled = true;
    }
    count += 1;

    

    if((vals[0] == vals[1] && vals[1] == vals[2]) || (vals[0] == vals[3] && vals[3] == vals[6]))
    {
        if(vals[0] == 1)
        {
          
          document.getElementById("result").innerHTML = "Player 1 WINS";
          disableButtons();
        }
        else if(vals[0] == -1)
        {
          document.getElementById("result").innerHTML = "Player 2 WINS";
          disableButtons();
        }
    }
    else if((vals[3] == vals[4] && vals[4] == vals[5]) || (vals[1] == vals[4] && vals[4] == vals[7]) || (vals[0] == vals[4] && vals[4] == vals[8]) || (vals[2] == vals[4] && vals[4] == vals[6]))
    {
      if(vals[4] == 1)
        {
          document.getElementById("result").innerHTML = "Player 1 WINS";
          disableButtons();
        }
        else if(vals[4] == -1)
        {
          document.getElementById("result").innerHTML = "Player 2 WINS";
          disableButtons();
        }
    }
    else if((vals[6] == vals[7] && vals[7] == vals[8]) || (vals[2] == vals[5] && vals[5] == vals[8]))
    {
      if(vals[8] == 1)
        {
          document.getElementById("result").innerHTML = "Player 1 WINS";
          disableButtons();
        }
        else if(vals[8] == -1)
        {
          document.getElementById("result").innerHTML = "Player 2 WINS";
          disableButtons();
        }
    }
    
    if(count > 8)
    {
      if(gameOver == 0)
      {
        document.getElementById("result").innerHTML = "It's a DRAW!!!";
      }
    }
      
}

function disableButtons()
{
  for(var x=0; x<9; x++)
  {
    var id = "button-" + x;
    document.getElementById(id).disabled = true;
  }
  gameOver = 1;
  
}