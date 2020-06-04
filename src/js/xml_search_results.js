function searchXML(search) {
    const xhr = new XMLHttpRequest();
    const cors = 'https://cors-anywhere.herokuapp.com/';
    xhr.open('GET', `${cors}https://api.spotify.com/v1/search?q=${search}&type=track,artist`, true);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Authorization', 'Bearer BQBInh0GSeNwuI6Q_kf4y81DWB-wUCq7q0Boo4_IAG84Jbn8xRFTpED7sKbIhsFchI0RiOD-zKw3ee3EFycdz2FYpXTeJiYkhe63Zb-Q5SGfFqqIj-Y01m3Qdhmpak54hWt9bHnF7zC2AXC1v_RKh1JYld2mOmL4eXgF3HsxXv3JUg');
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
            'beforeend', `<li id='${song.id}' class='song'>${song.name}</li>`
        );
    });

    const songids = document.getElementsByClassName('song');
    let myArray = Array.from(songids);
    console.log('songids ', myArray);
    if (myArray.length > 0) {
        myArray.forEach(song => {
            song.addEventListener('click', test);
        });
    }
}

function test(e) {
    playSong(this.id);
}

function playSong(song) {
    // console.log(song);
    window.onSpotifyWebPlaybackSDKReady = () => {
        // Define the Spotify Connect device, getOAuthToken has an actual token 
        // hardcoded for the sake of simplicity
        var player = new Spotify.Player({
            name: 'A Spotify Web SDK Player',
            getOAuthToken: callback => {
                callback('BQBInh0GSeNwuI6Q_kf4y81DWB-wUCq7q0Boo4_IAG84Jbn8xRFTpED7sKbIhsFchI0RiOD-zKw3ee3EFycdz2FYpXTeJiYkhe63Zb-Q5SGfFqqIj-Y01m3Qdhmpak54hWt9bHnF7zC2AXC1v_RKh1JYld2mOmL4eXgF3HsxXv3JUg');
            },
            volume: 0.1
        });

        // Called when connected to the player created beforehand successfully
        player.addListener('ready', ({ device_id }) => {
            console.log('Ready with Device ID', device_id);

            const play = ({
                spotify_uri,
                playerInstance: {
                    _options: {
                        getOAuthToken,
                        id
                    }
                }
            }) => {
                getOAuthToken(token => {
                    fetch(`https://api.spotify.com/v1/me/player/play?device_id=${id}`, {
                        method: 'PUT',
                        body: JSON.stringify({ uris: [spotify_uri] }),
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`
                        },
                    });
                });
            };

            play({
                playerInstance: player,
                spotify_uri: `spotify:track:${song}`,
            });
        });

        // Connect to the player created beforehand, this is equivalent to 
        // creating a new device which will be visible for Spotify Connect
        player.connect();
    };
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

