const inputKeywords = document.getElementById('keywords');

if (inputKeywords) {
    inputKeywords.onkeyup = function(){
        let inputKeywordsValue = inputKeywords.value;
        const inputKeywordsArray =  inputKeywordsValue.split(' ');
        const inputKeywordsStringFromArray = inputKeywordsArray.join().replace(/,/g,' ');
        inputKeywords.text = inputKeywordsStringFromArray;
    };
}
