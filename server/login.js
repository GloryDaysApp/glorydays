module.exports = (req, res, next) => {
  const scopes = encodeURIComponent('user-read-private user-read-email user-library-read')
  res.redirect('https://accounts.spotify.com/authorize' + '?response_type=code' + '&client_id=' + process.env.SPOTIFY_CLIENT_ID + (scopes ? '&scope=' + encodeURIComponent(scopes) : '') + '&redirect_uri=' + encodeURIComponent(process.env.SPOTIFY_REDIRECT_URI))
}
