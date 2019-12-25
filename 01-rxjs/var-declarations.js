"use strict";
// how we define variables?
// let
// var
// const
var hello3 = 'world';
var myNumber = 10;
var myBoolean = true;
// what is the difference?
// Scope
// Number of assignments / assignment is a must
function hello1() {
    var stam = true;
    var message = 'helllo';
    if (true) {
        var message = 'hello';
    }
}
