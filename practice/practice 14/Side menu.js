const options = document.querySelectorAll('.options');
const verticalNavTitle = document.querySelector('.vertical-nav-title');
const verticalNavTitleSpanH1 = document.querySelector('.vertical-nav-title span h1');

const optionsSpanB = document.querySelector('.options span b');

let isOptionClicked = false; // To track if an option is open
let activeOption = null; // To track the currently active option

options.forEach((option, index) => {
    option.addEventListener('click', () => {
        if (activeOption === index && isOptionClicked) {
            // If the same option is clicked while active, close it
            verticalNavTitleSpanH1.style.transform = "translateY(50px)";
            setTimeout(() => {
                verticalNavTitle.style.opacity = "0";
                isOptionClicked = false;
                activeOption = null;
            }, 300); // Delay matches the transition duration
        } else if (isOptionClicked && activeOption !== index) {
            // If a different option is clicked while one is active
            verticalNavTitleSpanH1.style.transform = "translateY(50px)"; // Transition out
            setTimeout(() => {
                // Update content after transitioning out
                if (index === 0) {
                    verticalNavTitleSpanH1.innerHTML = "Option 1 is clicked!";
                } else if (index === 1) {
                    verticalNavTitleSpanH1.innerHTML = "Option 2 is clicked!";
                } else if (index === 2) {
                    verticalNavTitleSpanH1.innerHTML = "Option 3 is clicked!";
                }
                verticalNavTitleSpanH1.style.transform = "translateY(0)"; // Transition back in
                activeOption = index; // Update the active option
            }, 300); // Delay matches the transition duration
        } else {
            // If no option is currently active
            verticalNavTitle.style.opacity = "1"; // Ensure the title is visible
            verticalNavTitleSpanH1.style.transform = "translateY(50px)"; // Transition out
            setTimeout(() => {
                // Update content after transitioning out
                if (index === 0) {
                    verticalNavTitleSpanH1.innerHTML = "Option 1 is clicked!";
                } else if (index === 1) {
                    verticalNavTitleSpanH1.innerHTML = "Option 2 is clicked!";
                } else if (index === 2) {
                    verticalNavTitleSpanH1.innerHTML = "Option 3 is clicked!";
                }
                verticalNavTitleSpanH1.style.transform = "translateY(0)"; // Transition back in
                activeOption = index; // Update the active option
                isOptionClicked = true; // Set state to active
            }, 300); // Delay matches the transition duration
        }
    });
});


