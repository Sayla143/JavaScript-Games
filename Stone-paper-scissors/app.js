
let userScore = 0;
let compScore = 0;

// Select HTML Elements
const choices = document.querySelectorAll(".choice");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const msg = document.querySelector("#msg");

// Computer Choice Function
const genCompChoice = () => {

    const options = ["rock", "paper", "scissors"];

    const randomIndex = Math.floor(Math.random() * 3);

    return options[randomIndex];

};

// Draw Game Function
const drawGame = () => {

    msg.innerText = "Game is Draw! Play Again.";

    msg.style.backgroundColor = "#081b31";

};

// Show Winner Function
const showWinner = (userWin, userChoice, compChoice) => {

    if (userWin) {

        userScore++;

        userScorePara.innerText = userScore;

        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;

        msg.style.backgroundColor = "green";

    } else {

        compScore++;

        compScorePara.innerText = compScore;

        msg.innerText = `You Lose! ${compChoice} beats your ${userChoice}`;

        msg.style.backgroundColor = "red";

    }

};

// Play Game Function
const playGame = (userChoice) => {

    console.log("User Choice:", userChoice);

    // Generate Computer Choice
    const compChoice = genCompChoice();

    console.log("Computer Choice:", compChoice);

    // Check Draw
    if (userChoice === compChoice) {

        drawGame();

    } else {

        let userWin = true;

        if (userChoice === "rock") {

            userWin = compChoice === "scissors";

        } else if (userChoice === "paper") {

            userWin = compChoice === "rock";

        } else if (userChoice === "scissors") {

            userWin = compChoice === "paper";

        }

        showWinner(userWin, userChoice, compChoice);

    }

};

// Add Click Event to All Choices
choices.forEach((choice) => {

    choice.addEventListener("click", () => {

        const userChoice = choice.getAttribute("id");

        playGame(userChoice);

    });

});
