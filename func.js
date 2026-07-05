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
function Func4(x) {
    if (typeof x === 'string') {
        return 'x' + 2;
    }
    return x + 2;
}
function Func5(x) {
    let arr = [];
    /* if(typeof x === "number"){
      arr[0] = x;
    } */
    arr[0] = x;
}
Func(30);
Func5(30);
Func2();
