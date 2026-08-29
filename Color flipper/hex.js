// Hexadecimal character values (0-9 and A-F)
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// DOM elements selection
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

// Handle button click event
btn.addEventListener("click", function () {
  let hexColor = "#";

  // Loop 6 times to construct a random 6-character Hex code
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }

  // Update background color and display text
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});

// Helper function to get a random index from hex array
function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}