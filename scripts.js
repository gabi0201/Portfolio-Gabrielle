document.getElementById('start-button').addEventListener('click', function() {
    document.getElementById('intro-screen').style.display = 'none';
    const portfolioContent = document.getElementById('portfolio-content');
    portfolioContent.style.display = 'block';
    portfolioContent.classList.add('fade-in');
  });
  