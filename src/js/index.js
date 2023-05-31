async function load() {
  const page = await import('./global');

  page.render();
}

load();

//Observer
const slideTex = document.querySelectorAll('.text');
const rightCol = document.querySelectorAll('.slide-right-col');
const heroArrow = document.querySelectorAll('.hero-arrow');
const startJou = document.querySelectorAll('.start-journey');
const destinationCards = document.querySelectorAll('.destination-wrapper li');
const achievementImg = document.querySelector('.achievement-img');
const achievementContent = document.querySelector('.achievement-content');
const popularText = document.querySelector('.popular-tour-text');
const popLeftCol = document.querySelector('.popular-tour-wrapper .left-col');
const popRightCol = document.querySelector('.popular-tour-wrapper .right-col');
const testimonialCards = document.querySelectorAll('.testimonial-cards .card');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('show', entry.isIntersecting);
      if (entry.isIntersecting) observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0,
  }
);

const observer2 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('show-card', entry.isIntersecting);
      if (entry.isIntersecting) observer2.unobserve(entry.target);
    });
  },
  {
    threshold: 0.5,
  }
);

slideTex.forEach((slide) => {
  observer.observe(slide);
});

rightCol.forEach((col) => {
  observer.observe(col);
});

heroArrow.forEach((arrow) => {
  observer.observe(arrow);
});

startJou.forEach((start) => {
  observer.observe(start);
});

observer.observe(achievementImg);

observer.observe(achievementContent);

observer.observe(popLeftCol);
observer.observe(popRightCol);

destinationCards.forEach((card) => {
  observer2.observe(card);
});

observer2.observe(popularText);

testimonialCards.forEach((card) => {
  observer2.observe(card);
});

//Slider

let sliderImages = document.querySelectorAll('.slide');
let arrowLeft = document.querySelector('.arrow-left');
let arrowRight = document.querySelector('.arrow-right');
current = 0;

function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = 'none';
  }
}

function startSlider() {
  reset();

  sliderImages[0].style.display = 'block';
}

function leftSlide() {
  reset();

  sliderImages[current - 1].style.display = 'block';
  current--;
}

function rightSlide() {
  reset();

  sliderImages[current + 1].style.display = 'block';
  current++;
}

arrowLeft.addEventListener('click', () => {
  if (current === 0) {
    current = sliderImages.length;
  }

  leftSlide();
});

arrowRight.addEventListener('click', () => {
  if (current === sliderImages.length - 1) {
    current = -1;
  }

  rightSlide();
});

startSlider();

//Loader
const loader = document.querySelector('.loader');
const loaderInner = document.querySelector('.loader-inner');
const loaderWrap = document.querySelector('.loader-wrap');
const closeBtn = document.querySelector('.close-btn');
const start = document.querySelectorAll('.start-journey');

function init() {
  setTimeout(function () {
    loaderInner.classList.add('active');

    loaderWrap.style.display = 'block';
    setTimeout(() => {
      loaderWrap.style.opacity = 1;
    }, 50);
  }, 4000);
}

start.forEach((start) => {
  start.addEventListener('click', () => {
    init();
    loader.classList.add('action');
  });
});

closeBtn.addEventListener('click', () => {
  loader.classList.remove('action');
  loaderInner.classList.remove('active');
  loaderWrap.style.display = 'none';
  loaderWrap.style.opacity = 0;
});
