"use strict";
function Func(arg) {
    return arg * 2;
}
function Func2(a) {
    console.log(a);
}
function Func3(x) {
    if (typeof x === 'number') {
        console.log(x + 3);
    }
}
Func(30);
Func2();
