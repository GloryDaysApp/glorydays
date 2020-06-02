const inputTextFields = Array.from(document.querySelectorAll('.input-text'));
console.log(inputTextFields);

// 
inputTextFields.forEach((element, index) => {
  inputTextFields[index].insertAdjacentHTML('beforeend', `
    <a class="send_button">Stuur</a> 
    `);
});