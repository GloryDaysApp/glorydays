const fetch = require('node-fetch')

const getRefreshToken = require('./get_refresh_token.js');

module.exports = (req, res) => {
	if (req.cookies.ACCESS_TOKEN) {
		search(req.body.song, req.cookies.ACCESS_TOKEN)
	} else {
		getRefreshToken(req, res).then(ACCESS_TOKEN => {
			// Run search with query
			search(req.body.song, ACCESS_TOKEN)
		})
	}
}

async function search (searchQuery, token) {
	const spotifyToken = token
	const song = searchQuery

	const url = `https://api.spotify.com/v1/search?q=${song}&type=track,artist`
	const options = {
		method: 'GET',
		headers: {
		'Authorization': `Bearer ${spotifyToken}`
		}
	}

	const response = await fetch(url, options)
	const data = await response.json()
	console.log(data)
	return data
}