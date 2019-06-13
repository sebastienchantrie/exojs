/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    function calculswitch()
    {	
        let nombre1 = parseInt(document.getElementById('nb1').value)
        let nombre2 = parseInt(document.getElementById('nb1').value)
        let add = (nombre1 + nombre2)
        let sous = (nombre1 - nombre2)
        let mult = (nombre1 * nombre2)
        let div = nombre1 / nombre2

        switch (document.calculatrice.operateur.value)
        {
            case document.getElementById('addition').checked);
            document.getElementById("afficher").innerHTML = add;
            break;
            case document.getElementById('soustraction').checked);
            document.getElementById("afficher").innerHTML = sous;
            break;
            case  document.getElementById('mutliplication').checked);
            document.getElementById("afficher").innerHTML = mult;
            break;
            case document.getElementById('division').checked);
            document.getElementById("afficher").innerHTML = div;
            break;
        }
})();
