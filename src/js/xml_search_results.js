// Event listener to search for Spotify songs
const songSubmit = document.getElementById('submit_song');
const songInput = document.getElementById('input_song');

if (songSubmit && songInput) {
    songSubmit.addEventListener('click', () => {
        searchXML(songInput.value);
    });

    // If user hits enter inside input search field
    songInput.addEventListener('keyup', event => {
        event.preventDefault();
        if (event.keyCode === 13) {
            searchXML(songInput.value);
        }
    });
}



// Search for Spotify songs
function searchXML(song) {
    const ACCESS_TOKEN = getCookie('ACCESS_TOKEN');

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

        console.log('data joe: ', data);

        const resultsSongs = document.getElementsByClassName('results')[0];
        injectSpotifyData(data.tracks, resultsSongs, 2, '<h2>Gevonden nummers</h2>', 'song');

        const resultsArtists = document.getElementsByClassName('results')[1];
        injectSpotifyData(data.artists, resultsArtists, 2, '<h2>Gevonden artiesten</h2>', 'artist');

        // Add eventlistener to reveal and hide screens for artist songs
        //  Artist songs
        const artist = document.getElementsByClassName('artist');
        const artistSongs = document.getElementsByClassName('artist-songs')[0];
        const artistArray = Array.from(artist);

        console.log('artists: ', artistArray);

        artistArray.forEach(item => {
            item.addEventListener('click', showArtistSong);
        });

        function showArtistSong() {
            console.log('running');
            artistSongs.classList.add('visible');
        }

        document.getElementById('back-overview-sec').addEventListener('click', () => {
            artistSongs.classList.remove('visible');
        });
        
        // Increase page size to fit
        document.getElementsByClassName('container--main')[0].style.height = '120vh';
    };
}