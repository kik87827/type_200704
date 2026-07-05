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

function Func4(x : number | string) :number | string {
  if(typeof x === 'string') {
     return 'x' + 2;
  }
  return x + 2;
}

function Func5 (x :number|string){
  let arr :number[] = [];
  /* if(typeof x === "number"){
    arr[0] = x;
  } */
 arr[0] = x as number;
}

Func(30);
Func5(30);
Func2();  