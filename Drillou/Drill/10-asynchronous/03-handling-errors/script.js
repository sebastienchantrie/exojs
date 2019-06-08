(() => {
    document.querySelector('#run').addEventListener('click',()=>{
        window.lib.getPersons(( error , article ) => {
            if (error != null) {
                console.error("Il y a une erreur")
            }   
            else {
                console.log(article)
            }
        })
    })
})();
