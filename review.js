const slides = document.querySelectorAll(".slide");
const newSlides = document.querySelectorAll(".newSlide");
const btnLeft = document.querySelector(".slider_btn--left");
const btnRight = document.querySelector(".slider_btn--right");
const newBtnLeft = document.querySelector(".newSlider_btn--left");
const newBtnRight = document.querySelector(".newSlider_btn--right");

let curSlide = 0;
const maxSlide = slides.length - 1;

slides.forEach((s, i) => {
  s.style.transform = `translateX(${i * 100}%)`;
});
newSlides.forEach((s, i) => {
  s.style.transform = `translateX(${i * 100}%)`;
});

function slideActive(curSlide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - curSlide)}%)`)
  );
  newSlides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - curSlide)}%)`)
  );
}
function slideRight() {
  if (curSlide === maxSlide) curSlide = 0;
  else curSlide++;
  slideActive(curSlide);
}

function slideLeft() {
  if (curSlide === 0) curSlide = maxSlide;
  else curSlide--;
  slideActive(curSlide);
}


btnRight.addEventListener("click", slideRight);
btnLeft.addEventListener("click", slideLeft);
newBtnRight.addEventListener("click", slideRight);
newBtnLeft.addEventListener("click", slideLeft);
document.addEventListener("keydown", function (e) {
  e.key === "ArrowRight" && slideRight();
  e.key === "ArrowLeft" && slideLeft();
});

