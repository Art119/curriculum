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
