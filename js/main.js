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
const navBtn = document.getElementById("nav-btn");
const nav = document.getElementById("nav");
const navBtnImg = document.getElementById("nav-btn-img");

navBtn.addEventListener("click", () => {
  if (nav.classList.toggle("open")) {
    navBtnImg.src = "img/icons/close.svg";
  } else {
    navBtnImg.src = "img/icons/open.svg";
  }
});
