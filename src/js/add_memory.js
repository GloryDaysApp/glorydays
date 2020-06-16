function AddSendButtonToInputTextFields() {
    const inputTextFields = Array.from(document.querySelectorAll('.input-text'));
    if (inputTextFields) {
        inputTextFields.forEach((element, index) => {
            inputTextFields[index].insertAdjacentHTML('beforeend', `
        <a class='send-button' id='send-button-${index}'>Stuur</a> 
        `);
        });
    }
    checkClickedInputSendButton();
}

function checkClickedInputSendButton() {
    const inputSendButtonsArray = Array.from(document.querySelectorAll('.send-button'));
    if (inputSendButtonsArray) {
        inputSendButtonsArray.forEach((element, index) => {
            inputSendButtonsArray[index].addEventListener('click', addTextBaloon(index));
        });
    }
}

function addTextBaloon(index) {
    return function () {
        const initialInputFieldArray = Array.from(document.querySelectorAll('.input-text input[type="text"]'));
        const initialInputArray = Array.from(document.querySelectorAll('.input-text'));
        let valueInitialInputField = initialInputFieldArray[index].value;
        const initialInputField1 = initialInputFieldArray[index];
        const initialInputField = initialInputArray[index];
        
        if (valueInitialInputField != '') {
        
            if(initialInputField1.id== 'keywords'){
                initialInputField.insertAdjacentHTML('beforebegin', `
                <div class='output'><textarea class='output-textarea output-keyword' rows='1' style='width:${valueInitialInputField.length + 1}em;'>${valueInitialInputField}</textarea></div>`);
            }
            else{
                initialInputField.insertAdjacentHTML('beforebegin', `
                <div class='output'><textarea class='output-textarea' rows='1'>${valueInitialInputField}</textarea></div>`);
            }
        }
        // initialInputFieldArray[index].value = '';
    };
}

AddSendButtonToInputTextFields();