// Smooth scrolling para links do nav
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Animação de digitação
const texts = ['Desenvolvedor', 'Full-Stack', 'Automações', 'Análise de Dados', 'IA'];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.getElementById('typing-text');

function typeText() {
  const currentText = texts[textIndex];

  if (isDeleting) {
    typingElement.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingElement.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;
  }

  let typeSpeed = isDeleting ? 50 : 100;

  if (!isDeleting && charIndex === currentText.length) {
    typeSpeed = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % texts.length;
    typeSpeed = 500;
  }

  setTimeout(typeText, typeSpeed);
}
typeText();

// Fade-in on scroll
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, observerOptions);
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Skill bars animation (quando a seção entra na viewport)
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const skillBars = entry.target.querySelectorAll('.skill-bar');
      skillBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        setTimeout(() => { bar.style.width = width; }, 500);
      });
    }
  });
}, observerOptions);

const skillsSection = document.getElementById('skills');
if (skillsSection) skillObserver.observe(skillsSection);

// Mobile menu (placeholder)
const mobileMenuBtn = document.getElementById('mobile-menu');
mobileMenuBtn?.addEventListener('click', () => {
  alert('Menu mobile - Em uma implementação real, aqui abriria um menu lateral');
});

// Botões "Ver Detalhes" (placeholder)
//document.querySelectorAll('button').forEach(button => {
  //if (button.textContent.includes('Ver Detalhes')) {
    //button.addEventListener('click', () => {
      //alert('Em uma implementação real, aqui abriria os detalhes do projeto com mais informações, imagens e links para demonstrações.');
    //});
  //}
//});

// Destaque do item ativo no nav ao rolar
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav a[href^="#"]');
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (scrollY >= (sectionTop - 200)) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('text-blue-400');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('text-blue-400');
    }
  });
});
