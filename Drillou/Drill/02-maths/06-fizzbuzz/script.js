(()=> {

for (let nb = 0; nb <100; nb++) {
    if (nb % 3 ===0 && nb % 5===0) {
        console.log(nb+" FizzBuzz");
    }
    else if (nb % 3===0) {
        console.log(nb+" Fizz");
    }
    else if (nb % 5===0) {
        console.log(nb+" Buzz");
    }
    else {
        console.log(nb);
    }
}
})();
