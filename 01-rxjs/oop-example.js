"use strict";
var Person = /** @class */ (function () {
    function Person(name) {
        var _this = this;
        if (name === void 0) { name = 'yariv'; }
        this.name = name;
        this.age = 34;
        this.birthday3 = function () {
            _this.age++;
        };
        this.birthday2 = this.birthday2.bind(this);
    }
    Person.prototype.birthday = function () {
        // 'this' is determined in runtime
        // by the object that is calling the function
        // if (this instanceof Person) {
        // }
        this.age++;
    };
    Person.prototype.birthday2 = function () {
        this.age++;
    };
    return Person;
}());
var yariv = new Person();
console.log(yariv.age); // 34
yariv.birthday();
console.log(yariv.age); // 35
var stam = { birthday: yariv.birthday.bind(yariv) };
stam.birthday();
console.log(yariv.age); // ? 35
function hello() {
    // ...
}
var hello2 = function () {
};
