(() => {
    document.querySelector('#run').addEventListener('click',()=>{
        window.lib.getPosts().then(function(res) {
            console.log(res);
        }).catch(function(err){
            console.log("IL Y A UNE ERROUR" , err)
        });
    });
});