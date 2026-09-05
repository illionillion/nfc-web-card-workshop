const slides = [...document.querySelectorAll(".slide")];
const dots = [...document.querySelectorAll(".dot")];
const currentSlide = document.querySelector("#current-slide");
const directionButtons = document.querySelectorAll("[data-direction]");
let activeIndex = 0;

function showSlide(nextIndex) {
	activeIndex = (nextIndex + slides.length) % slides.length;

	slides.forEach((slide, index) => {
		slide.classList.toggle("is-active", index === activeIndex);
	});
	dots.forEach((dot, index) => {
		const isActive = index === activeIndex;
		dot.classList.toggle("is-active", isActive);
		dot.setAttribute("aria-selected", String(isActive));
	});
	currentSlide.textContent = String(activeIndex + 1).padStart(2, "0");
}

dots.forEach((dot, index) => {
	dot.addEventListener("click", () => showSlide(index));
});

directionButtons.forEach((button) => {
	button.addEventListener("click", () => {
		showSlide(activeIndex + (button.dataset.direction === "next" ? 1 : -1));
	});
});
