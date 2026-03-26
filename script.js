/* ============================================================
   Lumière Beauty Parlour — script.js
   ============================================================ */

/* ──────────────── NAVBAR: SCROLL SHADOW ──────────────── */
window.addEventListener('scroll', function () {
  const nav = document.getElementById('mainNav');
  if (window.scrollY > 60) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

/* ──────────────── FADE-UP ON SCROLL ──────────────── */
const fadeElements = document.querySelectorAll('.fade-up');

const fadeObserver = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry, index) {
    if (entry.isIntersecting) {
      setTimeout(function () {
        entry.target.classList.add('visible');
      }, index * 80);
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

fadeElements.forEach(function (el) {
  fadeObserver.observe(el);
});

/* ──────────────── ACTIVE NAV LINK ON SCROLL ──────────────── */
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', function () {
  let current = '';
  sections.forEach(function (section) {
    if (window.scrollY >= section.offsetTop - 120) {
      current = section.id;
    }
  });

  document.querySelectorAll('.nav-link').forEach(function (link) {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});

/* ──────────────── BOOKING BUTTON: TOAST NOTIFICATION ──────────────── */
document.getElementById('bookBtn').addEventListener('click', function () {
  const toastEl = document.getElementById('bookToast');
  const toast = new bootstrap.Toast(toastEl, { delay: 4000 });
  toast.show();
});

/* ──────────────── SMOOTH COLLAPSE ON MOBILE NAV LINK CLICK ──────────────── */
document.querySelectorAll('.nav-link').forEach(function (link) {
  link.addEventListener('click', function () {
    const navCollapse = document.getElementById('navbarNav');
    if (navCollapse.classList.contains('show')) {
      const bsCollapse = bootstrap.Collapse.getInstance(navCollapse);
      if (bsCollapse) bsCollapse.hide();
    }
  });
});

/* ──────────────── FOOTER EMAIL SUBSCRIBE (Demo) ──────────────── */
const footerForm = document.querySelector('footer .d-flex.gap-2');
if (footerForm) {
  const joinBtn = footerForm.querySelector('button');
  const emailInput = footerForm.querySelector('input[type="email"]');

  joinBtn.addEventListener('click', function () {
    const email = emailInput.value.trim();
    if (email && email.includes('@')) {
      joinBtn.textContent = 'Subscribed ✓';
      joinBtn.disabled = true;
      emailInput.value = '';
      emailInput.placeholder = 'Thank you!';
    } else {
      emailInput.style.borderColor = '#e57373';
      setTimeout(function () {
        emailInput.style.borderColor = '';
      }, 1500);
    }
  });
}
