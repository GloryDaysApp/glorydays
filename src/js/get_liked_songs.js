// a function to fetch liked songs
function getLikedSongs () {
    const ACCESS_TOKEN = getCookie('ACCESS_TOKEN');

    const xhr = new XMLHttpRequest();
    const cors = 'https://cors-anywhere.herokuapp.com/';
  
    xhr.open('GET', `${cors}https://api.spotify.com/v1/me/tracks?limit=50`, true);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Authorization', `Bearer ${ACCESS_TOKEN}`);
    xhr.send();

    xhr.responseType = 'json';

    xhr.onload = () => {
        const responseObject = xhr.response;
        let data = cleanSpotifyLikedSongs(responseObject.items);

        const albums = document.getElementsByClassName('albums')[0];
        injectAlbumCovers(data, albums);

        const playlist = document.getElementsByClassName('playlist-large-container')[0];
        console.log('data working? ', data);
        if (playlist) {
            injectSpotifyData(data, playlist, 50, '<h1>Jouw favoriete nummers</h1>', 'song');
        }
    };
}

// Will seperate later - Coen
function injectAlbumCovers (data, place) {
    // Clear results
    if (place) {
        place.innerHTML = '';

        // Insert the first 5 album covers
        for (let i = 0; i < 5; i++) {
            let img = document.createElement('img');
            img.src = data[i].imageSmall;
            img.alt = 'album cover from a song of your liked songs';
            place.appendChild(img);
        }
    }
}


getLikedSongs();