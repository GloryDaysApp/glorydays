let player = null;
let deviceId = null;

window.onSpotifyWebPlaybackSDKReady = () => {
    const ACCESS_TOKEN = getCookie('ACCESS_TOKEN');
    console.log('access_token: ', ACCESS_TOKEN);
    console.log('joe', document.cookie);

    player = new Spotify.Player({
        name: 'Glory Days Web Player',
        getOAuthToken: callback => {
            callback(ACCESS_TOKEN);
        },
        volume: 0.4
    });

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