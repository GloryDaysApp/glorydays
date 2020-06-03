module.exports = (req, res) => {
<<<<<<< HEAD
    const scopes = encodeURIComponent('user-read-private user-read-email user-library-read streaming');
=======
    const scopes = encodeURIComponent('user-read-private user-read-email user-library-read');
>>>>>>> e0b658a2dde2b38be54511fd60556c66985c5793
    res.redirect('https://accounts.spotify.com/authorize' + '?response_type=code' + '&client_id=' + process.env.SPOTIFY_CLIENT_ID + (scopes ? '&scope=' + encodeURIComponent(scopes) : '') + '&redirect_uri=' + encodeURIComponent(process.env.SPOTIFY_REDIRECT_URI));
};
