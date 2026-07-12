
export default function class3() {
  class Person {
    name :string;
    constructor(a :string){
      this.name = a;

    }


    // 필드값
    data = 0;

    func(a :string) :void {
      console.log('안녕' + a);
    }
  }

  let men1 = new Person('kim');
  let men2 = new Person('park');

  console.log(men2.name)

  men1.func('lee')
}
