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
  

  if(vals[0] == vals[1] && vals[1] == vals[2])
  {
    
    
      if(vals[0] == 1)
      {
        
        document.getElementById("result").innerHTML = "Player 1 WINS";
        change_3_tiles(0, 1, 2);
        disableButtons();
      }
      else if(vals[0] == -1)
      {
        document.getElementById("result").innerHTML = "Player 2 WINS";
        change_3_tiles(0, 1, 2);
        disableButtons();
      }       
  }
  else if(vals[0] == vals[3] && vals[3] == vals[6])
  {
      if(vals[0] == 1)
      {
        
        document.getElementById("result").innerHTML = "Player 1 WINS";
        change_3_tiles(0, 3, 6);
        disableButtons();
      }
      else if(vals[0] == -1)
      {
        document.getElementById("result").innerHTML = "Player 2 WINS";
        change_3_tiles(0, 3, 6);
        disableButtons();
      }       
  }
  else if(vals[3] == vals[4] && vals[4] == vals[5])
  {

    
    if(vals[4] == 1)
      {
        document.getElementById("result").innerHTML = "Player 1 WINS";
        change_3_tiles(3, 4, 5);
        disableButtons();
      }
      else if(vals[4] == -1)
      {
        document.getElementById("result").innerHTML = "Player 2 WINS";
        change_3_tiles(3, 4, 5);
        disableButtons();
      }
  }
  else if(vals[1] == vals[4] && vals[4] == vals[7])
  {
    
    if(vals[4] == 1)
      {
        document.getElementById("result").innerHTML = "Player 1 WINS";
        change_3_tiles(1, 4, 7);
        disableButtons();
      }
      else if(vals[4] == -1)
      {
        document.getElementById("result").innerHTML = "Player 2 WINS";
        change_3_tiles(1, 4, 7);
        disableButtons();
      }
  }
  else if(vals[0] == vals[4] && vals[4] == vals[8])
  {
    
    if(vals[4] == 1)
      {
        document.getElementById("result").innerHTML = "Player 1 WINS";
        change_3_tiles(0, 4, 8);
        disableButtons();
      }
      else if(vals[4] == -1)
      {
        document.getElementById("result").innerHTML = "Player 2 WINS";
        change_3_tiles(0, 4, 8);
        disableButtons();
      }
  }
  else if(vals[2] == vals[4] && vals[4] == vals[6])
  {
    
    if(vals[4] == 1)
      {
        document.getElementById("result").innerHTML = "Player 1 WINS";
        change_3_tiles(2, 4, 6);
        disableButtons();
      }
      else if(vals[4] == -1)
      {
        document.getElementById("result").innerHTML = "Player 2 WINS";
        change_3_tiles(2, 4, 6);
        disableButtons();
      }
  }
  else if(vals[6] == vals[7] && vals[7] == vals[8])
  {
    
    if(vals[8] == 1)
      {
        document.getElementById("result").innerHTML = "Player 1 WINS";
        change_3_tiles(6, 7, 8);
        disableButtons();
      }
      else if(vals[8] == -1)
      {
        document.getElementById("result").innerHTML = "Player 2 WINS";
        change_3_tiles(6, 7, 8);
        disableButtons();
      }
  }
  else if(vals[2] == vals[5] && vals[5] == vals[8])
  {
    
    if(vals[8] == 1)
      {
        document.getElementById("result").innerHTML = "Player 1 WINS";
        change_3_tiles(2, 5, 8);
        disableButtons();
      }
      else if(vals[8] == -1)
      {
        document.getElementById("result").innerHTML = "Player 2 WINS";
        change_3_tiles(2, 5, 8);
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

function change_3_tiles(a, b, c)
{
  document.getElementById ("button-" + a).style.backgroundColor = 'red';
  document.getElementById ("button-" + b).style.backgroundColor = 'red';
  document.getElementById ("button-" + c).style.backgroundColor = 'red';

  // document.getElementById ("button-" + a).style.textDecoration = "line-through";
  // document.getElementById ("button-" + b).style.textDecoration = "line-through";
  // document.getElementById ("button-" + c).style.textDecoration = "line-through";

  document.getElementById ("button-" + a).style.color = "white";
  document.getElementById ("button-" + b).style.color = "white";
  document.getElementById ("button-" + c).style.color = "white";

}
