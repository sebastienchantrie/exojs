document.getElementById('run').addEventListener('click',()=>{
    window.lib.getPersons().then(function(artoucles){
        console.log(atoucles);
    }).catch(function(artoucles){
        console.error(" Y A PAS D ARTOUCLES EROOR EROOR ");
    });
    });