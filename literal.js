"use strict";
let liName;
let itsMe;
itsMe = "인";
function liFunc(a) {
    return 0;
}
liFunc('hello');
function rpc(para) {
    return [para];
}
rpc('바위');
const objtest = 'kim';
// 이 object는 literal type 지정 알아서 해주셈
// 1. object value 값을 그대로 타입으로 지정해줌
// 2. object 속성들에 모두 readonly 붙여줌
// 3. object 자료를 완전히 잠가놓고 싶으면 써라
const objData = {
    name: 'kim'
};
function objFunc(a) {
}
objFunc(objData.name);
