document.getElementById('run').addEventListener('click', async function() {
    try {
    	console.log(await window.lib.getPersons());
    } catch (err) {
      console.log("Il y a une erreur", err);
    }
});



/*
function exemple(arg1, arg2) {
    let var1 = 23;
    let var2 = 42;
    
    var1 = var2 + ar2;
    if (true) {
        console.log(var1 + arg1);
      console.log("yes !");
    } else {
        console.log(arg2);
      console.log("nop !");
    }
    return (var1 + 13);