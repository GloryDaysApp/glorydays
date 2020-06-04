function AddSendButtonToInputTextFields() {
    const inputTextFields = Array.from(document.querySelectorAll('.input-text'));
    inputTextFields.forEach((element, index) => {
        inputTextFields[index].insertAdjacentHTML('beforeend', `
      <a class='send-button' id='send-button-${index}'>Stuur</a> 
      `);
    });
    checkClickedInputSendButton();
}

function checkClickedInputSendButton() {
    const inputSendButtonsArray = Array.from(document.querySelectorAll('.send-button'));
    inputSendButtonsArray.forEach((element, index) => {
        inputSendButtonsArray[index].addEventListener('click', addTextBaloon(index));
    });
}

function addTextBaloon(index) {
    return function () {
        const initialInputFieldArray = Array.from(document.querySelectorAll('.input-text input[type="text"]'));
        const initialInputArray = Array.from(document.querySelectorAll('.input-text'));
        let valueInitialInputField = initialInputFieldArray[index].value;
        const initialInputField1 = initialInputFieldArray[index];
        const initialInputField = initialInputArray[index];

        initialInputField.insertAdjacentHTML('beforebegin', `
        <div class='output'><textarea class='output-textarea'>${valueInitialInputField}</textarea></div>
        `);
        console.log(initialInputFieldArray[index].value);
        initialInputFieldArray[index].value = '';
        console.log(initialInputFieldArray[index].value);
    };
}

AddSendButtonToInputTextFields();