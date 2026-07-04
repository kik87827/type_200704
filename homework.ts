/* 
Q1. 여러분의 이름, 나이, 출생지역을 변수로 각각 저장해봅시다. 
물론 타입도 알아서 지정해보십시오. 이건 쉬우니 답은 없습니다.
*/

let kikName :string = '김인경';
let kikAge :number = 44;
let kikFrom :string = 'busan';


/* 
Q2. 여러분이 가장 좋아하는 곡과 가수이름을 변수에 object 자료형으로 담아보십시오.
object 안엔 노래 제목과 가수이름이 들어가면 됩니다.
근데 제목과 가수는 문자만 들어올 수 있어야합니다. 
*/

let myfav :{[key in string] :string } = { song : '갑자기' , singer : 'ioi'}
let myfav2 :{ song :string , singer :string} = { song : '갑자기' , singer : 'ioi'}

let project :{
    member? :string[],
    days? : number,
    started? : boolean, 
} = {
  member : ['kim', 'park'],
  days : 30,
  started : true,
}