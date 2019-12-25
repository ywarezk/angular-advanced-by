"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
rxjs_1.of('hello world').pipe(operators_1.map(function (strHello) { return strHello.length; })).subscribe(function (num) {
    console.log(num);
});
