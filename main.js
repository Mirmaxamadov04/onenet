document.querySelector(".hamburger").addEventListener("click", (evt) => {
  evt.preventDefault();
  document.querySelector(".nav__list").classList.toggle("show");
  console.log("hey");
});

const arrowImg = document.querySelector(".question-div__image");
const answerDiv = document.querySelector(".answer-div");

arrowImg.addEventListener("click", (evt) => {
  evt.preventDefault();

  if (answerDiv.classList.contains("show")) {
    console.log("true");
    arrowImg.src = "./images/bottom-arrow.svg";
  } else if (!answerDiv.classList.contains("show")) {
    arrowImg.src = "./images/top-arrow.svg";
  }

  answerDiv.classList.toggle("show");
});
