const board = document.querySelector("#game");
const holes = document.querySelectorAll(".holes");
let point = document.getElementById("score");
let timer = document.getElementById("timer");
let startButton = document.getElementById("start");
let info = document.querySelector(".info")
let score = 0;
let timeLeft = 60;

function game() {

  let randomHole = holes[Math.floor(Math.random() * 9)];
  setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      timer.innerHTML = timeLeft;
    } else {
      randomHole.classList.remove("mole"); // Remove class from previous hole
      holes.forEach((hole) => {
        hole.removeEventListener("click", checkMole);
      });
      clearInterval(moleInterval);
info.innerHTML = `<h1> You scored:  ${score}</h1>`
    }
  }, 1000);

  const moleInterval = setInterval(() => {
    randomHole.classList.remove("mole"); // Remove class from previous hole
    randomHole = holes[Math.floor(Math.random() * 9)]; // Select a new random hole
    randomHole.classList.add("mole"); // Add class to the new random hole
  }, 500);

  const checkMole = (element) => {
    if (element.target.classList.contains("mole")) {
      console.log("Element has the class.");
      score++;
      point.innerHTML = score;
    } else {
      console.log("Element does not have the class.");
    }
  };
  holes.forEach((hole) => {
    hole.addEventListener("mousedown", checkMole);
  });
}

startButton.addEventListener("mousedown", game)

