"use strict";
// of
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var dataStream = rxjs_1.of([1, 2, 3]);
dataStream.subscribe(function (arr) {
    console.log(JSON.stringify(arr));
});
