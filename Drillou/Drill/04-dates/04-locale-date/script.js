/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    function day() {
        let moistable=["coucou","Janvier","Fevrier","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Decembre"]
        let date = new Date();
        let day = date.getDay();
        let mois= date.getMonth();
        let année= date.getFullYear();
        let moisecrit= parseInt(mois)
        console.log(moisecrit)
        if (day<10 )
        document.getElementById("targetted").innerHTML="Nous somme le "+ '0'+ day +" "+ moistable[moisecrit] + " " + année
        else 
        document.getElementById("targetted").innerHTML="Nous somme le "+ day +" "+ moistable[moisecrit] + " " + année
    }
    day()
})();
