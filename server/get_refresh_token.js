const fetch = require('node-fetch');
const queryString = require('query-string');

const { SPOTIFY_CLIENT_SECRET, SPOTIFY_CLIENT_ID } = process.env;

module.exports = async (req, res) => {
    const refreshToken = req.cookies.REFRESH_TOKEN;

    const query = queryString.stringify({
        grant_type: 'refresh_token',
        refresh_token: refreshToken,
    });
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: `Basic ${encodeToBase64(
                `${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`
            )}`,
        },
    };
    const url = `https://accounts.spotify.com/api/token?${query}`;

    try {
        const response = await fetch(url, options);
        const data = await response.json();

        // Store acces_token as cookie, with an expiring date of 1 hour
        res.cookie('ACCESS_TOKEN', data.access_token, {
            maxAge: 3600000,
            httpOnly: true,
        });

        // return access token
        return data.access_token;
    } catch (err) {
        console.log('error getting refresh token: ', err);
        res.send(err);
    }
};

function encodeToBase64(text) {
    return new Buffer.from(text).toString('base64');
}
