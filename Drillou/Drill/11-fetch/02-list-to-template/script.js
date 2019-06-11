document.querySelector('#run').addEventListener('click', function() {  
    fetch("http://localhost:3000/heroes").then(function(response) { 
        return response.json(); 
    }).then(function(heroes) {
        heroes.forEach(function (heroe) {
          document.getElementById('target').innerHTML += '<li class="hero"> \
                <h4 class="title"> \
                    <strong class="name">'+ heroe.name +'</strong> \
                    <em class="alter-ego">'+ heroe.alterEgo +'</em> \
                </h4> \
                <p class="powers">'+ heroe.abilities.join(", ") +'</p> \
            </li>'; 
        });
    }).catch(function (err){ 
        console.log("Il y a une erreur", err);
    });
});
