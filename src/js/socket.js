const socket = io();
socket.emit('connect', 1);

// Server message
socket.on('server message', function (msg) {
    const messages = document.getElementById('messages');
    messages.insertAdjacentHTML(
        'beforeend',
        `<li class="server-message">${msg}</li>`
    );
});

// Play Song
const btn = document.getElementById('StartGame');

btn.addEventListener('click', playSong);

function playSong(event) {
    const songId = event.target.dataset.id;
    console.log(songId);
    console.log(songId);
    socket.emit('getSong', songId);
}

// Get Tokens
socket.on('getTokens', function (id) {
    const accessToken = document.cookie
        .split(';')
        .find((item) => {
            return item.includes('accessToken');
        })
        .split('=')[1]
        .trim();
    socket.emit('playSong', {
        id,
        accessToken,
        name,
    });
});