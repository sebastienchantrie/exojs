/* becode/javascript
 *
 * /07-classes/03-inheritance/script.js - 7.3: héritage
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Animal {
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }
    class Dog extends Animal {
        constructor (name) {
            super();
            this.name = name;
        }
        static get greeting() {
            return "hello";
        }
    
    }
    
    class Cat extends Animal {
        constructor (name) {
            super();
            this.name = name
        }
        static get greeting() {
            return "hello";
        }
    
    
    }
    
    let chat = new Cat ("Tao");
    let Dogz = new Dog("Boul2biar");
    console.log(Dogz.sayHello());
        console.log(chat.sayHello());
    
})();
