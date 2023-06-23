async function load() {
  const page = await import('./global.js');

  page.render();
}

load();

const contactTex = document.querySelector('.contact-us-text');
const contactMap = document.querySelector('.contact-map');
const contactLeft = document.querySelector('.left-col');
const contactRight = document.querySelector('.right-col');
const cards = document.querySelectorAll('.card');

const observerCo = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle('action', entry.isIntersecting);
    if (entry.isIntersecting) observerCo.unobserve(entry.target);
  });
});

const observerCo2 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('action', entry.isIntersecting);
      if (entry.isIntersecting) observerCo2.unobserve(entry.target);
    });
  },
  {
    threshold: 0.5,
  }
);

observerCo.observe(contactTex);
observerCo.observe(contactMap);
observerCo.observe(contactLeft);
observerCo.observe(contactRight);

cards.forEach((card) => {
  observerCo2.observe(card);
});
