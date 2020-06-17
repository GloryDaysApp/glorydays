// Transform the music player to big and small
const musicPlayer = document.getElementsByClassName('music-player--small')[0];
const songInformation = document.getElementById('song-information');
const back = document.getElementById('back');
const mainContainer = document.getElementsByClassName('container--main');

if (songInformation) {
    songInformation.addEventListener('click', transformMusicPlayerBig);
}

function transformMusicPlayerBig() {
    musicPlayer.classList.add('big');
}

if (back) {
    back.addEventListener('click', transformMusicPlayerSmall);
}

function transformMusicPlayerSmall() {
    musicPlayer.classList.remove('big');
}

function showPlayerSmall(song) {
    // Make player visible
    musicPlayer.classList.add('visible');
    // Remove id for showing only the nav and add id for showing nav + music player
    mainContainer[0].removeAttribute('id');
    mainContainer[0].setAttribute('id', 'navigation-state--all');

    // Clear player and add song in it
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

if (controls) {
    controls.addEventListener('click', togglePausePlay);
}

let playState = false;

function togglePausePlay() {
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

// Toggle visibility of favorite songs
const playlistLarge = document.getElementsByClassName('playlist-large')[0];
const playListSmall = document.getElementById('playlist-small');

if (playListSmall) {
    playListSmall.addEventListener('click', showPlaylist);
}

function showPlaylist() {
    playlistLarge.classList.add('visible');
}

const backOverview = document.getElementById('back-overview');

if (backOverview) {
    backOverview.addEventListener('click', hidePlaylist);
}

function hidePlaylist() {
    playlistLarge.classList.remove('visible');
}


// Add memory reveal / hide
const addMemoryContainer = document.getElementsByClassName('conversational-ui')[0];
document.getElementById('add-memory').addEventListener('click', revealMemoryContainer);

function revealMemoryContainer() {
    musicPlayer.classList.remove('big');
    addMemoryContainer.classList.add('show');
}

// Add memory without music "overslaan"

const addMemoryWithoutMusicButton = document.getElementById('add-memory-without-music');
// const conversationalUI = document.getElementsByClassName('conversational-ui');

if (addMemoryWithoutMusicButton) {
    addMemoryWithoutMusicButton.addEventListener('click', revealMemoryContainer);
}

// function addMemoryWithoutMusic() {
//     console.log('added class show');
//     // addMemoryWithoutMusicButton.classList.add('show');
//     // revealMemoryContainer();
// }