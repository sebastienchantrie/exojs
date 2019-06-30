/* FONCTION QUI AJOUTE PAS +1
(() => {
    document.getElementById("run").addEventListener("click", () => {
        let nb = document.getElementById('number').value;
        if ( nb == 0){
            console.log(0);
            return;
        }
        let reponse = 1;
        while (1 <= nb) {
            reponse = reponse * nb;
            nb--;
        }
        console.log(reponse);
    });
})();
*/

// Fonction qui appel une autre fonction , qui stock sa valeurs et lui ajoute +1 
document.getElementById("run").addEventListener("click", function() {
    let nb = document.getElementById('number').value;
    let factor =facto(nb)+1
    console.log(factor);
});

function facto(nb) {
    if ( nb == 0) {
        return(0);
    }
    let reponse = 1;
    while (1 <= nb) {
        reponse = reponse * nb;
        nb--;
    }
    return(reponse);
}

