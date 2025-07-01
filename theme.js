document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('toggle-theme');
  const body = document.body;

  // Aplica o tema salvo no carregamento
  const savedTheme = localStorage.getItem('theme') || 'light';
  applyTheme(savedTheme);

  // Evento de clique para alternar
  toggleBtn.addEventListener('click', () => {
    const currentTheme = body.classList.contains('dark-theme') ? 'dark' : 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(newTheme);
  });

  function applyTheme(theme) {
    if (theme === 'dark') {
      body.classList.add('dark-theme');
      toggleBtn.textContent = '☀️ Modo Cinza';
    } else {
      body.classList.remove('dark-theme');
      toggleBtn.textContent = '🌙 Modo Escuro';
    }
    localStorage.setItem('theme', theme);
  }
});
