/* becode/javascript
 *
 * /05-arrays/04-walk-two/script.js - 5.4: parcours de tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    function tablo4() {
        const fruits4 = [ 
            "pomme",
            "poire",
            "fraise",
            "tomate",
            "kiwi",
            "banane",
            "orange",
            "mandarine",
            "durian",
            "pêche",
            "raisin",
            "cerise",
        ]
    
        fruits4.forEach(function (argument) {
            console.log(argument)
        });
    
        //  AUTRE METHODE        
        //for (const xy of fruits4) {
        //    console.log(xy)
        //}
    }
    
})();
