// === main.js ===

// Animate skill bars
document.addEventListener("DOMContentLoaded", () => {
  const bars = document.querySelectorAll(".skill-bar__fill");

  bars.forEach((bar) => {
    const progress = bar.getAttribute("data-progress");
    bar.style.width = progress + "%";
  });
});

// Navigation toggle for mobile
