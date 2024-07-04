const button1 = document.querySelector("[data-js='button1']");

button1.addEventListener("click", () => {
  if (button1.innerText === "Show Answer") {
    button1.innerText = "The correct answer is: flex-direction: column";
  } else {
    button1.innerText = "Show Answer";
  }
});

const button2 = document.querySelector("[data-js='button2']");

button2.addEventListener("click", showAnswer);

function showAnswer() {
  button2.innerText === "Show Answer"
    ? (button2.innerText = "position: static/relative/absolute/fixed/sticky")
    : (button2.innerText = "Show Answer");
}
