function searchXML(search) {
    const xhr = new XMLHttpRequest();
    const cors = 'https://cors-anywhere.herokuapp.com/';
    xhr.open('GET', `${cors}https://api.spotify.com/v1/search?q=${search}&type=track,artist`, true);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Authorization', 'Bearer ACCESS TOKEN HERE');
    xhr.send();

    xhr.responseType = 'json';

    xhr.onload = () => {
        const responseObject = xhr.response;
        const data = cleanData(responseObject);
        insertSongs(data);
    };
}