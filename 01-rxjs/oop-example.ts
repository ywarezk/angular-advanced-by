

class Person {
    age : number = 34

    constructor(public name = 'yariv') {
        this.birthday2 = this.birthday2.bind(this);
    }

    birthday() {
        // 'this' is determined in runtime
        // by the object that is calling the function

        // if (this instanceof Person) {

        // }
        this.age++;
    }

    birthday2() {
        this.age++;
    }

    birthday3 = () => {
        this.age++;
    }
}

const yariv = new Person();
console.log(yariv.age); // 34

yariv.birthday();
console.log(yariv.age); // 35

const stam = {birthday: yariv.birthday.bind(yariv)}
stam.birthday();
console.log(yariv.age); // ? 35



function hello() {
    // ...
}

const hello2 = () => {
    
}