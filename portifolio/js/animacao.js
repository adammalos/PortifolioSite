// Adiciona a classe 'glitch' inicialmente
var hero = document.getElementById("hero");
hero.classList.add("glitch");

// Ativa a função a cada x segundos
setInterval(toggleGlitch, 2000);

// Botão Mute Toggle
$(document).on('click', '.toggle-sound', function (e) {
  $(this).toggleClass('sound-mute');
});

// Função para alternar a classe e reproduzir os áudios
function toggleGlitch() {
  var hero = document.getElementById("hero");
  hero.classList.toggle("glitch");

  // Verifica se a classe 'glitch' está presente
  if (hero.classList.contains("glitch")) {
    var glitchSound = document.getElementById("glitchSound");
    var cyberpunkSound = document.getElementById("cyberpunkSound");
    if (document.getElementById("toggleSoundButton").classList.contains("sound-mute")) {
      glitchSound.volume = 0; // Se a classe sound-mute estiver presente, o volume permanece 0
      cyberpunkSound.volume = 0; // Se a classe sound-mute estiver presente, o volume permanece 0
    } else {
      glitchSound.volume = 0.01; // Se a classe sound-mute não estiver presente, o volume é 0.009
      cyberpunkSound.volume = 0.04; // Se a classe sound-mute não estiver presente, o volume é 0.009
    }
    glitchSound.play();
    cyberpunkSound.play();
  }
}
