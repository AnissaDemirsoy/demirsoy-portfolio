"use strict";

import form from "./form.js";
import skillbar from "./skillbar.js";

document.addEventListener("DOMContentLoaded", () => {

  AOS.init({
    once: true,
  });

  form();
  skillbar();

  const nav = document.querySelector("#nav");
  const navBtn = document.querySelector("#nav-btn");
  const navBtnImg = document.querySelector("#nav-btn-img");
  const navLinks = document.querySelectorAll(".nav-link");

  const header = document.querySelector("#header");
  const hero = document.querySelector("#home");
  const goToTopBtn = document.getElementById("goToTop");


  /* MENU HAMBURGER */

  navBtn.addEventListener("click", () => {

    nav.classList.toggle("open");

    if (nav.classList.contains("open")) {
      navBtnImg.src = "img/icons/close.svg";
    } else {
      navBtnImg.src = "img/icons/open.svg";
    }

  });


  /* FERMER LE MENU QUAND ON CLIQUE SUR UN LIEN */

  navLinks.forEach((link) => {

    link.addEventListener("click", () => {

      nav.classList.remove("open");

      navBtnImg.src = "img/icons/open.svg";

    });

  });


  /* HEADER + BOUTON RETOUR EN HAUT */

  window.addEventListener("scroll", () => {

    const triggerHeight = hero.offsetHeight - 170;

    if (window.scrollY > triggerHeight) {

      header.classList.add("header-sticky");

    } else {

      header.classList.remove("header-sticky");

    }


    if (window.scrollY > 500) {

      goToTopBtn.classList.add("reveal");

    } else {

      goToTopBtn.classList.remove("reveal");

    }


    /* LIEN ACTIF DANS LE MENU */

    const sections = document.querySelectorAll("section");

    sections.forEach((section) => {

      const top = window.scrollY;
      const offset = section.offsetTop - 170;
      const height = section.offsetHeight;
      const id = section.getAttribute("id");

      if (top >= offset && top < offset + height) {

        navLinks.forEach((link) => {
          link.classList.remove("active");
        });

        const activeLink = document.querySelector(
          `header nav a[href="#${id}"]`
        );

        if (activeLink) {
          activeLink.classList.add("active");
        }

      }

    });

  });

});
