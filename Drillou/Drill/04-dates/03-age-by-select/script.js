/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    function CalculAge() {
        let td=new Date();
        let dtn=prompt("Quel est votre date de naissance ?"); 
        let an=dtn.substr(6,4); 
        let mois=dtn.substr(3,2);
        let day= dtn.substr(0,2); 
        let age=td.getFullYear()-an; 
        
            let mMois=td.getMonth()-mois;  
        
            
            if(mMois < 0) 
            {
                age=age-1; 
            }	
            else
            {
                if(mMois === 0)
                {
                    var mDate=td.getDay()-day;
                    if(mDate < 0)
                    {
                        age=age-1;
                    }
                    
                }
            }
            console.log(age)
        }
    
})();
