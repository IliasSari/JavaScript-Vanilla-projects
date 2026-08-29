// Predefined array of simple color names and hex/rgba values
const colors = ["green", "red", "rgba(133,122,200)", "#f15025", "blue", "yellow", "purple", "#49a6e9"];

// DOM elements selection
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

// Handle button click event
btn.addEventListener("click", function () {
  // Get random index from colors array
  const randomNumber = getRandomNumber();

  // Change background color of body and update text
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

// Helper function to generate a random index number
function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}