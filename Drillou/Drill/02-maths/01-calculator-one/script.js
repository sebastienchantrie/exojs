/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    function calcul() {
        let nombre1 = parseInt(document.getElementById('nb1').value)
        let nombre2 = parseInt(document.getElementById('nb2').value)
        let add = (nombre1 + nombre2)
        let sous = (nombre1 - nombre2)
        let mult = (nombre1 * nombre2)
        let div = nombre1 / nombre2
        
    
        if (document.getElementById('addition').checked) {
    
            document.getElementById("afficher").innerHTML = add;
        }        if (document.getElementById('soustraction').checked) { 
    
    
            document.getElementById("afficher").innerHTML = sous;
    
    
    }
    
    if (document.getElementById('multiplication').checked) {
    
        document.getElementById("afficher").innerHTML = mult;
    }
    
    
    if (document.getElementById('division').checked) {
    
        document.getElementById("afficher").innerHTML = div;
    }
    }
    
})();
