const bugHoiKitFan = document.getElementById("bug");
const scoreRecordHoiKitFan = document.getElementById("score");
const resetSpeedButtonHoiKitFan = document.getElementById("reset-speed");
const resetScoreButtonHoiKitFan = document.getElementById("reset-score");

let scoreHoiKitFan = 0;
let intervalHoiKitFan = 1000;

const updatePosition = () => {
  const xHoiKitFan =
    Math.random() *
    (bugHoiKitFan.parentElement.clientWidth - bugHoiKitFan.clientWidth);
  const yHoiKitFan =
    Math.random() *
    (bugHoiKitFan.parentElement.clientHeight - bugHoiKitFan.clientHeight);

  bugHoiKitFan.style.left = xHoiKitFan + "px";
  bugHoiKitFan.style.top = yHoiKitFan + "px";
};

const incrementScoreHoiKitFan = () => {
  scoreHoiKitFan++;
  scoreRecordHoiKitFan.textContent = scoreHoiKitFan;
};

const resetSpeedHoiKitFan = () => {
  clearInterval(intervalIDHoiKitFan);
  intervalHoiKitFan = 1000;
  intervalIDHoiKitFan = setInterval(updatePosition, intervalHoiKitFan);
};

const resetScoreHoiKitFan = () => {
  scoreHoiKitFan = 0;
  scoreRecordHoiKitFan.textContent = scoreHoiKitFan;

  resetSpeedHoiKitFan();
};

bugHoiKitFan.addEventListener("click", () => {
  incrementScoreHoiKitFan();
  if (intervalHoiKitFan > 100) {
    clearInterval(intervalIDHoiKitFan);
    intervalHoiKitFan -= 50;
    intervalIDHoiKitFan = setInterval(updatePosition, intervalHoiKitFan);
  }
});

resetSpeedButtonHoiKitFan.addEventListener("click", resetSpeedHoiKitFan);
resetScoreButtonHoiKitFan.addEventListener("click", resetScoreHoiKitFan);

let intervalIDHoiKitFan = setInterval(updatePosition, intervalHoiKitFan);
