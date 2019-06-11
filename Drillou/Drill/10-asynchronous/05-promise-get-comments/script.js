/*    
    document.getElementById('run').addEventListener('click',()=>{
        window.lib.getPosts().then(function(artoucles) {
        artoucles.forEach(article => {
            window.lib.getComments(article.id).then(function(comments) {
            article.comment = comments;
            });
        });
        console.log(artoucles);
        });
    });

    */

    // FARZIM AVEC DELAI

    document.getElementById('run').addEventListener('click', () => {
        window.lib.getPosts().then((posts) => {
            let postCount = posts.length;
            if (postCount === 0)
                return (console.log("Don't found any post..."));

            let postReady = 0;
            posts.forEach((post) => {
                window.lib.getComments(post.id).then((comments) => {
                    post.comments = comments;
                    if (++postReady === postCount)
                        console.log(posts);
                }).catch((err) => {
                    console.log("Can't getComments for post " + post.id + "... Error:", err);
                    if (++postReady === postCount)
                        console.log(posts);
                });
            });
        }).catch((err) => {
            console.log("Can't getPosts... Error:", err);
        });
    });
    
    
// FARZIM DEGEULASSE POUR EXPLICATION

document.getElementById('run').addEventListener('click', () => {  // La fonction est appelé lors du click sur le bouton
    window.lib.getPosts().then((posts) => {  // On recupere les posts
          let postReady = 0; // On déclare que les post prêt sont egal a 0

          if (posts.length === 0) {  // Si la taille des posts est egal a 0
            console.log("Il n'y a pas de posts ...");                     // on ecrit dans la console qu'il n'y a pas de post
        } else {  // Si la taille des post est pas egal a 0 
            posts.forEach((post) => { // On boucle sur les post
                window.lib.getComments(post.id).then((comments) => { // On appel la fonction qui trouve les commentaires avec une promesse
                    post.comments = comments; // On définit que post.comments est comments
                      postReady++; // On augmente de 1 la valeurs des post prêt
                    if (postReady === postCount.length) // On dit que si les post pret son égaux au nombre de post qu'on a été chercher
                        console.log(posts); // on les écrit dans la console 
                }).catch((err) => { 
                    console.log("Can't getComments for post " + post.id + "... Error:", err); // Si il y a une erreur lors de la recuperation des commentaires
                      postReady++; // On dit quand meme que postReady prend 1 de plus
                    if (postReady === postCount.length) // Si postReady est égal a la taille de postcount
                        console.log(posts); // On écrit les post dans la console
                });
            });
        }
    }).catch((err) => {
        console.log("Can't getPosts... Error:", err); // Si il y a un probleme avec la promise on l'écrit dans la console
    });
});