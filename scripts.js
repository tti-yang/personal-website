document.querySelectorAll('[data-year]').forEach((node) => {
  node.textContent = new Date().getFullYear();
});

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-nav');

if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!open));
    navigation.classList.toggle('open', !open);
  });
  navigation.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuButton.setAttribute('aria-expanded', 'false');
      navigation.classList.remove('open');
    });
  });
}

document.querySelectorAll('[data-slider]').forEach((slider) => {
  const slides = Array.from(slider.querySelectorAll('.slider-slide'));
  const previous = slider.querySelector('[data-slider-prev]');
  const next = slider.querySelector('[data-slider-next]');
  const count = slider.querySelector('[data-slider-count]');
  if (!slides.length || !previous || !next || !count) return;

  let current = 0;

  const showSlide = (index) => {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => {
      slide.classList.toggle('active', slideIndex === current);
    });
    count.textContent = `${current + 1} / ${slides.length}`;
    slides.forEach((slide, slideIndex) => {
      slide.setAttribute('aria-hidden', String(slideIndex !== current));
    });
  };

  previous.addEventListener('click', () => showSlide(current - 1));
  next.addEventListener('click', () => showSlide(current + 1));
  slider.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') showSlide(current - 1);
    if (event.key === 'ArrowRight') showSlide(current + 1);
  });
  showSlide(0);
});
