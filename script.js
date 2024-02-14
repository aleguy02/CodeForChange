// Get references to the button and the count display element
const button = document.getElementById('clickMe');
const countDisplay = document.getElementById('count');

// Initialize a variable to keep track of the count
let count = 0;

// Add a click event listener to the button
button.addEventListener('click', function() {
    // Increment the count
    count += 1;
    
    // Update the count display
    countDisplay.textContent = count;
});