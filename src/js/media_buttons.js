const addImageButton = document.getElementById('button--add-image'),
    addVoiceRecordingButton = document.getElementById('button--add-voice-recording'),
    addImageOutput = document.getElementById('output--add-image'),
    addVoiceRecordingOutput = document.getElementById('output--add-voice-recoding');

if (addImageButton && addVoiceRecordingButton) {
    addImageButton.addEventListener('click', (event) => {
        event.preventDefault();
        // console.log('image button click');
        addVoiceRecordingOutput.classList.remove('active');
        // addTextOutput.classList.remove('active');
        addImageOutput.classList.toggle('active');
    });

    addVoiceRecordingButton.addEventListener('click', (event) => {
        event.preventDefault();
        // console.log('voice button click');

        addImageOutput.classList.remove('active');
        // addTextOutput.classList.remove('active');
        addVoiceRecordingOutput.classList.toggle('active');
    });
}
