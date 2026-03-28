/* ── NAVBAR SCROLL BEHAVIOR ── */
(() => {
  const nav = document.querySelector('nav');
  let lastScrollY = window.scrollY;
  let ticking = false;
  const isMobile = () => window.innerWidth <= 768;

  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;

    requestAnimationFrame(() => {
      const currentY = window.scrollY;

      // Add/remove scrolled shadow
      if (currentY > 10) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }

      // Mobile drawer: hide on scroll down, show on scroll up
      if (isMobile()) {
        if (currentY > lastScrollY && currentY > 80) {
          nav.classList.add('nav-hidden');
        } else {
          nav.classList.remove('nav-hidden');
        }
      }

      lastScrollY = currentY;
      ticking = false;
    });
  });
})();

/* ── HAMBURGER MENU ── */
(() => {
  const btn = document.querySelector('.hamburger');
  const links = document.querySelector('.nav-links');
  if (!btn || !links) return;

  btn.addEventListener('click', () => {
    const open = btn.classList.toggle('open');
    links.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open);
  });

  // Close menu when a link is clicked
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      btn.classList.remove('open');
      links.classList.remove('open');
      btn.setAttribute('aria-expanded', false);
    });
  });
})();

/* ── ENTRANCE ANIMATIONS ── */
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => io.observe(el));

/* ── NAME TYPEWRITER ── */
document.querySelectorAll('.name-reveal').forEach(el => {
  const shortText = el.dataset.short;
  const fullText = el.dataset.full;
  const typed = el.querySelector('.name-typed');
  let animating = false;
  let currentText = shortText;
  let targetText = shortText;
  let timeout = null;

  // Color the dot on initial load
  if (shortText.startsWith('.')) {
    typed.innerHTML = '<span class="dot">.</span>' + shortText.slice(1);
  }

  function typeStep() {
    if (currentText === targetText) {
      animating = false;
      el.classList.remove('typing');
      return;
    }

    el.classList.add('typing');

    // If current text isn't a prefix of target, delete a character
    if (!targetText.startsWith(currentText)) {
      currentText = currentText.slice(0, -1);
    } else {
      // Add next character from target
      currentText = targetText.slice(0, currentText.length + 1);
    }

    // Color the dot in .ME with accent color
    if (currentText.startsWith('.')) {
      typed.innerHTML = '<span class="dot">.</span>' + currentText.slice(1);
    } else {
      typed.textContent = currentText;
    }
    const speed = currentText.length === 0 ? 80 : 55;
    timeout = setTimeout(typeStep, speed);
  }

  function animateTo(text) {
    if (targetText === text) return;
    targetText = text;
    if (!animating) {
      animating = true;
      typeStep();
    }
  }

  // Check if this name-reveal lives inside .hero — if so, the whole hero triggers it
  const hero = el.closest('.hero');
  const trigger = hero || el;

  trigger.addEventListener('mouseenter', () => { autoPlaying = false; animateTo(fullText); });
  trigger.addEventListener('mouseleave', () => { autoPlaying = false; animateTo(shortText); });

  // Auto-play loop for hero name-reveal
  let autoPlaying = false;
  if (hero) {
    let showingFull = false;
    autoPlaying = true;

    function autoLoop() {
      if (!autoPlaying) return;
      showingFull = !showingFull;
      animateTo(showingFull ? fullText : shortText);
      // Wait for typing to finish, then hold for 3 seconds
      const typingDuration = (shortText.length + fullText.length) * 55 + 200;
      setTimeout(autoLoop, typingDuration + 3000);
    }

    // Start with 3 second delay
    setTimeout(autoLoop, 3000);

    // Stop auto-play on any hover interaction with the hero
    trigger.addEventListener('mouseenter', () => { autoPlaying = false; });
  }
});
