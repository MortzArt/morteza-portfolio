/* ── NAVBAR: floating pill collapses on scroll ── */
(() => {
  const nav = document.querySelector('nav');
  const full = nav && nav.querySelector('.nav-full');
  const compact = nav && nav.querySelector('.nav-compact');
  if (!nav || !full || !compact) return;

  // Measure natural widths so the pill animates exactly between its two sizes
  const measure = () => {
    full.style.setProperty('--w', (full.scrollWidth + 2) + 'px');
    compact.style.setProperty('--w', (compact.scrollWidth + 2) + 'px');
  };
  measure();
  window.addEventListener('resize', measure);
  window.addEventListener('load', measure);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(measure);

  // Collapse when scrolling down past the threshold, expand on any scroll up
  const THRESHOLD = 50;
  let ticking = false;
  let lastY = window.scrollY;
  const update = () => {
    const y = window.scrollY;
    if (y > THRESHOLD && y > lastY) nav.classList.add('scrolled');
    else if (y < lastY || y <= THRESHOLD) nav.classList.remove('scrolled');
    lastY = y;
    ticking = false;
  };
  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  });
  update();
})();

/* ── ENTRANCE ANIMATIONS ── */
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => io.observe(el));

/* ── MOTION PREFERENCE ── */
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ── HERO VIDEO: start after 2s, replay with a 7s pause between plays ── */
(() => {
  const video = document.querySelector('.hero-video');
  if (!video || prefersReducedMotion) return;
  video.loop = false;
  let timer = null;
  const play = () => {
    timer = null;
    if (document.hidden) return;
    video.play().catch(() => {});
  };
  const schedule = (ms) => {
    clearTimeout(timer);
    timer = setTimeout(play, ms);
  };
  schedule(2000);
  video.addEventListener('ended', () => schedule(7000));

  // Mobile browsers pause media when the tab goes to the background and never
  // fire `ended`, which kills the replay loop. Pick it back up on return.
  const resume = () => {
    if (document.hidden) return;
    if (timer) return;                    // a replay is already queued
    if (video.ended) { schedule(2000); return; }
    if (video.paused) video.play().catch(() => schedule(2000));
  };
  document.addEventListener('visibilitychange', resume);
  window.addEventListener('pageshow', resume);
})();

/* ── WORD SWAP: cycle through words separated by "|" ── */
(() => {
  const swaps = document.querySelectorAll('.word-swap');
  if (!swaps.length) return;

  swaps.forEach(el => {
    const words = el.dataset.words.split('|').map(w => w.trim()).filter(Boolean);
    el.innerHTML = '';
    words.forEach((w, i) => {
      const span = document.createElement('span');
      span.textContent = w;
      if (i === 0) span.classList.add('is-active');
      el.appendChild(span);
    });
  });

  // Size each swap to its active word so the sentence flows naturally
  const fit = el => {
    const active = el.querySelector('.is-active');
    if (active) el.style.width = active.offsetWidth + 'px';
  };
  swaps.forEach(fit);
  window.addEventListener('resize', () => swaps.forEach(fit));

  if (prefersReducedMotion) return;

  const HOLD = 2200;
  let index = 0;

  setInterval(() => {
    swaps.forEach(el => {
      const spans = el.children;
      const current = spans[index % spans.length];
      const next = spans[(index + 1) % spans.length];
      current.classList.remove('is-active');
      current.classList.add('is-leaving');
      setTimeout(() => current.classList.remove('is-leaving'), 450);
      next.classList.add('is-active');
      fit(el);
    });
    index++;
  }, HOLD);
})();
