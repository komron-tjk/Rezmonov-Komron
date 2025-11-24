// script.js - navigation, typing, year, interactions

// Mobile Navigation Toggle
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
  // close menu when click a link
  navLinks.querySelectorAll("a").forEach(a=>{
    a.addEventListener("click", ()=> {
      if (navLinks.classList.contains("open")) {
        navLinks.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  });
}

// Typing effect
const texts = ["Full-Stack Developer", "Automation Engineer", "Frontend & Backend"];
let idx = 0, pos = 0;
const el = document.getElementById('typing');
function type(){
  if(!el) return;
  const str = texts[idx % texts.length];
  el.textContent = str.slice(0, pos);
  pos++;
  if(pos > str.length){ pos = 0; idx++; setTimeout(type, 900); }
  else setTimeout(type, 80);
}
type();

// Year
const yearEl = document.getElementById('year');
if(yearEl) yearEl.textContent = new Date().getFullYear();

// make hero image rotate slowly (class added via JS)
const heroImg = document.querySelector('.hero-image img');
if(heroImg) heroImg.classList.add('rotate-slow');

// simple intersection observer for fade-in
const faders = document.querySelectorAll('.fade-in');
const appearOptions = {threshold: 0.12, rootMargin: "0px 0px -30px 0px"};
const appearOnScroll = new IntersectionObserver(function(entries, observer){
  entries.forEach(entry=>{
    if(!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, appearOptions);
faders.forEach(f => appearOnScroll.observe(f));
