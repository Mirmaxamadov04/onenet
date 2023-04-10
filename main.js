document.querySelector(".hamburger").addEventListener("click", (evt) => {
  evt.preventDefault();
  document.querySelector(".nav__list").classList.toggle("show");
  console.log("hey");
});
const arrowImgs = document.querySelectorAll(".question-div__image");
const answerDivs = document.querySelectorAll(".answer-div");

arrowImgs.forEach((arrowImg, index) => {
  arrowImg.addEventListener("click", (evt) => {
    evt.preventDefault();

    if (answerDivs[index].classList.contains("show")) {
      console.log("true");
      arrowImg.src = "./images/bottom-arrow.svg";
    } else if (!answerDivs[index].classList.contains("show")) {
      arrowImg.src = "./images/top-arrow.svg";
    }

    answerDivs[index].classList.toggle("show");
  });
});
console.log(document.querySelector(".footer__logo"));

document.querySelector(".footer__logo").addEventListener("click", (evt) => {
  evt.preventDefault();
  console.log("hey");

  window.scrollTo({ top: 0, behavior: "smooth" });
});
