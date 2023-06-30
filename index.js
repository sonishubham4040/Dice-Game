var r1=Math.floor(Math.random()*6+1);
var r2=Math.floor(Math.random()*6+1);

document.querySelector(".diceImage1").setAttribute("src", "images/dice"+ r1 + ".png");
document.querySelector(".diceImage2").setAttribute("src", "images/dice"+ r2 + ".png");

if(r1>r2)
{
    document.querySelector("h1").innerHTML="🏆 Player 1 Wins!";
}
else if(r1<r2)
{
    document.querySelector("h1").innerHTML="Player 2 Wins 🏆";
}
else
{
    document.querySelector("h1").innerHTML="Draw 😛";
}

const refreshPage = () =>{
    location.reload();
}
  
  document.querySelector("button").addEventListener('click', refreshPage);