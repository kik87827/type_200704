// 객체지향
// constructor - 비슷한 object를 많이 복사할때 사용
// var stu1 = { name : 'kim', age : 15}
// var stu2 = { name : 'lee', age : 15}
export default function constructorStudy() {
    // object를 생성기계 "constructor"
    function Student(name, age) {
        this.name = name;
        this.age = age;
        this.print = () => console.log('hi' + this.name);
    }
    // constructor에서 생성된 object는 instance
    var stu1 = new Student('kim', '12');
    var stu2 = new Student('kim2', '14');
    stu1.print();
    console.log(stu1, stu2);
}
