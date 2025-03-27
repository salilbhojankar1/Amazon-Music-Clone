const volumeButton = document.getElementById('volumeButton');
const volumeIcon = document.getElementById('volumeIcon');
const musicPlayer = document.getElementById('musicPlayer');

let volumeLevel = 1; // 0 for muted, 1 for medium, 2 for high

volumeButton.addEventListener('click', () => {
  volumeLevel = (volumeLevel + 1) % 3;
  updateVolumeIcon();
});

function updateVolumeIcon() {
  switch (volumeLevel) {
    case 0:
      volumeIcon.className = 'fas fa-volume-off';
      musicPlayer.volume = 0; // Mute the player
      break;
    case 1:
      volumeIcon.className = 'fas fa-volume-down';
      musicPlayer.volume = 0.5; // Set medium volume (adjust as needed)
      break;
    case 2:
      volumeIcon.className = 'fas fa-volume-up';
      musicPlayer.volume = 1; // Set maximum volume
      break;
    default:
      break;
  }
}

// const playButton = document.getElementById('playButton');
// const playIcon = document.getElementById('playIcon');
// const musicPlayer = document.getElementById('musicPlayer');

// let isPlaying = false;

// playButton.addEventListener('click', () => {
//   if (isPlaying) {
//     pauseMusic();
//   } else {
//     playMusic();
//   }
// });

// function playMusic() {
//   musicPlayer.play();
//   playIcon.classList.remove('fa-play');
//   playIcon.classList.add('fa-pause');
//   isPlaying = true;
// }

// function pauseMusic() {
//   musicPlayer.pause();
//   playIcon.classList.remove('fa-pause');
//   playIcon.classList.add('fa-play');
//   isPlaying = false;
// }