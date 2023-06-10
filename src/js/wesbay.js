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
