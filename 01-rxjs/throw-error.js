"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var dataStream = rxjs_1.throwError(new Error('something happened'));
// dataStream = of([1,2,3]);
dataStream.subscribe(function () {
}, function (err) {
    console.log(err.message);
});
