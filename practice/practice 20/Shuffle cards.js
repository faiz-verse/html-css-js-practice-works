const cardContainer = document.getElementById('card-container');
const cards = document.querySelectorAll('.cards');
const shuffleButton = document.getElementById('shuffle-button');
const confirmButton = document.getElementById('confirm-button');
const statusMessage = document.getElementById('status-message');

let isCardDisplayed = false; // Use lowercase 'false'

cards.forEach(currentCard => {
    currentCard.addEventListener('click', () => {
        showCards();
    });
});

function showCards() {
    if (!isCardDisplayed) {
        // Display cards in order
        cards.forEach((card, index) => {
            card.style.transition = "all 0.5s ease"; // Add smooth transition
            card.style.transform = "none";
            card.style.top = "10%";
            card.style.left = `${index * 25}%`; // Adjust spacing for cards

            // Add the hoverable class
            card.classList.add("hoverable");
        });
        shuffleButton.style.visibility = "visible";
        confirmButton.style.visibility = "visible";
        shuffleButton.style.pointerEvents = "all";
        shuffleButton.style.background = "lightblue";
        confirmButton.style.pointerEvents = "all";
        confirmButton.style.background = "lightgreen";
    } else {
        // Reset cards to their original shuffled state
        cards.forEach((card, index) => {
            card.style.transition = "all 0.5s ease"; // Add smooth transition
            card.style.transform = `rotate(${(index - 2) * 15}deg)`; // Restore rotation
            card.style.top = "15%";
            card.style.left = "40%"; // Back to initial position

            // Remove the hoverable class
            card.classList.remove("hoverable");

        });
        statusMessage.innerHTML = "Shuffle until the correct order!";
        shuffleButton.style.visibility = "hidden";
        confirmButton.style.visibility = "hidden";
    }
    // Toggle the state
    isCardDisplayed = !isCardDisplayed;
}

// Fisher-Yates Shuffle algorithm
// Shuffle function to generate unique random positions
function generateShuffledPositions(numCards) {
    const positions = Array.from({ length: numCards }, (_, i) => i); // [0, 1, 2, 3]
    for (let i = positions.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [positions[i], positions[randomIndex]] = [positions[randomIndex], positions[i]];
    }
    return positions; // Example: [3, 1, 0, 2]
}

let orderMatched = true;

shuffleButton.addEventListener('click', () => {
    const numCards = cards.length;
    const shuffledPositions = generateShuffledPositions(4); // Generate random unique positions

    // Apply the shuffled positions to the cards
    shuffledPositions.forEach((position, index) => {
        const leftPosition = `${position * 25}%`; // Adjust based on spacing
        const topPosition = "10%"; // Keep cards aligned in the same row
        cards[index].style.transition = "all 0.5s ease";
        cards[index].style.left = leftPosition;
        cards[index].style.top = topPosition;
        cards[index].style.transform = `rotate(${Math.random() * 30 - 15}deg)`; // Add a slight random rotation for effect
    });
});

confirmButton.addEventListener('click', () => {
    // Reset orderMatched to true before checking
    orderMatched = true;

    // Convert NodeList to an array and sort based on the `left` property
    const sortedCards = Array.from(cards).sort((a, b) => {
        return parseFloat(a.style.left) - parseFloat(b.style.left);
    });

    // Compare the sorted cards' content to the expected order
    sortedCards.forEach((card, index) => {
        if (card.innerHTML.trim() !== (index + 1).toString()) {
            orderMatched = false; // If any card is out of order, set to false
        }
    });

    // Update the status message based on whether the order is correct
    if (orderMatched) {
        statusMessage.innerHTML = "Congrats! You got the correct order!";
        shuffleButton.style.pointerEvents = "none";
        shuffleButton.style.background = "rgb(123, 151, 160)";
        confirmButton.style.pointerEvents = "none";
        confirmButton.style.background = "rgb(110, 182, 110)";
        setTimeout(() => {
            statusMessage.innerHTML = "Shuffle until the correct order!";
            showCards();
            shuffleButton.style.visibility = "hidden";
            confirmButton.style.visibility = "hidden";
        }, 5000);

    } else {
        statusMessage.innerHTML = "The order is incorrect. Try again!";
    }
});


