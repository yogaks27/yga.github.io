'use strict';

/**
 * Fungsi untuk menambahkan event pada elemen
 */
const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}

/**
 * Toggle navbar
 */
const navToggler = document.querySelector("[data-nav-toggler]");
const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);

/**
 * Aktifkan header saat scroll ke bawah 100px
 */
const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElemOnScroll = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", activeElemOnScroll);

/**
 * Fungsi untuk membuka aplikasi email dengan Gmail
 */
function openGmail(email, subject, body) {
  // Membuat URL dengan skema "mailto:" untuk membuka aplikasi email
  var url = "mailto:" + encodeURIComponent(email) + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);

  // Buka URL di aplikasi email yang sesuai
  window.location.href = url;
}

function toggleAnswer(id) {
  var answer = document.getElementById('answer' + id);
  if (answer.style.display === 'none') {
    answer.style.display = 'block';
  } else {
    answer.style.display = 'none';
  }
}

function openWhatsApp() {
  window.open("https://wa.me/your-phonenumber", "_blank");
}

function showNotification() {
  var notification = document.getElementById("notification");
  notification.style.display = "block";
}

function closeNotification() {
  var notification = document.getElementById("notification");
  notification.style.display = "none";
}