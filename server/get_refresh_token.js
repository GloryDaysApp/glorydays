const fetch = require('node-fetch');
const queryString = require('query-string');

const { SPOTIFY_CLIENT_SECRET, SPOTIFY_CLIENT_ID } = process.env;

module.exports = async (req, res) => {
    const refreshToken = req.cookies.REFRESH_TOKEN;

    const query = queryString.stringify({
        grant_type: 'refresh_token',
<<<<<<< HEAD
        refresh_token: refreshToken,
    });
=======
        refresh_token: refreshToken
    }); 
>>>>>>> e0b658a2dde2b38be54511fd60556c66985c5793
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
<<<<<<< HEAD
            Authorization: `Basic ${encodeToBase64(
                `${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`
            )}`,
        },
=======
            'Authorization': `Basic ${encodeToBase64(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`)}`
        }
>>>>>>> e0b658a2dde2b38be54511fd60556c66985c5793
    };
    const url = `https://accounts.spotify.com/api/token?${query}`;

    try {
        const response = await fetch(url, options);
        const data = await response.json();

<<<<<<< HEAD
        // Store acces_token as cookie, with an expiring date of 1 hour
        res.cookie('ACCESS_TOKEN', data.access_token, {
            maxAge: 3600000,
            httpOnly: true,
        });

        // return access token
        return data.access_token;
=======
        return data;
>>>>>>> e0b658a2dde2b38be54511fd60556c66985c5793
    } catch (err) {
        console.log('error getting refresh token: ', err);
        res.send(err);
    }
};

<<<<<<< HEAD
function encodeToBase64(text) {
=======
function encodeToBase64 (text) {
>>>>>>> e0b658a2dde2b38be54511fd60556c66985c5793
    return new Buffer.from(text).toString('base64');
}
