/* becode/javascript
 *
 * /10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    let getcomment= window.lib.getComments


    document.querySelector('#run').addEventListener('click',()=>{


        window.lib.getPosts(( error , article ) => {
            if (error===true) {
                console.log("Il y a une erreur")
            }   
            else {
                article.forEach(element => {
                    getcomment(element.id ,(error2 , article2)=>{
                        if (error2===true) {
                            console.log("Il y a une erreur")
                        }
                        else {
                            element.comment=article2
                            console.log(article)
                        }


                    })
                });
            }

        })
    })
})();
