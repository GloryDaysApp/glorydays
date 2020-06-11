const slider = document.getElementById('myRange');
const output = document.getElementById('demo');

// Update the current slider value (each time you drag the slider handle)
if (slider) {
    // Display the default slider value
    output.innerHTML = slider.value;

    slider.oninput = function () {
        output.innerHTML = this.value;
        let value = this.value;
    };
}