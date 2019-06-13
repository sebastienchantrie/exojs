/* becode/javascript
 *
 * /05-arrays/02-manipulate-array/script.js - 5.2: manipulation de tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    function tablo2(){

        let fruits2 = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];


    let supprimetable = fruits2.splice(9 , 1)
    let supprimetable2= fruits2.splice(0 , 1)
    let ajoutbanane   = fruits2.splice(0 , 0,"kiwi")
    let ajoutkiwi     = fruits2.splice(9 , 0, "banane")

    console.log(fruits2)

    
}

})();
