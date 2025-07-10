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
