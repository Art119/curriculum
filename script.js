document.getElementById('formContato').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    if (nome && email && mensagem) {
        document.getElementById('msgSucesso').innerText = "Mensagem enviada com sucesso!";
        document.getElementById('formContato').reset();
    } else {
        document.getElementById('msgSucesso').innerText = "Por favor, preencha todos os campos.";
    }
});
 document.getElementById("whatsapp-button").onclick = function () {
      const numero = "5574999198226"; // <-- Altere para seu número com DDI e DDD
      const mensagem = "Olá! Gostaria de conversar com você.";
      const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
      
      window.location.href = url;
    };

let currentIndex = 0;

function moveCarrossel(direction) {
    const items = document.querySelectorAll('.carrossel-item');
    items[currentIndex].style.display = 'none';

    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = items.length - 1;
    } else if (currentIndex >= items.length) {
        currentIndex = 0;
    }

    items[currentIndex].style.display = 'block';
}

let slideIndex = 0;

function trocarSlide(direcao) {
  const trilho = document.querySelector(".galeria-trilho");
  const slides = document.querySelectorAll(".slide");
  const totalSlides = slides.length;

  slideIndex += direcao;

  if (slideIndex < 0) {
    slideIndex = totalSlides - 1;
  } else if (slideIndex >= totalSlides) {
    slideIndex = 0;
  }

  trilho.style.transform = `translateX(-${slideIndex * 100}%)`;
}
