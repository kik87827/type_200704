let userName :string = 'kim';

let userName2 :string[] = ['kim','park'];

let userName3 :{name? : string} = {name :'kim'}

type Mytype = string | number;

let userNameUnion :Mytype = 123;

function MyFunc(x :number) :number {
    return x * 2;
}

type Member = [number,boolean];

let john:Member = [123,true];

type Member2 = {
    [key :string] : string
}

let kim :Member2 ={ name : 'kim' }

class User {
    name :string;
    constructor(name :string){
        this.name = name;
    }
}