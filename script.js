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
 document.getElementById("whatsapp-button").addEventListener("click", function () {
      const numero = "5574999198226"; // Substitua pelo seu número com DDI e DDD
      const mensagem = "Olá! Gostaria de conversar com você.";
      const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
      window.open(url, "_blank");
    });
