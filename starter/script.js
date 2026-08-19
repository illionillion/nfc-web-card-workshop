const slides = Array.from(document.querySelectorAll('.slide'));
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let activeIndex = 0;
let autoTimerId = null;

function scheduleAutoSlide() {
  if (autoTimerId) {
    window.clearTimeout(autoTimerId);
  }

  autoTimerId = window.setTimeout(() => {
    showSlide(activeIndex + 1);
  }, 4000);
}

function showSlide(index) {
  activeIndex = (index + slides.length) % slides.length;

  slides.forEach((slide, currentIndex) => {
    slide.classList.toggle('active', currentIndex === activeIndex);
  });

  scheduleAutoSlide();
}

prevButton.addEventListener('click', () => {
  showSlide(activeIndex - 1);
});

nextButton.addEventListener('click', () => {
  showSlide(activeIndex + 1);
});

scheduleAutoSlide();
