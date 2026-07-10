export default function classStudy() {
    class Person {
        constructor(a = 'who') {
            // class 필드값(constructor와 똑같은 역할)
            this.data = 0;
            this.name = a;
        }
    }
    let men1 = new Person('men1');
    let men2 = new Person('men2');
    console.log(men1.data);
}
