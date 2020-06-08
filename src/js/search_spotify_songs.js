async function search(searchQuery, token) {
    const spotifyToken = token;
    const song = searchQuery;
    const url = `https://api.spotify.com/v1/search?q=${song}&type=track,artist`;
    const headers = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${spotifyToken}`
        }
    };
    const response = await fetch(url, headers);
    const data = await response.json();
    return data;
}