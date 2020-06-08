// function cleanData (data) {
//     let cleanedData = {
//         artists: null,
//         tracks: null
//     };

//     if (data.artists) {
//         const artists = data.artists.items.map(item => {
//             return {
//                 'id': item.id,
//                 'name': item.name,
//                 'imageSmall': item.images.length > 0 ? item.images[1].url : null,
//                 'imageLarge': item.images.length > 0 ? item.images[0].url : null,
//                 'genres': item.genres
//             };
//         });
//         cleanedData.artists = artists;

//     } if (data.tracks) {
//         const tracks = data.tracks.items.map(item => {
//             if (item.type === 'track') {
//                 let artists = item.artists.map(artist => {
//                     return artist.name;
//                 });
            
//                 return {
//                     'id': item.id,
//                     'name': item.name,
//                     'external_urls': item.external_urls.spotify,
//                     'artists': artists,
//                     'imageSmall': item.album.images.length > 0 ? item.album.images[1].url : null,
//                     'imageLarge': item.album.images.length > 0 ? item.album.images[0].url : null
//                 };
//             }
//         });
//         cleanedData.tracks = tracks;
//     }
//     return cleanedData;
// }