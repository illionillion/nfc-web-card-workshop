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
