// ===============================
// 🌙 Dark Mode Toggle + Save Preference
// ===============================
const btn = document.getElementById("toggleTheme");

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  btn.textContent = "☀️ Light Mode";
} else {
  btn.textContent = "🌙 Dark Mode";
}

btn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    btn.textContent = "☀️ Light Mode";
    localStorage.setItem("theme", "dark");
  } else {
    btn.textContent = "🌙 Dark Mode";
    localStorage.setItem("theme", "light");
  }
});


// ===============================
// 👀 Fade-in Animation on Scroll
// ===============================
const elements = document.querySelectorAll(".fade-in");

function showOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  elements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < triggerBottom) {
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", showOnScroll);

// Run once on page load
showOnScroll();


// ===============================
// ⬆️ Smooth Scroll for Links (future use)
// ===============================
const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});
