/* becode/javascript
 *
 * /04-dates/01-title-by-hour-one/script.js - 4.1: texte en fonction de l'heure (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    function heuree()
    {
                let date = new Date();
                let heure = date.getHours();
                let minutes = date.getMinutes();
        if (heure<18)
            document.getElementById("hinner").innerHTML="Bonjour"
        else
            document.getElementById("hinner").innerHTML="Bonsoir";
    }
    heuree();
    
})();
