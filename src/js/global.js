export function render() {
  const scrollTopBtn = document.querySelector('.scrollToTop-btn');

  window.addEventListener('scroll', () => {
    scrollTopBtn.classList.toggle('active', window.scrollY > 500);
  });

  scrollTopBtn.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
}
