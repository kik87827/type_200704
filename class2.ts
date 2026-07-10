export default function classStudy(){
    class Person {
        // class 필드값(constructor와 똑같은 역할)

        data = 0;

        name :string;
        constructor(a:string = 'who'){
            this.name = a;   
        }
    }

    let men1 = new Person('men1');
    let men2 = new Person('men2');


    console.log(men1.data)
}