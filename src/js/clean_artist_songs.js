function cleanArtistSongs(data) {
    const cleanedData = data.tracks.map(item => {
        return {
            'name': item.name,
            'artists': item.artists.map(artist => artist.name),
            'id': item.id,
            'imageSmall': item.album.images.length > 0 ? item.album.images[1].url : null,
            'imageLarge': item.album.images.length > 0 ? item.album.images[0].url : null,
        };
    });

    return cleanedData;
}