function cleanSpotifyLikedSongs (data) {
    const cleanedData = data.map(item => {
        const track = item.track;
    
        return {
            'name': track.name,
            'artists': track.artists.map(artist => artist.name),
            'id': track.id,
            'imageSmall': track.album.images.length > 0 ? track.album.images[1].url : null,
            'imageLarge': track.album.images.length > 0 ? track.album.images[0].url : null,
        };
    });

    return cleanedData;
}
