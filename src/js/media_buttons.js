const addImageButton = document.getElementById('button--add-image'),
    addVoiceRecordingButton = document.getElementById('button--add-voice-recording'),
    addTextButton = document.getElementById('button--add-text'),
    addImageOutput = document.getElementById('output--add-image'),
    addVoiceRecordingOutput = document.getElementById('output--add-voice-recoding'),
    addTextOutput = document.getElementById('output--add-text');

if (addImageButton && addVoiceRecordingButton && addTextButton) {
    addImageButton.addEventListener('click', (event) => {
        event.preventDefault();
        console.log('image button click');

        addVoiceRecordingOutput.classList.remove('active');
        addTextOutput.classList.remove('active');
        addImageOutput.classList.toggle('active');
    });

    addVoiceRecordingButton.addEventListener('click', (event) => {
        event.preventDefault();
        console.log('voice button click');

        addImageOutput.classList.remove('active');
        addTextOutput.classList.remove('active');
        addVoiceRecordingOutput.classList.toggle('active');
    });

    addTextButton.addEventListener('click', (event) => {
        event.preventDefault();
        console.log('text button click');

        addImageOutput.classList.remove('active');
        addVoiceRecordingOutput.classList.remove('active');
        addTextOutput.classList.toggle('active');
    });
}
