"use strict";
// Each box generates a number within a set array
const numbers = [100, 250, 220, 780, 400, 80, 520, 880, 120, 20];

let checkz = 5;
let score = 0;

// Function to generate a random number from the array
function getRandomNumber() {
  // Generate a random index within the array length
  const randomIndex = Math.floor(Math.random() * numbers.length);

  // Return the element at the randomly generated index
  return numbers[randomIndex];
}

// let randomNum = getRandomNumber();
// console.log(randomNum);
// console.log(Number(document.querySelector(".box").textContent));

// Event handler for checking the boxes
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  const boxNo1 = Number(document.querySelector(".b1").textContent);
  const boxNo2 = Number(document.querySelector(".b2").textContent);
  const boxNo3 = Number(document.querySelector(".b3").textContent);
  const boxNo4 = Number(document.querySelector(".b4").textContent);
  const boxNo5 = Number(document.querySelector(".b5").textContent);

  if (guess === boxNo1) {
    // Box 1
    const answer = getRandomNumber();
    document.querySelector(
      ".message"
    ).textContent = `Box ${boxNo1} has ${answer}`;
    document.querySelector(".b1").style.backgroundColor = "#222";
    checkz--;
    document.querySelector(".checks").textContent = checkz;
    document.querySelector(".score").textContent = answer;

    // Box 2
  } else if (guess === boxNo2) {
    const answer = getRandomNumber();
    document.querySelector(
      ".message"
    ).textContent = `Box ${boxNo2} has ${answer}`;
    document.querySelector(".b2").style.backgroundColor = "#222";
    checkz--;
    document.querySelector(".checks").textContent = checkz;
    document.querySelector(".score").textContent = answer;

    // Box 3
  } else if (guess === boxNo3) {
    const answer = getRandomNumber();
    document.querySelector(
      ".message"
    ).textContent = `Box ${boxNo3} has ${answer}`;
    document.querySelector(".b3").style.backgroundColor = "#222";
    checkz--;
    document.querySelector(".checks").textContent = checkz;
    document.querySelector(".score").textContent = answer;

    // Box 4
  } else if (guess === boxNo4) {
    const answer = getRandomNumber();
    document.querySelector(
      ".message"
    ).textContent = `Box ${boxNo4} has ${answer}`;
    document.querySelector(".b4").style.backgroundColor = "#222";
    checkz--;
    document.querySelector(".checks").textContent = checkz;
    document.querySelector(".score").textContent = answer;

    // Box 5
  } else if (guess === boxNo5) {
    const answer = getRandomNumber();
    document.querySelector(
      ".message"
    ).textContent = `Box ${boxNo5} has ${answer}`;
    document.querySelector(".b5").style.backgroundColor = "#222";
    checkz--;
    document.querySelector(".checks").textContent = checkz;
    document.querySelector(".score").textContent = answer;

    // Else
  } else {
    document.querySelector(".message").textContent = "Not working";
  }
});
