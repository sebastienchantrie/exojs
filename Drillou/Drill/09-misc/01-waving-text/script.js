/* becode/javascript
 *
 * /09-misc/01-waving-text/script.js - 9.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const size=["18px" , "22px" , "24px" , "26px" , "28px" , "29px","40px"]
let parentElem = document.getElementById("waave")
parentElem.innerText = "";


function wave (content) {
    let j = 0;
    let switcher = false;
    for ( i=0 ; i< content.length ; i++) {
        let span = document.createElement('span');

        parentElem.appendChild(span);
                
        if (j === size.length - 1) {
            switcher = true;
        }else if (j === 0){
            switcher = false;
        }

        if(switcher){
            j--;
        }else{
            j++
        }
        span.style.fontSize = size[j];
    }
}

wave("Je suis la petite vague des familles")

})();
