let randomNumber;
let attempts;
let maxAttempts;
let range;
let gameOver = false;

// Start Game
function startGame() {
    document.getElementById("startBtn").style.display = "none";
    document.getElementById("gameArea").classList.remove("hidden");

    setLevel();
    initGame();
}

// Set Level
function setLevel() {
    let level = document.getElementById("level").value;

    if (level === "easy") {
        range = 50;
        maxAttempts = 10;
    } else if (level === "medium") {
        range = 100;
        maxAttempts = 7;
    } else {
        range = 200;
        maxAttempts = 5;
    }

    document.getElementById("rangeText").innerText =
        `Guess a number between 1 and ${range}`;
}

// Initialize Game
function initGame() {
    randomNumber = Math.floor(Math.random() * range) + 1;
    attempts = 0;
    gameOver = false;

    document.getElementById("message").innerText = "";
    document.getElementById("attempts").innerText =
        `Attempts: 0/${maxAttempts}`;
    document.getElementById("guessInput").value = "";
}

// Check Guess
function checkGuess() {
    if (gameOver) return;

    let guess = document.getElementById("guessInput").value;

    if (!guess) return;

    attempts++;

    if (guess == randomNumber) {
        document.getElementById("message").innerText =
            "\u{2705} Correct! You Win \u{1F389}";
        gameOver = true;
        return;
    } else if (guess > randomNumber) {
        document.getElementById("message").innerText = "Too High!";
    } else {
        document.getElementById("message").innerText = "Too Low!";
    }

    document.getElementById("attempts").innerText =
        `Attempts: ${attempts}/${maxAttempts}`;

    // Game Over
    if (attempts >= maxAttempts) {
        document.getElementById("message").innerText =
            "\u{274C} Game Over! Number was: " + randomNumber;
        gameOver = true;
    }
}

// Give Up
function giveUp() {
    if (gameOver) return;

    document.getElementById("message").innerText =
        "\u{274C} You gave up! Number was: " + randomNumber;

    gameOver = true;
}

// Restart
function restartGame() {
    setLevel();
    initGame();
}