var i;
var winner = document.querySelector("#winner");
var td = document.querySelectorAll("#td");
var newgame = document.querySelector("#newgame");
var color = document.querySelector("#color");
var colour = "rgb(255, 0, 0)";
color.textContent = "Red";
winner.textContent = "";

function blockcolor()
{
	var wincolor;
		for(i=0;i<=8;i++)
		{
				td[i].addEventListener("click",function()
				{
					if(winner.textContent === "")
					{
						if(colour === "rgb(255, 0, 0)")
						{
							this.style.background = "rgb(255, 0, 0)";
							colour = "rgb(0, 0, 0)";
							if (td[0].style.background === "rgb(255, 0, 0)" && td[1].style.background === "rgb(255, 0, 0)" && td[2].style.background === "rgb(255, 0, 0)") {winner.textContent = "Red wins"; wincolor = "Red"; }
							if (td[3].style.background === "rgb(255, 0, 0)" && td[4].style.background === "rgb(255, 0, 0)" && td[5].style.background === "rgb(255, 0, 0)") {winner.textContent = "Red wins"; wincolor = "Red"; }
							if (td[6].style.background === "rgb(255, 0, 0)" && td[7].style.background === "rgb(255, 0, 0)" && td[8].style.background === "rgb(255, 0, 0)") {winner.textContent = "Red wins"; wincolor = "Red"; }
							if (td[0].style.background === "rgb(255, 0, 0)" && td[3].style.background === "rgb(255, 0, 0)" && td[6].style.background === "rgb(255, 0, 0)") {winner.textContent = "Red wins"; wincolor = "Red"; }
							if (td[1].style.background === "rgb(255, 0, 0)" && td[4].style.background === "rgb(255, 0, 0)" && td[7].style.background === "rgb(255, 0, 0)") {winner.textContent = "Red wins"; wincolor = "Red"; }
							if (td[2].style.background === "rgb(255, 0, 0)" && td[5].style.background === "rgb(255, 0, 0)" && td[8].style.background === "rgb(255, 0, 0)") {winner.textContent = "Red wins"; wincolor = "Red"; }
							if (td[0].style.background === "rgb(255, 0, 0)" && td[4].style.background === "rgb(255, 0, 0)" && td[8].style.background === "rgb(255, 0, 0)") {winner.textContent = "Red wins"; wincolor = "Red"; }
							if (td[2].style.background === "rgb(255, 0, 0)" && td[4].style.background === "rgb(255, 0, 0)" && td[6].style.background === "rgb(255, 0, 0)") {winner.textContent = "Red wins"; wincolor = "Red"; }
							else{}

							color.textContent = "Black";

						}
						else
						{
							this.style.background = "rgb(0, 0, 0)";
							colour = "rgb(255, 0, 0)";
							if (td[0].style.background === "rgb(0, 0, 0)" && td[1].style.background === "rgb(0, 0, 0)" && td[2].style.background === "rgb(0, 0, 0)") {winner.textContent = "Black wins"; wincolor = "Black"; }
							if (td[3].style.background === "rgb(0, 0, 0)" && td[4].style.background === "rgb(0, 0, 0)" && td[5].style.background === "rgb(0, 0, 0)") {winner.textContent = "Black wins"; wincolor = "Black"; }
							if (td[6].style.background === "rgb(0, 0, 0)" && td[7].style.background === "rgb(0, 0, 0)" && td[8].style.background === "rgb(0, 0, 0)") {winner.textContent = "Black wins"; wincolor = "Black"; }
							if (td[0].style.background === "rgb(0, 0, 0)" && td[3].style.background === "rgb(0, 0, 0)" && td[6].style.background === "rgb(0, 0, 0)") {winner.textContent = "Black wins"; wincolor = "Black"; }
							if (td[1].style.background === "rgb(0, 0, 0)" && td[4].style.background === "rgb(0, 0, 0)" && td[7].style.background === "rgb(0, 0, 0)") {winner.textContent = "Black wins"; wincolor = "Black"; }
							if (td[2].style.background === "rgb(0, 0, 0)" && td[5].style.background === "rgb(0, 0, 0)" && td[8].style.background === "rgb(0, 0, 0)") {winner.textContent = "Black wins"; wincolor = "Black"; }
							if (td[0].style.background === "rgb(0, 0, 0)" && td[4].style.background === "rgb(0, 0, 0)" && td[8].style.background === "rgb(0, 0, 0)") {winner.textContent = "Black wins"; wincolor = "Black"; }
							if (td[2].style.background === "rgb(0, 0, 0)" && td[4].style.background === "rgb(0, 0, 0)" && td[6].style.background === "rgb(0, 0, 0)") {winner.textContent = "Black wins"; wincolor = "Black"; }
							else{}

							color.textContent = "Red";

						}
				}
				else{winner.textContent = wincolor + " Wins Play New Game";}
			})
			

		}
	
}

blockcolor();


