"use strict";
// Each box generates a number within a set array
const numbers = [100, 250, 220, 780, 400, 80, 520, 880, 120, 20];

// Function to generate a random number from the array
function getRandomNumber() {
  // Generate a random index within the array length
  const randomIndex = Math.floor(Math.random() * numbers.length);

  // Return the element at the randomly generated index
  return numbers[randomIndex];
}

const randomNum = getRandomNumber();
console.log(randomNum);
