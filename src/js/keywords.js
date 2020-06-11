const inputKeywords = document.getElementById('keywords');

inputKeywords.onkeyup = function(){
    let inputKeywordsValue = inputKeywords.value;
    const inputKeywordsArray =  inputKeywordsValue.split(' ');
    const inputKeywordsStringFromArray = inputKeywordsArray.join().replace(/,/g,' ');
    inputKeywords.text = inputKeywordsStringFromArray;
    console.log(inputKeywordsStringFromArray);
};


