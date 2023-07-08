const bug = document.getElementById("bug");
const scoreElement = document.getElementById("score");
const resetSpeedButton = document.getElementById("reset-speed");
const resetScoreButton = document.getElementById("reset-score");

let score = 0;
let interval = 1000;

const updatePosition = () => {
  const x = Math.random() * (bug.parentElement.clientWidth - bug.clientWidth);
  const y = Math.random() * (bug.parentElement.clientHeight - bug.clientHeight);

  bug.style.left = x + "px";
  bug.style.top = y + "px";
};

const incrementScore = () => {
  score++;
  scoreElement.textContent = score;
};

const resetSpeed = () => {
  clearInterval(intervalID);
  interval = 1000;
  intervalID = setInterval(updatePosition, interval);
};

const resetScore = () => {
  score = 0;
  scoreElement.textContent = score;
};

bug.addEventListener("click", () => {
  incrementScore();
  if (interval > 100) {
    clearInterval(intervalID);
    interval -= 50;
    intervalID = setInterval(updatePosition, interval);
  }
});

resetSpeedButton.addEventListener("click", resetSpeed);
resetScoreButton.addEventListener("click", resetScore);

let intervalID = setInterval(updatePosition, interval);
