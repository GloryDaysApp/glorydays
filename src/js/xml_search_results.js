// Event listener to search for Spotify songs
const songSubmit = document.getElementById('submit_song');
const songInput = document.getElementById('input_song');

if (songSubmit && songInput) {
    songSubmit.addEventListener('click', () => {
        searchXML(songInput.value);
    });
}

// Search for Spotify songs
function searchXML(song) {
    const ACCESS_TOKEN = getCookie('ACCESS_TOKEN');

    console.log('song', song);
    const xhr = new XMLHttpRequest();
    const cors = 'https://cors-anywhere.herokuapp.com/';
    xhr.open('GET', `${cors}https://api.spotify.com/v1/search?q=${song}&type=track,artist`, true);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Authorization', `Bearer ${ACCESS_TOKEN}`);
    xhr.send();

    xhr.responseType = 'json';

    xhr.onload = () => {
        const responseObject = xhr.response;
        const data = cleanData(responseObject);
        injectSpotifyData(data);
    };
}