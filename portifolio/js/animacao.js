// Adiciona a classe 'glitch' inicialmente
var hero = document.getElementById("hero");
hero.classList.add("glitch");

// Ativa a função a cada x segundos
setInterval(toggleGlitch, 6000);

// Botão Mute Toggle
$(document).on('click', '.toggle-sound', function (e) {
  $(this).toggleClass('sound-mute');
  toggleAudio(); // Chama a função para pausar ou reproduzir os áudios imediatamente
});

// Função para alternar a classe e reproduzir os áudios
function toggleGlitch() {
  var hero = document.getElementById("hero");
  hero.classList.toggle("glitch");

  // Verifica se a classe 'glitch' está presente
  if (hero.classList.contains("glitch")) {
    var glitchSound = document.getElementById("glitchSound");
    var cyberpunkSound = document.getElementById("cyberpunkSound");
    toggleAudio(); // Chama a função para pausar ou reproduzir os áudios imediatamente
  }
}

// Função para pausar ou reproduzir os áudios com base na classe 'sound-mute'
function toggleAudio() {
  var glitchSound = document.getElementById("glitchSound");
  var cyberpunkSound = document.getElementById("cyberpunkSound");
  
  // Verifica se a classe 'sound-mute' está presente
  if (document.getElementById("toggleSoundButton").classList.contains("sound-mute")) {
    glitchSound.pause(); // Pausa o áudio
    cyberpunkSound.pause(); // Pausa o áudio
  } else {
    glitchSound.play(); // Reproduz o áudio
    cyberpunkSound.play(); // Reproduz o áudio
    glitchSound.volume = 0.03;
      cyberpunkSound.volume = 0.04; 
  }
}
