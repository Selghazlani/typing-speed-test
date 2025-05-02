"use strict";

const paragraphEl = document.getElementById("paragraph");
const inputArea = document.getElementById("input-area");
const startBtn = document.getElementById("start-btn");
const doneBtn = document.getElementById("done-btn");
const resultEl = document.getElementById("result");

const testTexts = [
  "The quick brown fox jumps over the lazy dog.",
  "Typing fast requires good hand coordination and practice.",
  "Consistency and accuracy are key to becoming a pro typist.",
];

let startTime;

startBtn.addEventListener("click", () => {
  const randomText = testTexts[Math.floor(Math.random() * testTexts.length)];
  paragraphEl.textContent = randomText;
  inputArea.value = "";
  inputArea.disabled = false;
  doneBtn.disabled = false;
  inputArea.focus();
  startTime = new Date().getTime();
});

doneBtn.addEventListener("click", () => {
  const endTime = new Date().getTime();
  const elapsedSeconds = (endTime - startTime) / 1000;
  const wordCount = inputArea.value.trim().split(/\s+/).length;
  const wordsPerSec = wordCount / elapsedSeconds;
  const wordsPerMin = wordsPerSec * 60;

  let level, tips;
  if (wordsPerMin < 40) {
    level = "Beginner";
    tips = "Practice daily and focus on accuracy.";
  } else if (wordsPerMin < 70) {
    level = "Average";
    tips = "You're doing well! Try using typing games to improve speed.";
  } else {
    level = "Pro";
    tips = "Excellent! Consider touch-typing to go even faster.";
  }

  resultEl.innerHTML = `
    ⏱️ Time: ${elapsedSeconds.toFixed(2)} seconds<br>
    📊 Speed: ${wordsPerMin.toFixed(2)} words per minute<br>
    💪 Level: ${level}<br>
    💡 Tip: ${tips}
  `;

  inputArea.disabled = true;
  doneBtn.disabled = true;
});
