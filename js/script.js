'use strict';
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav__menu');

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll(".nav__menu-link").forEach(n => n.addEventListener('click', () =>{
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}))
