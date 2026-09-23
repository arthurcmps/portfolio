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

// Capturas reais dos projetos. As páginas de case mantêm placeholders no HTML como fallback
// e este mapa conecta automaticamente os arquivos existentes no repositório.
const projectMedia = {
  'ecommerce.html': {
    cover: {
      src: '../assets/images/projects/ecommerce/vitrine.png',
      alt: 'Vitrine da loja do SaaS E-commerce com produtos disponíveis para compra',
      caption: 'Vitrine da loja'
    },
    slides: [
      {
        src: '../assets/images/projects/ecommerce/vitrine.png',
        alt: 'Vitrine da loja do SaaS E-commerce com produtos disponíveis para compra',
        caption: 'Vitrine da loja'
      },
      {
        src: '../assets/images/projects/ecommerce/carrinho.png',
        alt: 'Carrinho de compras aberto na loja do SaaS E-commerce',
        caption: 'Carrinho de compras'
      },
      {
        src: '../assets/images/projects/ecommerce/pedidos.png',
        alt: 'Painel administrativo de pedidos do SaaS E-commerce',
        caption: 'Gestão de pedidos'
      },
      {
        src: '../assets/images/projects/ecommerce/indicadores.png',
        alt: 'Dashboard do SaaS E-commerce com indicadores e métricas de vendas',
        caption: 'Relatórios e indicadores'
      }
    ]
  },
  'okan.html': {
    cover: {
      src: '../assets/images/projects/okan/home.jpg',
      alt: 'Tela inicial do Okan',
      caption: 'Experiência principal do Okan'
    },
    slides: [
      {
        src: '../assets/images/projects/okan/home.jpg',
        alt: 'Tela inicial do Okan',
        caption: 'Tela inicial'
      },
      {
        src: '../assets/images/projects/okan/treino.jpg',
        alt: 'Tela de treino em andamento no aplicativo Okan',
        caption: 'Treino em andamento'
      },
      {
        src: '../assets/images/projects/okan/historico.jpg',
        alt: 'Tela de histórico de treinos no aplicativo Okan',
        caption: 'Histórico de treinos'
      },
      {
        src: '../assets/images/projects/okan/evolu%C3%A7%C3%A3o.jpg',
        alt: 'Tela de evolução e acompanhamento de desempenho no Okan',
        caption: 'Evolução e acompanhamento'
      },
      {
        src: '../assets/images/projects/okan/painel.png',
        alt: 'Painel administrativo web do Okan',
        caption: 'Painel administrativo'
      }
    ]
  },
  'voz-amiga.html': {
    cover: {
      src: '../assets/images/projects/voz-amiga/categorias.png',
      alt: 'Tela de categorias de comunicação do aplicativo Voz Amiga',
      caption: 'Categorias de comunicação'
    },
    slides: [
      {
        src: '../assets/images/projects/voz-amiga/categorias.png',
        alt: 'Tela de categorias de comunicação do aplicativo Voz Amiga',
        caption: 'Categorias'
      },
      {
        src: '../assets/images/projects/voz-amiga/frases.png',
        alt: 'Tela de frases e pictogramas do aplicativo Voz Amiga',
        caption: 'Frases e pictogramas'
      },
      {
        src: '../assets/images/projects/voz-amiga/favoritos.png',
        alt: 'Tela de frases favoritas do aplicativo Voz Amiga',
        caption: 'Favoritos'
      },
      {
        src: '../assets/images/projects/voz-amiga/perfil.png',
        alt: 'Tela de perfil e preferências do aplicativo Voz Amiga',
        caption: 'Perfil e preferências'
      }
    ]
  }
};

const currentPage = window.location.pathname.split('/').pop() || 'index.html';
const currentProjectMedia = projectMedia[currentPage];

if (currentProjectMedia) {
  const caseArt = document.querySelector('.case-art');
  if (caseArt && currentProjectMedia.cover) {
    const coverLink = document.createElement('a');
    coverLink.className = 'case-cover';
    coverLink.href = currentProjectMedia.cover.src;
    coverLink.target = '_blank';
    coverLink.rel = 'noopener';
    coverLink.setAttribute('aria-label', `Ampliar: ${currentProjectMedia.cover.caption}`);

    const coverImage = document.createElement('img');
    coverImage.src = currentProjectMedia.cover.src;
    coverImage.alt = currentProjectMedia.cover.alt;
    coverImage.decoding = 'async';
    coverImage.fetchPriority = 'high';

    coverLink.appendChild(coverImage);
    caseArt.replaceChildren(coverLink);
    caseArt.classList.add('has-cover');
  }

  const gallerySlides = [...document.querySelectorAll('[data-carousel] .media-slide')];
  gallerySlides.forEach((slide, index) => {
    const media = currentProjectMedia.slides[index];
    if (!media) return;

    const imageLink = document.createElement('a');
    imageLink.className = 'media-image';
    imageLink.href = media.src;
    imageLink.target = '_blank';
    imageLink.rel = 'noopener';
    imageLink.setAttribute('aria-label', `Ampliar: ${media.caption}`);

    const image = document.createElement('img');
    image.src = media.src;
    image.alt = media.alt;
    image.loading = 'lazy';
    image.decoding = 'async';

    imageLink.appendChild(image);

    const placeholder = slide.querySelector('.media-placeholder');
    if (placeholder) placeholder.replaceWith(imageLink);

    const caption = slide.querySelector('figcaption');
    if (caption) caption.textContent = media.caption;
  });
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
