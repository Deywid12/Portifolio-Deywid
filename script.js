// Menu no celular
const menuBtn = document.querySelector('.menu-btn');
const menu = document.getElementById('menu');

if (menuBtn && menu) {
  menuBtn.addEventListener('click', () => {
    const aberto = menu.classList.toggle('is-open');
    menuBtn.setAttribute('aria-expanded', String(aberto));
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menu.classList.remove('is-open');
      menuBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

// Ano no rodapé
const ano = document.getElementById('ano');
if (ano) ano.textContent = new Date().getFullYear();

// Entrada suave das seções ao rolar a página
const alvos = document.querySelectorAll('.section__head, .service, .principles > div, .job, .project, .edu, .note');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add('is-visible');
        observer.unobserve(entrada.target);
      }
    });
  }, { rootMargin: '0px 0px -8% 0px' });

  alvos.forEach((el) => {
    el.classList.add('reveal');
    observer.observe(el);
  });
}
