let constraintObj = {
    // set audio on true to get the audio
    audio: true
};

// Handling older browsers that might implement getUserMedia in some way
if (!navigator.mediaDevices) {
    navigator.mediaDevices = {};
    navigator.mediaDevices.getUserMedia = function (constraintObj) {
        let getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
        if (!getUserMedia) {
            return Promise.reject(new Error('getUserMedia is not implemented in this browser'));
        }
        return new Promise(function (resolve, reject) {
            getUserMedia.call(navigator, constraintObj, resolve, reject);
        });
    };
} else {
    navigator.mediaDevices.enumerateDevices()
        .then(devices => {
            devices.forEach(device => {
                console.log(device.kind.toUpperCase(), device.label);
            });
        })
        .catch(err => {
            console.log(err.name, err.message);
        });
}

// This is how you acces the microphone with the getUserMedia method from the mediaDevices API
navigator.mediaDevices.getUserMedia(constraintObj)
    .then(function (audioStreamObj) {
        // Connect the audio stream to the first audio element
        let audio = document.querySelector('audio');
        if ('srcObject' in audio) {
            audio.srcObject = audioStreamObj;
        } else {
            // A fallback for older versions
            audio.src = window.URL.createObjectURL(audioStreamObj);
        }

        // Variables for saving the audio
        let vidSave = document.getElementById('savedAudio');

        // MediaRecorder is another API to record and listens to audioStreamObj
        // The audioStreamObj is passed in the MediaRecorder object
        let mediaRecorder = new MediaRecorder(audioStreamObj);

        // Store the recorded data
        let chunks = [];

        // Voice recorder button
        const micContainer = document.getElementsByClassName('mic-container')[0];

        micContainer.addEventListener('click', (e) => {
            let elem = e.target;
            elem.classList.toggle('active');
            console.log(elem.classList);
            if (elem.classList == 'circle active') {
                mediaRecorder.start();
                console.log(mediaRecorder.state);
                resetTimer();
                startTimer();
            } else {
                mediaRecorder.stop();
                console.log(mediaRecorder.state);
                stopTimer();
            }
        });

        // When data is available, add it to the chunks array 
        mediaRecorder.ondataavailable = function (ev) {
            chunks.push(ev.data);
        };
        mediaRecorder.onstop = () => {
            // The Blob object represents a blob, which is a file-like object of immutable, raw data
            let blob = new Blob(chunks, {
                'type': 'video/mp4;'
            });
            // Save memory for the next time that you record
            chunks = [];
            let audioURL = window.URL.createObjectURL(blob);
            vidSave.src = audioURL;
            console.log('chunks', chunks);
        };

    }).catch(function (err) {
        alert('The audio stream doesnt work.', err.name, err.message);
    });

// Used this tutorial as a basic set-up: https://www.youtube.com/watch?v=K6L38xk2rkk

// Add a timer
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
let timerTime = 00;
let isRunning = false;
let interval;

// Start the timer
function startTimer() {
    if (isRunning) return;

    isRunning = true;
    interval = setInterval(incrementTimer, 1000);
}

// Stop the timer
function stopTimer() {
    if (!isRunning) return;

    isRunning = false;
    clearInterval(interval);
}

// Set the timer to 0
function resetTimer() {
    stopTimer();

    timerTime = 0;
    minutes.innerText = '00';
    seconds.innerText = '01';
}

// Let the timer count
function incrementTimer() {
    timerTime++;

    const numOfMinutes = Math.floor(timerTime / 60);
    const numOfSeconds = timerTime % 60;

    minutes.innerText = pad(numOfMinutes);
    seconds.innerText = pad(numOfSeconds);
}


function pad(number) {
    if (number < 10) {
        return '0' + number;
    } else {
        return number;
    }
}