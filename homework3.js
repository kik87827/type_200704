/*
(숙제1) 이름을 파라미터로 입력하면 콘솔창에 "안녕하세요 홍길동"을 출력해주고
아무것도 파라미터로 입력하지 않고 함수를 사용하면 "이름이 없습니다" 를 출력하는 함수를 만들어봅시다.
파라미터와 return 타입지정도 잘 해봅시다.
*/
function sayHello(para) {
    if (para) {
        console.log('안녕하세요' + para);
    }
    else {
        console.log('이름이 없습니다.');
    }
}
function merryFunc({ income, home, charm }) {
    let sum = 0;
    sum += (income / 100 > 0 ? income / 100 : 0) + (home ? 500 : 0) + (charm === '상' ? 100 : 0);
    console.log(sum);
    return sum > 600 ? '결혼가능' : '';
}
console.log(merryFunc({ income: 100, home: true, charm: "상" }));
