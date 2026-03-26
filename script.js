// Dark mode
const btn = document.getElementById("toggleTheme");

btn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Scroll animation
const elements = document.querySelectorAll(".fade-in");

function showOnScroll() {
  const trigger = window.innerHeight * 0.8;

  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;

    if (top < trigger) {
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", showOnScroll);
showOnScroll();
