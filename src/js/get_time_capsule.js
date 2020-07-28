// a function to fetch liked songs
function getPlaylists () {
    const ACCESS_TOKEN = getCookie('ACCESS_TOKEN');

    const xhr = new XMLHttpRequest();
    const cors = 'https://cors-anywhere.herokuapp.com/';
  
    xhr.open('GET', `${cors}https://api.spotify.com/v1/me/playlists?limit=50`, true);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Authorization', `Bearer ${ACCESS_TOKEN}`);
    xhr.send();

    xhr.responseType = 'json';

    xhr.onload = () => {
        const responseObject = xhr.response;
        const url = findTimeCapsule(responseObject.items);

        if (url) {
            console.log('url', url);
            getSongs(url.id);
        }
    };
}

function findTimeCapsule(data) {
    let timeCapsule = data.find(playlist => playlist.name === 'Your Time Capsule');
    return timeCapsule;
}

function getSongs(data) {
    const ACCESS_TOKEN = getCookie('ACCESS_TOKEN');

    console.log('huh', data);

    const xhr = new XMLHttpRequest();
    const cors = 'https://cors-anywhere.herokuapp.com/';
  
    xhr.open('GET', `${cors}https://api.spotify.com/v1/playlists/${data}/tracks`, true);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Authorization', `Bearer ${ACCESS_TOKEN}`);
    xhr.send();

    xhr.responseType = 'json';

    xhr.onload = () => {
        const responseObject = xhr.response;
        const finalData = cleanSpotifyLikedSongs(responseObject.items);

        const albums = document.getElementsByClassName('albums')[1];
        injectAlbumCovers(finalData, albums);

        const playlistSec = document.getElementsByClassName('playlist-large-container')[1];
        if (playlistSec) {
            injectSpotifyData(finalData, playlistSec, 50, '<h1>Jouw tijdmachine</h1>', 'song');
        }
    };
}

getPlaylists();

