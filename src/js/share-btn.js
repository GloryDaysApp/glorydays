const shareBtn = document.getElementById('share-btn');
// const shareModal = document.querySelector('.share');
let memory = 'hier komt de herinnering';
shareBtn.addEventListener('click', function () {
    if (navigator.share) {
        navigator.share({
            // url: url,
            text: memory
        }).then(function () {
            console.log('Thanks for sharing!');
        }).catch(console.error);
    } else {
        // overlay.classList.add('show-share');
        // shareModal.classList.add('show-share');
        window.open('mailto:?subject=Een herinnering!&body=Dit is de herinnering: ' + memory);
    }
});


// overlay.addEventListener('click', function () {
//     overlay.classList.remove('show-share');
//     shareModal.classList.remove('show-share');
// });