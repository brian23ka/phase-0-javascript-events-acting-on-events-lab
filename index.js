// Your code here
const dodger = document.getElementById("dodger");

// Move dodger left function
function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", ""); // Get current left value and remove 'px'
  const left = parseInt(leftNumbers, 10); // Convert to number

  if (left > 0) {  // Prevent moving off the left edge
    dodger.style.left = `${left - 1}px`; // Move left by 1px
  }
}

// Move dodger right function
function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace("px", ""); // Get current left value and remove 'px'
  const left = parseInt(leftNumbers, 10); // Convert to number

  if (left < 360) {  // Prevent moving off the right edge (game field width - dodger width)
    dodger.style.left = `${left + 1}px`; // Move right by 1px
  }
}

// Add event listeners for the left and right arrow keys
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();  // Move dodger left
  }
  if (e.key === "ArrowRight") {
    moveDodgerRight();  // Move dodger right
  }
});
