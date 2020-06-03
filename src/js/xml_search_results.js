function searchXML(search) {
    const xhr = new XMLHttpRequest();
    const cors = 'https://cors-anywhere.herokuapp.com/';
    xhr.open('GET', `${cors}https://api.spotify.com/v1/search?q=${search}&type=track,artist`, true);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Authorization', 'Bearer BQA5lN58aMyuPpooVJ8eg88UzXP7bxcwBM-3nmnhynuoozhul84ye4eFyX1TXLKFp0Foj6wqK91tGgWzhpxPO-75Wa0DXHGr9yL20Nq7x6P35RD0Gew_xPWAGb-5rgJaLovRHpAZTfyjR2HONCA2WC0hOKXmkOfjcWx96ccTqA');
    xhr.send();

    xhr.responseType = 'json';

    xhr.onload = () => {
        const responseObject = xhr.response;
        const data = cleanData(responseObject);
        insertSongs(data);
    };
}

function cleanData(data) {
    let cleanedData = {
        artists: null,
        tracks: null
    };

    if (data.artists) {
        const artists = data.artists.items.map(item => {
            return {
                'id': item.id,
                'name': item.name,
                'imageSmall': item.images.length > 0 ? item.images[1].url : null,
                'imageLarge': item.images.length > 0 ? item.images[0].url : null,
                'genres': item.genres
            };
        });
        cleanedData.artists = artists;

    } if (data.tracks) {
        const tracks = data.tracks.items.map(item => {
            if (item.type === 'track') {
                let artists = item.artists.map(artist => {
                    return artist.name;
                });

                return {
                    'id': item.id,
                    'name': item.name,
                    'external_urls': item.external_urls.spotify,
                    'artists': artists,
                    'imageSmall': item.album.images.length > 0 ? item.album.images[1].url : null,
                    'imageLarge': item.album.images.length > 0 ? item.album.images[0].url : null
                };
            }
        });
        cleanedData.tracks = tracks;
    }
    return cleanedData;
}

function insertSongs(data) {
    console.log(data);
    const results = document.getElementById('results');
    data.tracks.forEach(song => {
        results.insertAdjacentHTML(
            'beforeend', `<a src='${song.id}'><li>${song.name}</li></a>`
        );
    });

}

searchXML('Bohemian Rhapsody');

// async function search(searchQuery, token) {
//     const spotifyToken = token;
//     const song = searchQuery;

//     const url = `https://api.spotify.com/v1/search?q=${song}&type=track,artist`;
//     const headers = {
//         method: 'GET',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${spotifyToken}`
//         }
//     };

//     const response = await fetch(url, headers);
//     const data = await response.json();
//     return data;
// }