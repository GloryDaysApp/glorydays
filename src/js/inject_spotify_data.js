function injectSpotifyData(data) {
    console.log('cleaned data: ', data);
    const results = document.getElementById('results');

    // Clear results
    results.innerHTML = '';

    // Insert results
    data.tracks.forEach(song => {
        let li = document.createElement('li');
        li.innerHTML = song.name;
        li.id = song.id;
        li.className = 'song';
        results.appendChild(li);
    });

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
    }
}