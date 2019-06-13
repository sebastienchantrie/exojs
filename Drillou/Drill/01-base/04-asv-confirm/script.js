/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    function x (demandeInfo) {
        let age =prompt("Quel age avez vous ?");
        let ville =prompt("Dans quel ville vivez vous ?");
        let sexe =prompt("Etes vous un homme ou une femme ?");
        
        alert("Bonjour , vous avez "+age+" vous vivez a "+ville+" et vous etes "+sexe+" ");
        
        let conf=window.confirm("Correct ;) ?");
        
        
        if (conf===true) {
            alert("Merci d'avoir valider vos informations");
        }
        if (conf===false){
            x()
        }   
        }
        
        x()
    
})();
