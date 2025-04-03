document.getElementById('start-button').addEventListener('click', function() {
    document.getElementById('intro-screen').style.display = 'none';
    const portfolioContent = document.getElementById('portfolio-content');
    portfolioContent.style.display = 'block';
    portfolioContent.classList.add('fade-in');
  });
  

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
    document.querySelector('#message + .error-message').textContent = 'Por favor, insira sua mensagem';
    isValid = false;
  }
  
  if (isValid) {
    alert(`Obrigada, ${name}! Sua mensagem foi enviada com sucesso.`);
    this.reset();
  }
});


