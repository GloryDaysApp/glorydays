// const server = require('../server.js');
// const socket = require('socket.io');

// Socket setup
// const ioInstance = socket(server);

// ioInstance.on('connection', function () {
//     console.log('Halllooooooo coen');

// // Get song
// socket.on('getSong', function (id) {
//     socket.emit('getTokens', id);
//     socket.broadcast.emit('getTokens', id);
// });

// // Play song
// socket.on('playSong', function (myObject) {
//     // Fetch for streaming spotify to play a track
//     fetch('https://api.spotify.com/v1/me/player/play', {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json',
//             Authorization: `Bearer ${myObject.accessToken}`,
//         },
//         body: JSON.stringify({
//             uris: [`spotify:track:${myObject.id}`],
//             title: [`spotify:track:${myObject.name}`],
//         }),
//     }).then(async (response) => {
//         tracksData = await response.json();
//         if (response.status == 403) {
//             socket.emit(
//                 'server message',
//                 'Server: You dont have a spotify premium account.You can chat with people but you cant listen to the party music.'
//             );
//         }
//         if (response.status == 404) {
//             socket.emit(
//                 'server message',
//                 'Server: We cant find an active device please open your spotify application on your own device and start a random track to active the session.'
//             );
//         }
//     });
// });
// });


// module.exports.listen = function (server) {
//     io = socket.listen(server);

//     io.on('connection', function () {
//         console.log('.....');
//     });

//     return io;
// };