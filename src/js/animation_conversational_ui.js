//Intersection Observer experiment
const observer = new IntersectionObserver(showArticles);
const elements = document.querySelectorAll('legend');
const fieldsets = document.querySelectorAll('fieldset');

elements.forEach(element => {
    observer.observe(element);
});

fieldsets.forEach(element => {
    observer.observe(element);
});

function showArticles(entries, observer) {
    entries.forEach(entry => {
        const target = entry.target;
        const targetClass = entry.target.classList;
        targetClass.remove('observed');
        if (entry.isIntersecting) {
            targetClass.add('observed');
            ActivateNavigationDot(target);
        }
    });
}

// Next button animation
function searchNewLink() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}
searchNewLink();

// const nextFieldset = document.getElementsByClassName('buttons');
// function changeActiveClass() {
//     for (let i = 0; i < nextFieldset.length; i++) {
//         //menuItems[i].classList.remove('active')

//         nextFieldset[i].addEventListener('click', function (el) {
//             for (let b = 0; b < nextFieldset.length; b++) {
//                 nextFieldset[b].classList.remove('active');
//             }
//             el.target.parentElement.classList.add('active');
//         });
//     }
// }

// changeActiveClass();

// Active navigation dot is bigger
function ActivateNavigationDot(target) {
    const navigationDotArray = Array.from(document.querySelectorAll('.navigation-dot'));
    if (target.id.includes('input')) {
        const activeDot = document.querySelector('#navigation-' + target.id);
        navigationDotArray.forEach((element) => {
            element.classList.remove('active-navigation-dot');
        });
        activeDot.classList.add('active-navigation-dot');
    }
}

