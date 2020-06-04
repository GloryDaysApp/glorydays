// function playSong(song) {
//     console.log(song);
//     window.onSpotifyWebPlaybackSDKReady = () => {
//         // Define the Spotify Connect device, getOAuthToken has an actual token 
//         // hardcoded for the sake of simplicity
//         var player = new Spotify.Player({
//             name: 'A Spotify Web SDK Player',
//             getOAuthToken: callback => {
//                 callback('ACCESS_TOKEN NEEDS TO BE PLACED HERE');
//             },
//             volume: 0.1
//         });

//         // Called when connected to the player created beforehand successfully
//         player.addListener('ready', ({ device_id }) => {
//             console.log('Ready with Device ID', device_id);

//             const play = ({
//                 spotify_uri,
//                 playerInstance: {
//                     _options: {
//                         getOAuthToken,
//                         id
//                     }
//                 }
//             }) => {
//                 getOAuthToken(token => {
//                     fetch(`https://api.spotify.com/v1/me/player/play?device_id=${id}`, {
//                         method: 'PUT',
//                         body: JSON.stringify({ uris: [spotify_uri] }),
//                         headers: {
//                             'Content-Type': 'application/json',
//                             'Authorization': `Bearer ${token}`
//                         },
//                     });
//                 });
//             };

//             play({
//                 playerInstance: player,
//                 spotify_uri: 'spotify:track:7xGfFoTpQ2E7fRF5lN10tr',
//             });
//         });

//         // Connect to the player created beforehand, this is equivalent to 
//         // creating a new device which will be visible for Spotify Connect
//         player.connect();
//     };
// }