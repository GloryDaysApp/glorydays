// For every fieldset in the document, add a navigation dot in the <div class="navigation-dots">.
function addNavigationDots() {
    const navigationDotsWrapper = document.querySelector('.navigation-dots-wrapper');
    const allFieldsets = Array.from(document.querySelectorAll('fieldset'));
    allFieldsets.forEach((element, index) => {
        allFieldsets[index].classList.add('hidden-fieldset');
        allFieldsets[0].classList.remove('hidden-fieldset');
        allFieldsets[0].classList.add('active-fieldset');
        navigationDotsWrapper.insertAdjacentHTML('beforeend', `
    <span class='navigation-dot' id='input-${index + 1}'> 
    `);
    });
    checkClickedNavigationDot(allFieldsets);
}

// The first navigation dot has the class "active". 
// When a navigation dot is clicked, showFieldset() is being played.
function checkClickedNavigationDot(allFieldsets) {
    const navigationDotArray = Array.from(document.querySelectorAll('.navigation-dot'));
    navigationDotArray.forEach((element, index) => {
        navigationDotArray[0].classList.add('active-navigation-dot');
        navigationDotArray[index].addEventListener('click', showFieldset(element, index, navigationDotArray, allFieldsets));
    });
}

// The clicked navigation dot get the class "active-navigation-dot" and the linked Fieldset "activeFieldset"
function showFieldset(element, index, navigationDotArray, allFieldsets) {
    return function () {
        navigationDotArray.forEach((element, index) => {
            element.classList.remove('active-navigation-dot');
        });
        element.classList.add('active-navigation-dot');
        const clickedFieldsetId = document.querySelector('#' + event.target.id);
        allFieldsets.forEach(element => {
            element.classList.remove('active-fieldset');
            element.classList.add('hidden-fieldset');
        });
        clickedFieldsetId.classList.add('active-fieldset');
        clickedFieldsetId.classList.remove('hidden-fieldset');
    };
}
const navigationDotsWrapper = document.querySelector('.navigation-dots-wrapper');
const nextButton = document.querySelector('.next');
if (navigationDotsWrapper) {
    addNavigationDots();
}

