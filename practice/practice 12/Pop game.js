const fallingItems = document.querySelectorAll('.falling-items');
const startButton = document.querySelector('.start');
const resetButton = document.querySelector('.reset');

const highScore = document.querySelector('.high-score b');
const currentScore = document.querySelector('.current-score b');
const timeDisplay = document.querySelector('.timer b');

let high = parseInt(highScore.innerHTML); // Get current high score
let current = parseInt(currentScore.innerHTML); // Get current score
let timerInterval; // Store timer interval
let isGameRunning = false; // Track whether the game is already running

// Function to start the timer
const startTimer = (durationInSeconds) => {
    clearInterval(timerInterval); // Clear any existing timer
    let timeRemaining = durationInSeconds;

    timerInterval = setInterval(() => {
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;
        timeDisplay.innerHTML = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`; // Update timer display
        timeRemaining--;

        // When the timer ends
        if (timeRemaining < 0) {
            clearInterval(timerInterval);

            // Display "Time's Up!"
            timeDisplay.innerHTML = "Time's Up!";
            resetGameState();
        }
    }, 1000);
};

// Function to start falling items (continuous animation)
const startFallingItems = () => {
    fallingItems.forEach((item) => {
        // Function to trigger falling animation
        const startFalling = () => {
            let randomLeftPosition = Math.floor(Math.random() * 90) + 5; // Random position
            let randomDuration = Math.random() * (7 - 4) + 4; // Random duration
            let randomDelay = Math.random() * 7; // Random delay

            item.style.left = `${randomLeftPosition}%`;
            item.style.transition = `all ${randomDuration}s linear ${randomDelay}s`;
            item.style.transform = 'translateY(500px)';

            setTimeout(() => {
                item.style.transition = 'none';
                item.style.transform = 'translateY(-100px)';

                setTimeout(() => {
                    item.style.transition = `all ${randomDuration}s linear ${randomDelay}s`;
                }, 50);
            }, (randomDuration + randomDelay) * 1000);
        };

        // Add click event listener to increment score (if not already added)
        if (!item.hasClickListener) {
            item.addEventListener('click', () => {
                item.style.transition = 'none';
                item.style.transform = 'translateY(-100px)';
                current += 1;
                currentScore.innerHTML = current;
            });
            item.hasClickListener = true; // Mark as listener added
        }

        // Start falling animation
        startFalling();
        setInterval(startFalling, 10000); // Repeat falling animation every 10 seconds
    });
};

// Function to reset the game state
const resetGameState = () => {
    // Update high score if current score is greater
    if (current > high) {
        high = current;
        highScore.innerHTML = high;
    }

    // Reset current score and timer
    current = 0;
    currentScore.innerHTML = current;
    timeDisplay.innerHTML = "0:30";

    // Restart timer
    startTimer(30);
};

// Start button functionality
startButton.addEventListener("click", () => {
    if (!isGameRunning) {
        isGameRunning = true; // Mark game as running
        startFallingItems(); // Start the falling animation (once)
    }
    resetGameState(); // Reset timer and score
});

// Restart button functionality
resetButton.addEventListener("click", () => {
    resetGameState(); // Reset timer and score
});
