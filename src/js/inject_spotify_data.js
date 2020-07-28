function injectSpotifyData(data, location, length, title = '', tag) {
    // Clear results
    location.innerHTML = title;

    // Insert results
    for (let i = 0; i < length; i++) {
        // Create an info container element
        const info = document.createElement('div');

        const artist = `<p>${data[i].artists}</p>`;

        info.innerHTML = 
            `<img src="${data[i].imageSmall}" alt="album cover">
             <div class="song-information">
                <p>${data[i].name}</p>
                ${data[i].artists ? artist : ''}
             </div>`;

        // Set id of div to song id and add class 'song' to every div
        info.id = data[i].id;
        info.className = tag;

        // Push divs to given location 
        location.appendChild(info);
    }

    // Add event listener to play song
    const songs = document.getElementsByClassName('song');
    let songsArray = Array.from(songs);

    if (songsArray.length > 0) {
        songsArray.forEach(song => {
            song.addEventListener('click', songCallback);
        });
    }

    const artists = document.getElementsByClassName('artist');
    let artistArray = Array.from(artists);

    if (artistArray.length > 0) {
        artistArray.forEach(artist => {
            artist.addEventListener('click', songCallbackSecond);
        });
    }

    function songCallback(e) {
        playSong(this.id);

        // Clone object and show in player
        const song = this.cloneNode(true);
        showPlayerSmall(song);
    }

    function songCallbackSecond(e) {
        getArtistSongs(this.id);
    }
}