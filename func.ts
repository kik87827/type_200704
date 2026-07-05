function Func(arg : number): number {
  return arg * 2;
}

function Func2(a? : number) :void {
 console.log(a)
}

function Func3(x : number | string) :void {
  if(typeof x === 'number') {
    console.log(x + 3);
  }
}

Func(30);
Func2();  