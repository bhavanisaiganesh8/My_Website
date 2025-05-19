// Scroll Reveal for sections
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('fade-in-visible');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// Typing animation for Hero section
const text = "Hi, I'm Bhavanisaiganesh Ryali!";
let index = 0;
const typingSpeed = 100;

function typeText() {
  const target = document.getElementById("hero-typing");
  if (index < text.length) {
    target.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeText, typingSpeed);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  typeText();
});