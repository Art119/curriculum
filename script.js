
document.getElementById('formContato').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    const msgSucesso = document.getElementById('msgSucesso');

    if (nome && email && mensagem) {
        fetch('salvar.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `nome=${encodeURIComponent(nome)}&email=${encodeURIComponent(email)}&mensagem=${encodeURIComponent(mensagem)}`
        })
        .then(response => response.text())
        .then(data => {
            msgSucesso.innerText = data;
            msgSucesso.style.color = 'green';
            document.getElementById('formContato').reset();
        })
        .catch(error => {
            msgSucesso.innerText = 'Erro ao enviar mensagem.';
            msgSucesso.style.color = 'red';
            console.error('Erro:', error);
        });
    } else {
        msgSucesso.innerText = 'Por favor, preencha todos os campos.';
        msgSucesso.style.color = 'red';
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

const toggleBtn = document.getElementById('toggle-theme');
const body = document.body;

