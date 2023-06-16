async function load() {
  const page = await import('./global.js');
  page.render();
}

load();

//Scroll to down
window.addEventListener('scroll', () => {
  document
    .querySelector('.header-sec')
    .classList.toggle('sticky', window.scrollY > 0);
});

//Modal
const thingCard = document.querySelectorAll('.card-m');
const modalCloseBtn = document.querySelectorAll('.modal-close-btn');
const modals = document.querySelectorAll('.modal');

thingCard.forEach((card, i) => {
  card.addEventListener('click', () => {
    modals[i].classList.add('active');
  });
});

modalCloseBtn.forEach(function (item) {
  item.addEventListener('click', () => {
    modals.forEach((item) => {
      item.classList.remove('active');
    });
  });
});
