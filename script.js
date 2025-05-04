const video = document.getElementById('background-video');
const botaoAudio = document.getElementById('ativar-audio');
const volumeSlider = document.getElementById('controle-volume');

// Inicializa o volume e estado
video.volume = 1;
video.muted = true;

function atualizarIconeVolume() {
  if (video.muted || video.volume === 0) {
    botaoAudio.textContent = '🔇';
  } else if (video.volume < 0.3) {
    botaoAudio.textContent = '🔈';
  } else if (video.volume < 0.7) {
    botaoAudio.textContent = '🔉';
  } else {
    botaoAudio.textContent = '🔊';
  }
}

botaoAudio.addEventListener('click', () => {
  video.muted = !video.muted;
  video.play();
  atualizarIconeVolume();
});

volumeSlider.addEventListener('input', () => {
  video.volume = volumeSlider.value;
  video.muted = false;
  atualizarIconeVolume();
});

// Atualiza o ícone ao carregar
atualizarIconeVolume();