window.addEventListener('scroll', function() {
    var elemento = document.getElementById('hero');
    var rect = elemento.getBoundingClientRect();
    // Verifica se o elemento está visível na tela
    if (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    ) {
      // Adiciona a classe "glitch" quando o elemento está visível
      elemento.classList.add('glitch');
    } else {
      // Remove a classe "glitch" quando o elemento não está visível
      elemento.classList.remove('glitch');
    }
  });