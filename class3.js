export default function class3() {
    class Person {
        constructor(a) {
            // 필드값
            this.data = 0;
            this.name = a;
        }
        func(a) {
            console.log('안녕' + a);
        }
    }
    let men1 = new Person('kim');
    let men2 = new Person('park');
    console.log(men2.name);
    men1.func('lee');
}
