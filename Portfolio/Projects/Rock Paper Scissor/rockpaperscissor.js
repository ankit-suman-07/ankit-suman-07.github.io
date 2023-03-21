var choices = ["Rock", "Paper", "Scissor", "Rock", "Paper", "Scissor", "Rock", "Paper", "Scissor", "Rock", "Paper", "Scissor"];
var compScore = 0;
var userScore = 0;
var gameCount = 0;

function addVal(id)
{
    gameCount += 1;
    var user = id;
    var comp = choices[Math.floor(Math.random() * 3)];

    document.getElementById("user").innerHTML = user;
    document.getElementById("comp").innerHTML = comp;

    if(user == comp)
    {
        document.getElementById("winner").innerHTML = "It's a DRAW!!!!!";
    }
    else if((user === "Rock" && comp === "Scissor") || (user === "Paper" && comp === "Rock") || (user === "Scissor" && comp === "Paper"))
    {
        document.getElementById("winner").innerHTML = "User WON";
        userScore += 1;
    }
    else
    {
        document.getElementById("winner").innerHTML = "Computer WON";
        compScore += 1;
    }
    document.getElementById("user_score").innerHTML = userScore;
    document.getElementById("comp_score").innerHTML = compScore;
    document.getElementById("gameCount").innerHTML = "Round #" + gameCount;
}