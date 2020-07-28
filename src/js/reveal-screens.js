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
// Toggle visibility of song lists

// Favorite songs
const playlistLargeFirst = document.getElementsByClassName('playlist-large')[0];
const playListSmallFirst = document.getElementsByClassName('playlist')[0];
if (playListSmallFirst) {
    playListSmallFirst.addEventListener('click', showPlaylistFirst);
}
function showPlaylistFirst() {
    playlistLargeFirst.classList.add('visible');
}
const backOverviewFirst = document.getElementsByClassName('back-overview')[0];
if (backOverviewFirst) {
    backOverviewFirst.addEventListener('click', hidePlaylistFirst);
}
function hidePlaylistFirst() {
    playlistLargeFirst.classList.remove('visible');
}

// Time capsule
const playlistLargeSec = document.getElementsByClassName('playlist-large')[1];
const playListSmallSec = document.getElementsByClassName('playlist')[1];
if (playListSmallSec) {
    playListSmallSec.addEventListener('click', showPlaylistSec);
}
function showPlaylistSec() {
    playlistLargeSec.classList.add('visible');
}
const backOverviewSec = document.getElementsByClassName('back-overview')[1];
if (backOverviewSec) {
    backOverviewSec.addEventListener('click', hidePlaylistSec);
}
function hidePlaylistSec() {
    playlistLargeSec.classList.remove('visible');
}

// Add memory reveal / hide
const addMemoryContainer = document.getElementsByClassName('conversational-ui')[0];
const addMemory = document.getElementById('add-memory');
if (addMemory) {
    addMemory.addEventListener('click', revealMemoryContainer);
}
function revealMemoryContainer() {
    appendSongInformation();
    musicPlayer.classList.remove('big');
    addMemoryContainer.classList.add('show');
}
function appendSongInformation() {
    // Store song data
    let songInfo =  document.getElementById('song-information');
    if (songInformation) {
        document.getElementById('song-id').value = songInfo.firstChild.id;
        document.getElementById('song-album-cover').value = songInfo.firstChild.firstChild.src;
        document.getElementById('song-name').value = songInfo.firstChild.lastChild.children[0].textContent;
        document.getElementById('song-artist').value = songInfo.firstChild.lastChild.children[1].textContent; 
    }
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