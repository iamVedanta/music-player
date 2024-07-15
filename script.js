const audio = document.getElementById('audio');
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const stopButton = document.getElementById('stop');
const volumeControl = document.getElementById('volume');
const progressControl = document.getElementById('progress');

// Play button event
playButton.addEventListener('click', () => {
    audio.play();
});

// Pause button event
pauseButton.addEventListener('click', () => {
    audio.pause();
});

// Stop button event
stopButton.addEventListener('click', () => {
    audio.pause();
    audio.currentTime = 0; 
});

// Volume control event
volumeControl.addEventListener('input', () => {
    audio.volume = volumeControl.value;
});

// Update progress bar as the audio plays
audio.addEventListener('timeupdate', () => {
    progressControl.value = (audio.currentTime / audio.duration) * 100 || 0;
});

// Seek functionality
progressControl.addEventListener('input', () => {
    audio.currentTime = (progressControl.value / 100) * audio.duration;
});
