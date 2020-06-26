document.addEventListener("DOMContentLoaded", () => { 

    const buttons = document.querySelectorAll("input");
    const footer = document.querySelector("footer");
    const RPS_Choices = [ "rock", "paper", "scissors" ]
    const Match_Results = { draw: 0, loss: 0, win: 0 }
    // let nrOfRounds = 0;
    // let playerSelection = null;
    let match_result = null;

    function computerPlay() {
        const computer_choice = Math.floor(Math.random()*3);
        return RPS_Choices[computer_choice];
    }

    function playRound(event) {
        // console.log(event.target.value);
        let playerSelection = event.target.value;
        let computerSelection = computerPlay();
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
        if (Match_Results.loss >= 5) {
            alert("You lost");
        }
        else if (Match_Results.win >= 5) {
            alert("You won");
        }
        else {
            return;
        }
        location.reload();
    }

    function game(event) {
        
        // for (i = 0; i < 5; i ++) {
            // console.log(i);
            // playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
            // if (!RPS_Choices.includes(playerSelection)) {
            //     alert("Invalid selection");
            //     i--;
            //     continue;
            // }
        // console.log("got here");
        match_result = playRound(event);
        const results_div = document.querySelector(`div[data-result="${match_result.result}"]`);
        // console.log(results_div.textContent);
        results_div.textContent = Number(results_div.textContent) + 1;
        // console.log(match_result.verbose);
        Match_Results[match_result.result]++;
        footer.textContent = match_result.verbose;

        // const result = Object.entries(Match_Results).filter((entry) => entry[1] >= 5);
        
        calcResults(result);

        // }
        // console.log("Match results: " + calcResults());
    }
    buttons.forEach(button => button.addEventListener("click", game));
})