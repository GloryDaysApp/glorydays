// For every fieldset in the document, add a navigation dot in the <div class="navigation-dots">.
function addNavigationDots() {
    const navigationDotsWrapper = document.querySelector('.navigation-dots-wrapper');
    const allFieldsets = Array.from(document.querySelectorAll('fieldset'));
    allFieldsets.forEach((element, index) => {
        navigationDotsWrapper.insertAdjacentHTML('beforeend', `
    <a href=#input-${index + 1} class='navigation-dot' id='navigation-input-${index + 1}'> 
    `);
    });
    checkClickedNavigationDot(allFieldsets);
}

// The first navigation dot has the class "active". 
function checkClickedNavigationDot(allFieldsets) {
    const navigationDotArray = Array.from(document.querySelectorAll('.navigation-dot'));
    navigationDotArray.forEach((element, index) => {
        navigationDotArray[0].classList.add('active-navigation-dot');
        navigationDotArray[index].addEventListener('click', showFieldset(element, index, navigationDotArray, allFieldsets));
    });
}

// The clicked navigation dot get the class "active-navigation-dot"
function showFieldset(element, index, navigationDotArray, allFieldsets) {
    return function () {
        navigationDotArray.forEach((element, index) => {
            element.classList.remove('active-navigation-dot');
        });
        element.classList.add('active-navigation-dot');
    };
}
const navigationDotsWrapper = document.querySelector('.navigation-dots-wrapper');
const nextButton = document.querySelector('.next');
if (navigationDotsWrapper) {
    addNavigationDots();
}

// searchNewLink() is a function from animation_conversational_ui.js, it will add an animation on the filedsets.
searchNewLink();


