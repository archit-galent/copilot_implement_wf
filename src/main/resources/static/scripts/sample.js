```javascript
// sample.js

// Ensure the code waits for the DOM to be fully loaded before executing.
document.addEventListener("DOMContentLoaded", () => {
  // Select the button by its ID or class (update as needed for your HTML structure).
  const button = document.getElementById("loanButton"); // Assuming the button has an ID of 'loanButton'.
  const container = document.getElementById("container"); // Assuming the container has an ID of 'container'.

  // Add event listener for the button click event.
  button.addEventListener("click", () => {
    // Change button background color to green.
    button.style.backgroundColor = "#28a745";

    // Add additional styling for the button.
    button.style.fontSize = "18px"; // Set the font size to 18px.
    button.style.color = "#ffffff"; // Optional: Set the text color to white for better visibility.
    button.style.border = "none"; // Optional: Remove border for aesthetic purposes.
  });

  // Dynamically add a green border to the container div.
  container.style.border = "2px solid #28a745"; // Set the border color to green and width to 2px.
});
```