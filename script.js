// ===== MAGNATTO DIGITAL — script.js =====

const WPP_NUMBER = '5547988739362';
const WPP_MSG = 'Olá! Vi o site da Magnatto Digital e gostaria de um orçamento para o meu segmento de negócios!';

function abrirWpp(msg = WPP_MSG) {
  window.open(`https://wa.me/${WPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
}

// Botões WhatsApp
document.querySelectorAll('[data-wpp]').forEach(el => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    const msg = el.dataset.wpp !== '' ? el.dataset.wpp : WPP_MSG;
    abrirWpp(msg);
  });
});

// Hamburger
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('open', open);
  });

  mobileMenu.querySelectorAll('a:not([data-wpp])').forEach(a => {
    a.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      hamburger.classList.remove('open');
    });
  });

  document.addEventListener('click', e => {
    if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
      mobileMenu.classList.remove('open');
      hamburger.classList.remove('open');
    }
  });
}

// Navbar shadow on scroll
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.nav');
  if (nav) nav.style.boxShadow = window.scrollY > 10 ? '0 2px 30px rgba(0,0,0,0.4)' : 'none';
});

// Fade-in animation
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.service-card, .info-card, .step, .stat-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(18px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});

var botaoWhats = document.getElementById('fabWhatsapp')

botaoWhats.addEventListener('click', function(){

  var numero = '5547988739362'
  var mensagem = 'Olá!, quero um orçamento de website para o meu negócio!'

  var url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`
  
  window.open(url, '_blank')

})