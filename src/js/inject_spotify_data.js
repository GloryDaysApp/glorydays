function injectSpotifyData(data, location, length, title = '') {
    // Clear results
    location.innerHTML = title;

    console.log(data);

    // Insert results
    for (let i = 0; i < length; i++) {
        // Create an info container element
        const info = document.createElement('div');

        info.innerHTML = 
            `<img src="${data.tracks[i].imageSmall}" alt="album cover">
             <div class="song-information">
                <p>${data.tracks[i].name}</p>
                <p>${data.tracks[i].artists}</p>
             </div>`;

        // Set id of div to song id and add class 'song' to every div
        info.id = data.tracks[i].id;
        info.className = 'song';

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

    function songCallback(e) {
        playSong(this.id);

        // Clone object and show in player
        const song = this.cloneNode(true);
        console.log(song);
        showPlayerSmall(song);
    }
}