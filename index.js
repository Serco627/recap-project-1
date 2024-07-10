// const button1 = document.querySelector("[data-js='button1']");

// button1.addEventListener("click", () => {
//   if (button1.innerText === "Show Answer") {
//     button1.innerText = "The correct answer is: flex-direction: column";
//   } else {
//     button1.innerText = "Show Answer";
//   }
// });

// const button2 = document.querySelector("[data-js='button2']");

// button2.addEventListener("click", showAnswer);

// function showAnswer() {
//   button2.innerText === "Show Answer"
//     ? (button2.innerText = "position: static/relative/absolute/fixed/sticky")
//     : (button2.innerText = "Show Answer");
//}

const bookmarkButton = document.querySelector("[data-js='bookmark']");

bookmarkButton.addEventListener("click", () => {
  bookmarkButton.classList.toggle("bookmark-icon");
});

const cardAnswer = document.querySelector("[data-js='card-answer']");
console.log(cardAnswer);
const showAnswerButton = document.querySelector("[data-js='button1']");

showAnswerButton.addEventListener("click", () => {
  cardAnswer.classList.toggle("card-answer");
  if (showAnswerButton.textContent === "Show Answer") {
    showAnswerButton.textContent = "Hide Answer";
  } else {
    showAnswerButton.textContent = "Show Answer";
  }
});

// When the user clicks on the button the previously hidden answer should be displayed
// When the user clicks this button again the answer is hidden again
// The user can click on this button endlessly and the answer will either be displayed or hidden after each click
// The toggle functionality should be applied by using a class which is named "hidden"
// If the user clicks on an answer button, we want the button to say "hide answer" when the answer is displayed and "show answer" when the answer is not displayed.

const darkModeButton = document.querySelector("[data-js='darkmode']");

function darkmode() {
  document.body.classList.toggle("dark-mode");
}

darkModeButton.addEventListener("click", darkmode);
