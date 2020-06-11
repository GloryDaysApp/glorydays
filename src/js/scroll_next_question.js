// Input checkbox
const inputCheckbox = document.querySelector('input[type="checkbox"]');
const checkboxes = document.getElementById('checkboxes');

// Input text
const inputText = document.querySelectorAll('input[type="text"]');
const textFields = document.querySelectorAll('.input-field');

// Current fieldset
const currentFieldset = document.getElementsByClassName('active-fieldset');
const currentDot = document.getElementsByClassName('active-navigation-dot');

if (checkboxes) {
    checkboxes.addEventListener('change', checkboxChecked);
}

// Function to check if checkbox is checked, and go to the next question
function checkboxChecked() {
    const checkbox = event.target;
    const checked = checkbox.checked;

    if (checked) {
        setTimeout(() => {
            changeActiveState();
        }, 1000);
    }
}

if (textFields) {
    for (let i = 0; i < textFields.length; i++) {
        textFields[i].addEventListener('change', nextQuestion);
    }
}

// Function to check if input text has a value, and go to the next question
function nextQuestion(e) {
    const target = e.target || e.srcElement;
    const targetValue = target.value;

    if (targetValue != '') {
        setTimeout(() => {

            changeActiveState();

            console.log('heeeee marjolein hoe gaat die met jou?');
        }, 1000);
    }
}

function changeActiveState() {
    // Next fieldset
    currentFieldset[0].nextElementSibling.classList.remove('hidden-fieldset');
    currentFieldset[0].nextElementSibling.classList.add('active-fieldset');

    // Current fieldset
    currentFieldset[0].classList.add('hidden-fieldset');
    currentFieldset[0].classList.remove('active-fieldset');

    // Navigation dot sidebar
    currentDot[0].nextElementSibling.classList.add('active-navigation-dot');
    currentDot[0].classList.remove('active-navigation-dot');
}

