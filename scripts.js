const startButton = document.getElementById('start-button');
const audio = document.getElementById('intro-audio');

startButton.addEventListener('click', function () {
  // Esconde a intro e mostra o conteúdo
  document.getElementById('intro-screen').style.display = 'none';
  const portfolioContent = document.getElementById('portfolio-content');
  portfolioContent.style.display = 'block';
  portfolioContent.classList.add('fade-in');

  // Toca o áudio uma vez
  if (audio) {
    audio.currentTime = 0; // Garante que comece do início
    audio.play().catch(error => {
      console.error('Erro ao tentar tocar o áudio:', error);
    });
  }
});

// Quando o áudio terminar, ele é pausado e reiniciado (não repete)
if (audio) {
  audio.addEventListener('ended', () => {
    audio.pause();
    audio.currentTime = 0;
  });
}


// Validação do Formulário
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();

  // Resetar mensagens de erro
  document.querySelectorAll('.error-message').forEach(el => el.textContent = '');

  // Validação
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  let isValid = true;

  if (!name) {
    document.querySelector('#name + .error-message').textContent = 'Por favor, insira seu nome';
    isValid = false;
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    document.querySelector('#email + .error-message').textContent = 'Por favor, insira um e-mail válido';
    isValid = false;
  }

  if (!message) {
    document.querySelector('#message + .error-message').textContent = 'Por favor, insira uma mensagem';
    isValid = false;
  }

  if (isValid) {
    alert('Mensagem enviada com sucesso!');
    document.getElementById('contact-form').reset();
  }
});
