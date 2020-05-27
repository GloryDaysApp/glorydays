const fetch = require('node-fetch')

module.exports = (req, res) => {
  search(req.body.song, req.cookies.ACCESS_TOKEN)
}

async function search (searchQuery, token) {
  const spotifyToken = token
  const song = searchQuery

  console.log(song)

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
