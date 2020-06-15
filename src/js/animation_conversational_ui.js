//Intersection Observer experiment
const observer = new IntersectionObserver(showArticles);
const elements = document.querySelectorAll('legend');

elements.forEach(element => {
    observer.observe(element);
});

function showArticles(entries, observer) {
    entries.forEach(entry => {
        const targetClass = entry.target.classList;
        if (entry.isIntersecting) {
            targetClass.add('observed');
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

const nextFieldset = document.getElementsByClassName('buttons');

function changeActiveClass() {
    for (let i = 0; i < nextFieldset.length; i++) {
        //menuItems[i].classList.remove('active')

        nextFieldset[i].addEventListener('click', function (el) {
            for (let b = 0; b < nextFieldset.length; b++) {
                nextFieldset[b].classList.remove('active');
            }
            el.target.parentElement.classList.add('active');
        });
    }
}

changeActiveClass();
