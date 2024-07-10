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
console.log(bookmarkButton);

bookmarkButton.addEventListener("click", () => {
  bookmarkButton.classList.toggle("bookmark-icon");
});

//  When the user clicks the bookmark icon the bookmark icon should change it's visual state (e. g. another color or image)
// When the user clicks the bookmark icon again the bookmark icon should change to its former style
// The user can click on the bookmark endlessly and the bookmark will toggle between both stylings

const darkModeButton = document.querySelector("[data-js='darkmode']");

function darkmode() {
  document.body.classList.toggle("dark-mode");
}

darkModeButton.addEventListener("click", darkmode);
