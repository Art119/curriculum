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

// Inicializa exibindo somente o primeiro item
document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.carrossel-item');
    items.forEach((item, index) => {
        item.style.display = index === 0 ? 'block' : 'none';
    });
});

let videoIndex = 0;

function moverVideo(direction) {
  const slideContainer = document.querySelector('.carrossel-videos-slide');
  const videos = document.querySelectorAll('.carrossel-videos-slide video');
  
  // Pausar todos os vídeos antes de mudar
  videos.forEach(video => video.pause());
  
  videoIndex += direction;

  if (videoIndex < 0) {
    videoIndex = videos.length - 1;
  } else if (videoIndex >= videos.length) {
    videoIndex = 0;
  }

  slideContainer.style.transform = `translateX(-${videoIndex * 100}%)`;
}


