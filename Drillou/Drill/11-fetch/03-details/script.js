document.querySelector('#run').addEventListener('click', function() {  
    fetch("http://localhost:3000/heroes").then(function(response) { 
        return response.json();
    }).then(function(heroes) {
    let idhero = document.getElementById("hero-id").value;
        heroes.forEach(function (heroe) { 
        	if (idhero == heroe.id) {
            document.getElementById('target').innerHTML = '<li class="hero"> \
                    <h4 class="title"> \
                        <strong class="name">'+ heroe.name +'</strong> \
                        <em class="alter-ego">'+ heroe.alterEgo +'</em> \
                    </h4> \
                    <p class="powers">'+ heroe.abilities.join(", ") +'</p> \
                </li>';
            }
        });
    }).catch(function (err){ 
        console.log("Il y a une erreur", err);
    });
});


