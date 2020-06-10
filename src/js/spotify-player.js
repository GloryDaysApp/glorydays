function showPlayerSmall (song) {
    // Make player visible
    document.getElementsByClassName('music-player--small')[0].classList.add('visible');

    // Clear player and add song in it
    const songInformation = document.getElementById('song-information');
    songInformation.innerHTML = '';
    songInformation.append(song);

    // Set icon to pause, because song is playing
    let control = controls.children;
    control = control[0];
    control.src = '/pause_icon.svg';
    playState = false;

}

// Toggle pause play on click on controls
const controls = document.getElementsByClassName('controls')[0];
controls.addEventListener('click', togglePausePlay);

let playState = false;

function togglePausePlay () {
    // Get control img element
    let control = controls.children;
    control = control[0];

    // Toggle player
    player.togglePlay();

    // Toggle pause / play image
    const pause = '/pause_icon.svg';
    const play = '/play_icon.svg';

    if (playState === false) {
        control.src = play;
        playState = true;
    } else {
        control.src = pause;
        playState = false;
    }
}