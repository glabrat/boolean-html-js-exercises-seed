/*
* @param {HTMLDivElement} sourceDiv object with the source elements for the exercise
* See more about HTMLDivElement in :
*    - (Spanish) https://developer.mozilla.org/es/docs/Web/API/HTMLDivElement
*    - (English) https://developer.mozilla.org/en-US/docs/Web/API/HTMLDivElement
* @param {HTMLDivElement} resultDiv object where will add the result of the exercise
*/

export default function(sourceDiv, resultDiv) {
    //////////////////// EXERCISE 1 ////////////////////////////////////////
    var word = sourceDiv.innerText;
    var fragment = document.createDocumentFragment();
    var fontSize = 12;
    var isDecrement = false;

    for (var index = 0; index < word.length; index++) {
        if(word[index]) {
            var span = document.createElement('span');
            span.style.fontSize = fontSize + "px";
            span.innerText = word[index];
            fragment.appendChild(span);

            if(index % 6 === 0 && index !== 0){
                isDecrement = !isDecrement;
            }
            fontSize +=  isDecrement ? -12 : 12;
        }
    }
    resultDiv.appendChild(fragment);
    //////////////////// END EXERCISE 1 ////////////////////////////////////////
}
