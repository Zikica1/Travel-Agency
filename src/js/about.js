async function load() {
  const page = await import('./global.js');

  page.render();
}

load();

const aboutImg = document.querySelector('.about-us-img');
const aboutText = document.querySelector('.about-us-text');
const aboutContent = document.querySelector('.about-us-content');
const ourTime = document.querySelectorAll('.our-time-wrapper li');
const timeCards = document.querySelectorAll('.time-card');

const observerAbout = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle('show-item', entry.isIntersecting);
    if (entry.isIntersecting) observerAbout.unobserve(entry.target);
  });
});

observerAbout.observe(aboutImg);
observerAbout.observe(aboutText);
observerAbout.observe(aboutContent);

ourTime.forEach((item) => {
  observerAbout.observe(item);
});

timeCards.forEach((card) => {
  observerAbout.observe(card);
});
