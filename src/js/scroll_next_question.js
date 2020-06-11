const inputCheckbox = document.querySelector('input[type="checkbox"]');
const checkboxes = document.getElementById('checkboxes');
const currentFieldset = document.getElementsByClassName('active-fieldset');
const currentDot = document.getElementsByClassName('active-navigation-dot');

checkboxes.addEventListener('change', (e) => {
    const checkbox = event.target;
    const checked = checkbox.checked;

    if (checked) {
        console.log('checked!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
        setTimeout(() => {
            console.log('1 sec later');
            console.log(currentFieldset);

            console.log(currentFieldset[0].nextElementSibling);

            currentFieldset[0].nextElementSibling.classList.remove('hidden-fieldset');
            currentFieldset[0].nextElementSibling.classList.add('active-fieldset');

            currentFieldset[0].classList.add('hidden-fieldset');
            currentFieldset[0].classList.remove('active-fieldset');

            currentDot[0].nextElementSibling.classList.add('active-navigation-dot');

            currentDot[0].classList.remove('active-navigation-dot');

        }, 1000);
    }
});
