let liName :123;

let itsMe :'김' | '인';

itsMe = "인";


function liFunc(a :'hello') :1|0 {
    return 0;
}

liFunc('hello');

type RpcItem = '가위' | '바위' | '보';
type RpcGroup = (RpcItem)[];
function rpc(para :RpcItem) :RpcGroup {
    return [para];
}

rpc('바위');

const objtest :'kim' | 'kim2' = 'kim' ;

// 이 object는 literal type 지정 알아서 해주셈
// 1. object value 값을 그대로 타입으로 지정해줌
// 2. object 속성들에 모두 readonly 붙여줌
// 3. object 자료를 완전히 잠가놓고 싶으면 써라
const objData = {
    name : 'kim'
} as const
function objFunc(a :'kim'){

}
objFunc(objData.name);