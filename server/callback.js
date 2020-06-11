const fetch = require('node-fetch');
const queryString = require('query-string');

const { SPOTIFY_REDIRECT_URI, SPOTIFY_CLIENT_SECRET, SPOTIFY_CLIENT_ID } = process.env;

module.exports = async (req, res) => {
    const code = req.query.code;
    const queryObject = {
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: SPOTIFY_REDIRECT_URI
    };

    const fetchOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Basic ${encodeToBase64(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`)}`
        }
    };

    const query = queryString.stringify(queryObject);
    const url = `https://accounts.spotify.com/api/token?${query}`;

    try {
        const spotifyResponse = await fetch(url, fetchOptions);
        const data = await spotifyResponse.json();

        console.log('succesful: ', data);

        // Set age of cookie access_token to 1 hour
        res.cookie('ACCESS_TOKEN', data.access_token, { maxAge: 3600000 });
      
        res.cookie('REFRESH_TOKEN', data.refresh_token);

        res.redirect('/');
    } catch (err) {
        console.log('error verifying: ', err);
        res.send(err);
    }
};

function encodeToBase64(text) {
    return new Buffer.from(text).toString('base64');
}
