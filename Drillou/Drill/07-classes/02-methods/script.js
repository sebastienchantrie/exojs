/* becode/javascript
 *
 * /07-classes/02-methods/script.js - 7.2: méthodes
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    function Person (firstname , lastname) {
        this.firstname = firstname
        this.lastname  = lastname
    }
        let seb=new Person ("Seb " , " Le plus beau ")
    hello = function() {
        
        console.log(seb.firstname + seb.lastname + "say hello")
    }
    hello()
    
    coucou()
    
})();
