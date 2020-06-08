window.onSpotifyWebPlaybackSDKReady = () => {
    console.log('playSong', playSong);

    const player = new Spotify.Player({
        name: 'Glory Days Web Player',
        getOAuthToken: callback => {
            callback('BQDbtY6Yyg2qsXajCQ56JtwIoKcyyqkFStYsyPVDYjBkugp0TEhv7JFeGI8QQBnMXM_-MQiBt0wsUYd_eMvgxadpgkXN9nhTkB2_Z0tk1Vo8SEJ50SRYu8nkmiPotQkZhklIzzCZ9rk9NomKxYe54c9dsUphNrCmFdTGm280izKizeHKRaQ');
        },
        volume: 0.1
    });
    console.log('player: ', player);

    let deviceId = null;

    player.on('ready', ({ device_id }) => {
        console.log('ready');
        deviceId = device_id;
    });

    player.on('initialization_error', e => console.error(e));
    player.on('authentication_error', e => console.error(e));
    player.on('account_error', e => console.error(e));
    player.on('playback_error', e => console.error(e));

    player.connect();
};