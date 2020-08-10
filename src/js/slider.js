const sliderHeart = document.getElementById('range-heart');
const outputSliderHeart = document.getElementById('value-heart');
const heart = document.getElementById('heart-path');
let valueDescrHeart = document.getElementById('value-descr-heart');

if (sliderHeart) {
    // Display the default slider value
    outputSliderHeart.innerHTML = sliderHeart.value + ' | 5';
    sliderHeart.oninput = function () {
        outputSliderHeart.innerHTML = this.value + ' | 5';
        let value = this.value;
        changeHeartColor(value);
    };

    // Change slider on load
    outputSliderHeart.innerHTML = sliderHeart.value + ' | 5';
    let value = sliderHeart.value;
    changeHeartColor(value);
}

const sliderLightning = document.getElementById('range-lightning');
const outputSliderLightning = document.getElementById('value-lightning');
const lightning = document.getElementById('lightning-path');
let valueDescrLightning = document.getElementById('value-descr-lightning');

if (sliderLightning) {
    // Display the default slider value
    outputSliderLightning.innerHTML = sliderLightning.value + ' | 5';
    sliderLightning.oninput = function () {
        outputSliderLightning.innerHTML = this.value + ' | 5';
        let value = this.value;
        changeLightningColor(value);
    };

    // Change slider on load
    outputSliderLightning.innerHTML = sliderLightning.value + ' | 5';
    let value = sliderLightning.value;
    console.log('value:', sliderLightning);
    changeLightningColor(value);
}

// Change the fill color of the heart icon based on the slider value
function changeHeartColor(value) {
    if (value == 1) {
        removeHeartClasses();
        heart.classList.add('heart--glory-green');
        valueDescrHeart.innerHTML = 'verdrietig';
    } else if (value == 2) {
        removeHeartClasses();
        heart.classList.add('heart--glory-blue');
        valueDescrHeart.innerHTML = 'somber';
    } else if (value == 3) {
        removeHeartClasses();
        heart.classList.add('heart--glory-grey');
        valueDescrHeart.innerHTML = 'normaal';
    } else if (value == 4) {
        removeHeartClasses();
        heart.classList.add('heart--glory-salmon');
        valueDescrHeart.innerHTML = 'blij';
    } else if (value == 5) {
        removeHeartClasses();
        heart.classList.add('heart--glory-red');
        valueDescrHeart.innerHTML = 'gelukkig';
    }
}

function removeHeartClasses() {
    if (heart.classList.contains('heart--glory-green')) {
        heart.classList.remove('heart--glory-green');
    } else if (heart.classList.contains('heart--glory-blue')) {
        heart.classList.remove('heart--glory-blue');
    } else if (heart.classList.contains('heart--glory-grey')) {
        heart.classList.remove('heart--glory-grey');
    } else if (heart.classList.contains('heart--glory-salmon')) {
        heart.classList.remove('heart--glory-salmon');
    } else if (heart.classList.contains('heart--glory-red')) {
        heart.classList.remove('heart--glory-red');
    }
}

// Change the fill color of the lightning icon based on the slider value
function changeLightningColor(value) {
    if (value == 1) {
        removeLightningClasses();
        lightning.classList.add('lightning--glory-green');
        valueDescrLightning.innerHTML = 'slaperig';
    } else if (value == 2) {
        removeLightningClasses();
        lightning.classList.add('lightning--glory-blue');
        valueDescrLightning.innerHTML = 'moe';
    } else if (value == 3) {
        removeLightningClasses();
        lightning.classList.add('lightning--glory-grey');
        valueDescrLightning.innerHTML = 'normaal';
    } else if (value == 4) {
        removeLightningClasses();
        lightning.classList.add('lightning--glory-salmon');
        valueDescrLightning.innerHTML = 'actief';
    } else if (value == 5) {
        removeLightningClasses();
        lightning.classList.add('lightning--glory-red');
        valueDescrLightning.innerHTML = 'energievol';
    }
}

function removeLightningClasses() {
    if (lightning.classList.contains('lightning--glory-green')) {
        lightning.classList.remove('lightning--glory-green');
    } else if (lightning.classList.contains('lightning--glory-blue')) {
        lightning.classList.remove('lightning--glory-blue');
    } else if (lightning.classList.contains('lightning--glory-grey')) {
        lightning.classList.remove('lightning--glory-grey');
    } else if (lightning.classList.contains('lightning--glory-salmon')) {
        lightning.classList.remove('lightning--glory-salmon');
    } else if (lightning.classList.contains('lightning--glory-red')) {
        lightning.classList.remove('lightning--glory-red');
    }
}