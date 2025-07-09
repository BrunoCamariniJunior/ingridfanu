const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
const dropdownItems = document.querySelectorAll('.menu-item.dropdown > a');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// Para abrir submenu no celular ao clicar no link do dropdown
dropdownItems.forEach(item => {
  item.addEventListener('click', e => {
    e.preventDefault();
    const parent = item.parentElement;
    parent.classList.toggle('active');
  });
});

const searchInput = document.getElementById('search-input');
const listItems = document.querySelectorAll('#ministracoes-list li');

searchInput.addEventListener('input', () => {
  const filter = searchInput.value.toLowerCase();

  listItems.forEach(item => {
    const text = item.textContent.toLowerCase();
    if (text.includes(filter)) {
      item.style.display = '';
    } else {
      item.style.display = 'none';
    }
  });
});

document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', e => {
    const href = link.getAttribute('href');

    // Só para links internos
    if (href && !href.startsWith('#') && !href.startsWith('http')) {
      e.preventDefault();
      document.body.classList.add('fade-out');

      setTimeout(() => {
        window.location.href = href;
      }, 500); // tempo igual ao da transição no CSS
    }
  });
});

const backToTopBtn = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty('--x', `${x}px`);
    card.style.setProperty('--y', `${y}px`);
  });

  card.addEventListener('mouseleave', () => {
    card.style.removeProperty('--x');
    card.style.removeProperty('--y');
  });
});
