// Progressive enhancement: navigation remains available without JavaScript.
document.documentElement.classList.add('js');
const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
if (toggle && navigation) {
  toggle.hidden = false;
  const setOpen = (open) => {
    toggle.setAttribute('aria-expanded', String(open));
    navigation.classList.toggle('open', open);
  };
  toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
  navigation.addEventListener('click', (event) => {
    if (event.target.closest('a')) setOpen(false);
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setOpen(false); toggle.focus();
    }
  });
  matchMedia('(min-width: 768px)').addEventListener('change', () => setOpen(false));
}

// No autoplay: visitors control each gallery. Slide count comes from the HTML.
document.querySelectorAll('[data-carousel]').forEach(carousel => {
  const track = carousel.querySelector('.media-track');
  const slides = [...track.querySelectorAll('.media-slide')];
  const controls = carousel.querySelector('.media-controls');
  const counter = carousel.querySelector('.media-counter');
  if (!slides.length) return;
  let index = 0;
  let frame;
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  const sync = () => {
    const left = track.getBoundingClientRect().left;
    index = slides.reduce((best, slide, i) =>
      Math.abs(slide.getBoundingClientRect().left - left) <
      Math.abs(slides[best].getBoundingClientRect().left - left) ? i : best, 0);
    counter.textContent = `${index + 1} de ${slides.length}`;
  };
  const go = next => {
    index = (next + slides.length) % slides.length;
    const left = slides[index].getBoundingClientRect().left - track.getBoundingClientRect().left + track.scrollLeft;
    track.scrollTo({ left, behavior: motion.matches ? 'instant' : 'smooth' });
  };
  slides.forEach((slide, i) => slide.setAttribute('aria-label', `${i + 1} de ${slides.length}`));
  controls.hidden = slides.length < 2;
  carousel.querySelector('[data-prev]').addEventListener('click', () => go(index - 1));
  carousel.querySelector('[data-next]').addEventListener('click', () => go(index + 1));
  track.addEventListener('keydown', event => {
    // Preserve ordinary keyboard navigation on links inside the slides.
    if (event.target !== track) return;
    if (event.key === 'ArrowRight') { event.preventDefault(); go(index + 1); }
    if (event.key === 'ArrowLeft') { event.preventDefault(); go(index - 1); }
    if (event.key === 'Home') { event.preventDefault(); go(0); }
    if (event.key === 'End') { event.preventDefault(); go(slides.length - 1); }
  });
  track.addEventListener('scroll', () => {
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(sync);
  }, { passive: true });
  const resize = new ResizeObserver(() => {
    track.scrollTo({left: slides[index].getBoundingClientRect().left - track.getBoundingClientRect().left + track.scrollLeft, behavior: 'instant'});
    sync();
  });
  resize.observe(track);
  sync();
});
