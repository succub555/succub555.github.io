// Array of texts to cycle through
const texts = ["•ᴗ•", ">ᴗ<", "˗ˏˋ ★ ˎˊ˗", "˶ᵔ ᵕ ᵔ˶", "‧₊˚✩ 彡"];

// Get the element by ID
const changingTextElement = document.getElementById("changingText");

// Initialize index to 0
let currentIndex = 0;

// Function to change text
function changeText() {
  changingTextElement.textContent = texts[currentIndex];
  currentIndex = (currentIndex + 1) % texts.length; // Loop back to the beginning
}

// Set an interval to change text every 2000 milliseconds (2 seconds)
setInterval(changeText, 1000);
