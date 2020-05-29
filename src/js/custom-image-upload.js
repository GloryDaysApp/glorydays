const realFileButton = document.getElementById('real-file');
const customButton = document.getElementById('custom-button');
const customText = document.getElementById('custom-text');
const outputImage = document.getElementById('output-image');

// trigger the file upload button when clicking on the custom button
customButton.addEventListener('click', () => {
    realFileButton.click();
});

// get chosen file and show it
realFileButton.addEventListener('change', (event) => {
    if (realFileButton.value) {
        // show file name
        customText.textContent = realFileButton.value.replace(/^.*[\\\/]/, '');

        // show chosen image
        outputImage.src = URL.createObjectURL(event.target.files[0]);
        outputImage.onload = () => {
            URL.revokeObjectURL(outputImage.src); // free memory
        };
    } else {
        // if no file is chosen, reset everything to default values
        customText.textContent = 'Nog geen afbeelding gekozen.';
        outputImage.src = '';
    }
});
