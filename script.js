var menuToggle = document.getElementById('menu-toggle');
var menu = document.getElementById('menu');
var dropdownItems = document.querySelectorAll('.menu-item.dropdown > a');

menuToggle.addEventListener('click', function () {
  menu.classList.toggle('active');
});

dropdownItems.forEach(function(item) {
  item.addEventListener('click', function(e) {
    e.preventDefault();
    var parent = item.parentElement;
    parent.classList.toggle('active');
  });
});

var backToTopBtn = document.getElementById('back-to-top');

window.addEventListener('scroll', function() {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
});

backToTopBtn.addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

var cards = document.querySelectorAll('.card');

cards.forEach(function(card) {
  card.addEventListener('mousemove', function(e) {
    var rect = card.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;

    card.style.setProperty('--x', x + "px");
    card.style.setProperty('--y', y + "px");
  });

  card.addEventListener('mouseleave', function() {
    card.style.removeProperty('--x');
    card.style.removeProperty('--y');
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var versiculos = {
    "2timoteo467": "⁶ Eu já estou sendo derramado como uma oferta de bebida. Está próximo o tempo da minha partida. ⁷ Combati o bom combate, terminei a corrida, guardei a fé.",
	"2timoteo22": "² E as coisas que me ouviu dizer na presença de muitas testemunhas, confie a homens fiéis que sejam também capazes de ensinar a outros.",
	"1corintios61920": "19 Acaso não sabem que o corpo de vocês é santuário do Espírito Santo que habita em vocês, que lhes foi dado por Deus, e que vocês não são de si mesmos? 20 Vocês foram comprados por alto preço. Portanto, glorifiquem a Deus com o seu próprio corpo.",
	"1timoteo35": "5 Pois, se alguém não sabe governar sua própria família, como poderá cuidar da igreja de Deus?",
	"efesios416": "16 Dele todo o corpo, ajustado e unido pelo auxílio de todas as juntas, cresce e edifica-se a si mesmo em amor, na medida em que cada parte realiza a sua função.",
	"colossenses219": "19 Trata-se de alguém que não está unido à Cabeça, a partir da qual todo o corpo, sustentado e unido por seus ligamentos e juntas, efetua o crescimento dado por Deus.",
  };

  var links = document.querySelectorAll(".hyperlinkstyle[data-ref]");
  var modal = document.getElementById("bible-modal");
  var modalText = document.getElementById("bible-text");
  var closeBtn = document.querySelector(".close-btn");

  links.forEach(function(link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      var ref = link.getAttribute("data-ref");
      var texto = versiculos[ref] || "Versículo não encontrado.";
      modalText.textContent = texto;
      modal.style.display = "block";
    });
  });

  closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
  });

  window.addEventListener("click", function(e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
