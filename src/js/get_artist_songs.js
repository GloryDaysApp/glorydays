function getArtistSongs(artist) {
    const ACCESS_TOKEN = getCookie('ACCESS_TOKEN');

    const xhr = new XMLHttpRequest();
    const cors = 'https://cors-anywhere.herokuapp.com/';
  
    xhr.open('GET', `${cors}https://api.spotify.com/v1/artists/${artist}/top-tracks?country=NL`, true);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Authorization', `Bearer ${ACCESS_TOKEN}`);
    xhr.send();

    xhr.responseType = 'json';

    xhr.onload = () => {
        const responseObject = xhr.response;
        const data = cleanArtistSongs(responseObject);
        console.log('data joe: ', data);

        // Inject the data
        const playlist = document.getElementById('artist-songs');
        if (playlist) {
            injectSpotifyData(data, playlist, 10, '<h1>Top nummers van deze artiest</h1>', 'song');
        }
    };
}
