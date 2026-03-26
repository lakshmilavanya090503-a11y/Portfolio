// 🌙 Dark Mode Toggle
const toggleBtn = document.getElementById("toggleTheme");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});


// 👀 Fade-in on scroll
const elements = document.querySelectorAll(".fade-in");

function showOnScroll() {
  const triggerBottom = window.innerHeight * 0.8;

  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;

    if (top < triggerBottom) {
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", showOnScroll);

// Run once on load
showOnScroll();
