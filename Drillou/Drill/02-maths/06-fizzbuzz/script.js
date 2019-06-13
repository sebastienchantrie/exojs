/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(()=> {

    for (let nb = 0; nb <100; nb++) {
        if (nb % 3 ===0 && nb % 5===0) {
        console.log(nb+" FizzBuzz")
    }
            else if (nb % 3===0) {
            console.log(nb+" Fizz")
            }
                        else if (nb % 5===0) {
                            console.log(nb+" Buzz")
                        }
                                                        else {
                                                            console.log(nb)
                                                        }
    }

})();
