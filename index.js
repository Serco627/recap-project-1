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

const darkModeButton = document.querySelector("[data-js='darkmode']");

function darkmode() {
  document.body.classList.toggle("dark-mode");
}

darkModeButton.addEventListener("click", darkmode);
