// // Task 3 The data entered into the form by users should be used to create a new question, that will be displayed as a card like the other questions.
const form = document.querySelector('[data-js="formular"]');
console.log(form);

const question = document.querySelector('[data-js="question"]');
const answer = document.querySelector('[data-js="answer"]');
const tag = document.querySelector('[data-js="tag"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log(data);
  const newCard = document.createElement("div");
  newCard.classList.add("question-card");
  const questionInput = question.value;
  const answerInput = answer.value;
  const tagInput = tag.value;
  newCard.innerHTML = `
  <i class="fas fa-bookmark" data-js="bookmark"></i>
  <p class="question">${questionInput}</p>
  <button type="text" class="answer" data-js="button1">${answerInput}</button>
  <p class="card-answer" data-js="card-answer">flex-direction</p>
  <div class="tags">
    <p>#${tagInput}</p>
    `;

  form.append(newCard);
});
