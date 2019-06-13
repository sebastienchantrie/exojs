/* becode/javascript
 *
 * /09-misc/06-guess-number/script.js - 9.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let nbessai= ""
    let min=1
    let max=100
    
    function randomnb (){
        return Math.ceil(Math.random() * (max - min) + min);
    }
    
    let number = randomnb();
    function testnb (){
        while(true){
            let msg=prompt("Saisisez un nombre !")
            if (msg<number)
                alert("C'est plus grand !")
            else if (msg>number)
                alert("C'est plus petit !")
            else if (msg==number) {
                alert("Vous avez trouver le bon nombre en "+ nbessai +" essais");
                break;
            }   nbessai++
        }
    }
    testnb();
})();
