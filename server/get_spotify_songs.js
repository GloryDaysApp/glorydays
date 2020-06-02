const fetch = require('node-fetch');

const getRefreshToken = require('./get_refresh_token.js');

module.exports = (req, res) => {
    if (req.cookies.ACCESS_TOKEN) {
        search(req.body.song, req.cookies.ACCESS_TOKEN).then(data => {
            const cleanedData = cleanData(data);
            console.log(cleanedData)
            res.send(data);
        });
    } else {
        getRefreshToken(req, res).then(ACCESS_TOKEN => {
            // Run search with query
            search(req.body.song, req.cookies.ACCESS_TOKEN).then(data => {
                const cleanedData = cleanData(data);
                console.log(cleanedData)
                res.send(data);
            });
        });
    }
    console.log(req.cookies.ACCESS_TOKEN);
};

async function search(searchQuery, token) {
    const spotifyToken = token;
    const song = searchQuery;

    const url = `https://api.spotify.com/v1/search?q=${song}&type=track,artist`;
    const headers = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${spotifyToken}`
        }
    };

    const response = await fetch(url, headers);
    const data = await response.json();
    return data;
}

function cleanData (data) {
    let cleanedData = {
        artists: null,
        tracks: null
    }

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
                    })
                
                    return {
                        'id': item.id,
                        'name': item.name,
                        'external_urls': item.external_urls.spotify,
                        'artists': artists,
                        'imageSmall': item.album.images.length > 0 ? item.album.images[1].url : null,
                        'imageLarge': item.album.images.length > 0 ? item.album.images[0].url : null
                    };
                }
            })
        cleanedData.tracks = tracks;
    }
    return cleanedData
}
