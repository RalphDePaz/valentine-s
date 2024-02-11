"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const menuButton = document.querySelector(".btn--menu");
const messageButton = document.querySelector(".btn--message");
const catImg = document.querySelector(".cat-img");

const MAX_IMAGES = 10;

let play = true;
let noCount = 0;

menuButton.classList.add("hidden");
messageButton.classList.add("hidden");

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    updateNoButtonText();
    if (noCount === MAX_IMAGES) {
      play = false;
    }
  }
});

function handleYesClick() {
  // titleElement.innerHTML = "Yayyy!! :3";
  titleElement.innerHTML = "Feb 14, 2024 <br> Any time in the evening. <br> I'll pay for the food of your choice (order :>) <br> Call? So we can talk about everything :>><br><br> Message me. <br> So we can talk about it if you're free or reschedule if not :>>>>> <br><br> Click MENU for more surprise, hope you like it.";
  yesButton.classList.add("hidden");
  noButton.classList.add("hidden");
  const menuButton = document.querySelector(".btn--menu"); // For example
  const messageButton = document.querySelector(".btn--message");
  menuButton.classList.remove("hidden");
  messageButton.classList.remove("hidden");
  changeImage("yes");
}


function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.6;

  yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
  const messages = [
    "No",
    "Are you sure?",
    "Pookie please",
    "Don't do this to me :(",
    "You're breaking my heart",
    "I'm gonna cry...",
    "Pleaseeeee :<",
    "HUHUHUHUHU",
    "DATE ME :>>>>",
    "CLICK YESS BABY",
    "CLICK YESSSSSSSSS",
  ];

  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

function changeImage(image) {
  catImg.src = `img/cat-${image}.jpg`;
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}
