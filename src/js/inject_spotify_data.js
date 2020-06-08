function insertSongs(data) {
    console.log('cleaned data: ', data);
    const results = document.getElementById('results');
    data.tracks.forEach(song => {
        results.insertAdjacentHTML(
            'beforeend', `<a src='${song.id}'><li>${song.name}</li></a>`
        );
    });
}