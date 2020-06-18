function playSong(song, device_id) {
    console.log('song: ', song);

    // Called when connected to the player created beforehand successfully

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
}


const songClick = document.getElementsByClassName('song-click')[0];
console.log('hi', songClick);


if (songClick) {
    console.log('hoi', songClick);
    songClick.addEventListener('click', playing);
}

function playing(e) {
    document.getElementById('play-btn').src = '/pause_icon_blue.svg';
    playSong(this.id);
    console.log('joe',document.getElementById('play-btn'));
}
