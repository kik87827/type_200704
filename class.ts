// @ts-nocheck
export default function classStudy(){
    class User {
      // object 생성시 1회 실행할 코드 적기 좋음
      // 파라미터 입력하려면 constructor 써야한다
      constructor(a,b){
        // 필드값
        // object 생성시 1회 실행할 코드 적기 좋음
        this.name = a;
        this.phone = b;
        // this.printAll = () => console.log(this.name + this.phone);
      }
      // 메소드
      printAll(){
        console.log(this.name + this.phone);
      }
    }

    let user1 = new User('kim','010');
    let user2 = new User('park','011');

    console.log(user2.name + user2.phone);

    user2.printAll();
}