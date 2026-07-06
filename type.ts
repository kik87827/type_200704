
// type alias(별칭)
type AniType = string | number | undefined;
let ani :AniType = 123;


type AniType2 = {name : string, age : number}
let ani2 :AniType2 = {name :'kim', age: 20}

// const 변수는 등호로 재할당만 막는 역할임
// const로 담은 object 수정은 자유롭게 가능
const fromLocal = { region : 'kim' }

fromLocal.region = 'busan';

type WomanType = { readonly name? :string} 
const girl :WomanType  = { name : 'ember'}

// girl.name = 'ean'

type NameMen = string;
type NameAge = number;
type Person = NameAge | NameMen;

type PositionX = { x : number };
type PositionY = { y : number };

type PositionXY = PositionX & PositionY;

let position :PositionXY = { x:12,y:20}
