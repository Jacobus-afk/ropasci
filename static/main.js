document.addEventListener("DOMContentLoaded", () => { 

    const RPS_Choices = [ "rock", "paper", "scissors" ]
    const Match_Results = { draw: 0, loss: 0, win: 0 }
    
    let playerSelection = null;
    let match_result = null;

    function computerPlay() {
        const computer_choice = Math.floor(Math.random()*3);
        return RPS_Choices[computer_choice];
    }

    function playRound(playerSelection, computerSelection) {
        playerIndex = RPS_Choices.indexOf(playerSelection);
        computerIndex = RPS_Choices.indexOf(computerSelection);

        result = (3 + computerIndex - playerIndex) % 3;
        if (result === 0) {
            return {result:"draw", verbose: `It's a draw, both had: ${computerSelection}`};
        }
        if (result === 1) {
            return {result:"loss", verbose: `You Lose! ${computerSelection} beats ${playerSelection}`};
        }
        else {
            return {result:"win", verbose: `You win! ${playerSelection} beats ${computerSelection}`};
        }
    }

    function calcResults() {
        switch (Object.entries(Match_Results).sort((a,b) => b[1]-a[1])[0][0]) {
            case "draw": return "It was a draw";
            case "win": return "You won";
            case "loss": return "You lost";
        }
    }

    function game() {
        for (i = 0; i < 5; i ++) {
            // console.log(i);
            playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
            if (!RPS_Choices.includes(playerSelection)) {
                alert("Invalid selection");
                i--;
                continue;
            }

            match_result = playRound(playerSelection, computerPlay());
            console.log(match_result.verbose);
            Match_Results[match_result.result]++;
        }
        console.log("Match results: " + calcResults());
    }

    game();
})