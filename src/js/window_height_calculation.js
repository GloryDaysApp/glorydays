// Get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
console.log('first vh'+vh);
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// Listen to the resize event
window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    console.log('second vh'+vh);
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});