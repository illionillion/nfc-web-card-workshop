const slides = [...document.querySelectorAll(".carousel-slide")];
const dots = document.querySelector(".carousel-dots");
const previousButton = document.querySelector(".carousel-button-prev");
const nextButton = document.querySelector(".carousel-button-next");
let currentSlide = 0;

function showSlide(index) {
  currentSlide = (index + slides.length) % slides.length;
  slides.forEach((slide, slideIndex) => slide.classList.toggle("is-active", slideIndex === currentSlide));
  document.querySelectorAll(".carousel-dot").forEach((dot, dotIndex) => {
    dot.classList.toggle("is-active", dotIndex === currentSlide);
    dot.setAttribute("aria-current", dotIndex === currentSlide ? "true" : "false");
  });
}

slides.forEach((_, slideIndex) => {
  const dot = document.createElement("button");
  dot.className = "carousel-dot";
  dot.type = "button";
  dot.setAttribute("aria-label", `${slideIndex + 1}枚目の写真を表示`);
  dot.addEventListener("click", () => showSlide(slideIndex));
  dots.append(dot);
});

previousButton.addEventListener("click", () => showSlide(currentSlide - 1));
nextButton.addEventListener("click", () => showSlide(currentSlide + 1));
showSlide(0);

const hint = document.querySelector("#copy-hint");

document.querySelectorAll("[data-copy]").forEach((element) => {
  element.addEventListener("click", async (event) => {
    event.preventDefault();

    const value = element.getAttribute("data-copy");
    if (!value) return;

    try {
      await navigator.clipboard.writeText(value);
      showHint("コピーしました");
    } catch {
      showHint(value);
    }
  });
});

function showHint(message) {
  if (!hint) return;

  hint.textContent = message;
  hint.hidden = false;
  window.clearTimeout(showHint.timer);
  showHint.timer = window.setTimeout(() => {
    hint.hidden = true;
  }, 1800);
}
