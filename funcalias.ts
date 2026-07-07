
type FuncType = (a :string) => number
let falias :FuncType = (a) => {
    return 0;
}

type FuncType2 = (a :number) => number
type FuncType3 = () => void


type MemberObj = {
    name :string;
    plusOne : (x :number ) => number;
    changeName : () => void;
}

let memberObj :MemberObj = {
    name : 'kim',
    plusOne(a){
        return a + 1;
    },
    changeName : () => {
        console.log('안녕')
    }
}



/* 
function Func1(a){
    a();
}

function Func2(){

}

Func1(Func2); */