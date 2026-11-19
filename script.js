// Ano no rodapé
const ano = document.getElementById('ano');
if (ano) ano.textContent = new Date().getFullYear();

// Destaca no índice lateral a seção que está na tela
const linksIndice = document.querySelectorAll('.toc a');
const secoes = [...linksIndice]
  .map((link) => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

if ('IntersectionObserver' in window && secoes.length) {
  const marcar = (id) => {
    linksIndice.forEach((link) => {
      link.classList.toggle('is-active', link.getAttribute('href') === `#${id}`);
    });
  };

  const observer = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) marcar(entrada.target.id);
    });
  }, { rootMargin: '-35% 0px -60% 0px' });

  secoes.forEach((secao) => observer.observe(secao));
}
