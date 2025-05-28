document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
});

// 1. Animated Search Placeholder Text
const searchInput = document.querySelector(".search-box input");
const phrases = ["Search jobs or companies...", "Try 'Software Developer'", "Enter a company name"];
let phraseIndex = 0;

setInterval(() => {
  phraseIndex = (phraseIndex + 1) % phrases.length;
  searchInput.placeholder = phrases[phraseIndex];
}, 3000);

// 2. Highlight Tags on Click
const tags = document.querySelectorAll(".tag");
tags.forEach(tag => {
  tag.addEventListener("click", () => {
    tag.classList.toggle("active-tag");
  });
});

// 3. Smooth Scroll to Tags Section on Hero Button Click
document.querySelector(".btn-search").addEventListener("click", () => {
  document.querySelector(".tags-section").scrollIntoView({ behavior: "smooth" });
});

// 4. Navbar Toggle for Mobile (Add button in HTML if needed)
const toggleBtn = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}
// Count-Up Animation for Stats
const counters = document.querySelectorAll('.stat-number');
let started = false;

function animateCount(el, max) {
  let current = 0;
  const increment = Math.ceil(max / 100);

  const updateCount = () => {
    current += increment;
    if (current >= max) {
      el.textContent = max.toLocaleString();
    } else {
      el.textContent = current.toLocaleString();
      requestAnimationFrame(updateCount);
    }
  };

  updateCount();
}

window.addEventListener('scroll', () => {
  const statsSection = document.querySelector('.stats');
  const top = statsSection.getBoundingClientRect().top;

  if (top < window.innerHeight && !started) {
    counters.forEach(counter => {
      animateCount(counter, parseInt(counter.getAttribute('data-count')));
    });
    started = true;
  }
});
const slider = document.querySelector('.jobs-slider');

  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });

  slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
  });

  slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
  });

  slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; // scroll speed
    slider.scrollLeft = scrollLeft - walk;
  });

  // Touch Support
  let startTouchX = 0;
  slider.addEventListener('touchstart', (e) => {
    startTouchX = e.touches[0].pageX;
  });

  slider.addEventListener('touchmove', (e) => {
    const touchX = e.touches[0].pageX;
    const walk = (startTouchX - touchX) * 2;
    slider.scrollLeft += walk;
    startTouchX = touchX;
  });
// Fade-in on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});
observer.observe(document.querySelector('.startup-container'));
