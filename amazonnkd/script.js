const audioPlayer = document.getElementById('audioPlayer');
const playButton = document.getElementById('playButton');
const skipButton = document.getElementById('skipButton');
const volumeControl = document.getElementById('volumeControl');

let isPlaying = false;

playButton.addEventListener('click', togglePlay);
skipButton.addEventListener('click', skip);
volumeControl.addEventListener('input', adjustVolume);

function togglePlay() {
  if (isPlaying) {
    pauseMusic();
  } else {
    playMusic();
  }
}

function playMusic() {
  audioPlayer.play();
  isPlaying = true;
  playButton.innerHTML = '<i class="fas fa-pause"></i>';
}

function pauseMusic() {
  audioPlayer.pause();
  isPlaying = false;
  playButton.innerHTML = '<i class="fas fa-play"></i>';
}

function skip() {
  // Add logic to skip to the next track
}

function adjustVolume() {
  audioPlayer.volume = volumeControl.value;
}
