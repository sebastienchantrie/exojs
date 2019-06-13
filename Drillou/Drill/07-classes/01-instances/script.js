/* becode/javascript
 *
 * /07-classes/01-instances/script.js - 7.1: instances
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
            }
    }
    let kitty = new Cat("kitty " ,"10 years");
    let pixi = new Cat("Pixi ", "6 years")
    console.log(kitty.name + kitty.age); 
    console.log(pixi.name + pixi.age)
})();
