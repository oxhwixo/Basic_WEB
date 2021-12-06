# Javascript Essentials

## Node.js 

### 개요 및 설치

Node.js는 Chrome V8 Javascript 엔진으로 빌드된 Javascript 런타임이다.

* Chrome V8 Javascript 엔진 : Javascript의 문법을 해석하고 실제로 동작할 수 있게 하는 엔진

* Javascript 런타임 : Javascript가 동작할 수 있는 프로그래밍 환경  

  

Scss, BABEL, EJS 등의 모듈을 사용할 때, Node.js 환경을 이용해야한다. 
홈페이지에서 하나의 버전을 다운받는 것 보다는 Node.js 버전 매니저를 설치하는것을 권장함.

* nvm  검색 후, 첫번째 링크 클릭해서 README에 적혀있는 Install 부분으로 가서 설치 진행.
* 항상 최신 버전을 이용해서 개발을 해야하는 것이 아님에 주의!
  * Node.js는 짝수 버전이 안정적인 버전이며 홀수 버전이 가장 최신의 버전이다. 가장 최신 버전은 새로운 기능을 사용할 수 있으나 해결되지 않은 버그가 있을 수 있다. 어떤 프로젝트를 하는가에 따라서 그 프로젝트에 최적화된 노드 버전은 달라질 수 있다. 

  

### NVM 사용법

* nvm ls : 설치된 Node.js 리스트 확인
* nvm install 버전 : 특정 버전의 Node.js 설치 
* nvm use 버전 : 특정 버전의 Node.js 사용
* nvm uninstall 버전 : 특정 버전 삭제

  

### NPM 개요 및 사용법

nvm을 설치하면서 같이 설치되는 Node Package Manager. 전 세계의 개발자들이 만든 다양한 기능( 패키지, 모듈 )들을 관리한다.

* npm init -y : package.json 파일 생성

* ~~~json
  {
    "name": "test", //프로젝트 이름
    "version": "1.0.0", //프로젝트의 버전
    "description": "", //프로젝트 설명
    "main": "index.js", //현재 프로젝트를 하나의 패키지로 만들어서 npm에 업로드할 때 사용되는 옵션
    "scripts": { //프로젝트에서 사용 가능한 스크립트 명령
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "keywords": [], //키워드
    "author": "", //소유자
    "license": "ISC" ,
    "devDependencies": { //설치해서 사용중인 패키지 내역
      "parcel-bundler": "^1.12.5"
    },
    "Dependencies": { //설치해서 사용중인 패키지 내역
      "parcel-bundler": "^1.12.5"
    }
  }
  ~~~

* npm install 패키지이름@패키지버전 : 패키지 설치

  *  -D 플래그를 넣으면 개발용 의존성 패키지를 설치하고, 넣지 않으면 일반 의존성 패키지를 설치한다
    * 개발용 의존성 패키지는 개발할 때만 필요하며 웹브라우저에서 직접적으로 동작하지 않는 패키지이며 일반 의존성 패키지는 직접적으로 웹브라우저에서 동작하는 패키지이다. 
  * 자동으로 package-lock.json 파일이 생기며 설치한 패키지를 사용하기 위해 필요한 패키지 정보들이 알아서 들어간다. 

* 패키지 설치시 생기는 node_modules 폴더를 삭제해도 package.json에 패키지 정보가 남아있으면 npm i 명령어를 통해서 재설치 가능하다.

* npm update 패키지이름 : 패키지 업데이트

   

#### parcel 사용 예시 (개발용 의존성 패키지)

parcel은 로컬 환경에 개발용 서버를 열어서 브라우저에서 확인할 수 있게 하는 패키지이다.  npm을 통해서 설치도 완료 했고 package.json 파일의 devDependencies 객체에도 parcel이 설치되어 버전이 명시되어있지만 터미널에서 parcel index.html을 실행했을 때 동작하지 않는다. Parcel 패키지가 프로젝트에만 설치된 것이기 때문에 터미널에서 사용할 수 없다.

parcel 기능을 사용하기 위해서 Package.json파일의 scripts 부분을 수정해야한다.

~~~json
"scripts": { //프로젝트에서 사용 가능한 스크립트 명령
    "dev": "parcel index.html", //개발하면서 확인하기 위한 용도로 사용
  	"build": "parcel build index.html" //사용자에게 보여질 용도로 사용, 때문에 작성된 코드를 읽기 어렵게하는 코드 난독화(+최적화, 압축)가 진행되고 그것이 dist라는 폴더에 생성된다.
  }
~~~

그리고 ```npm run dev``` 를 터미널에 입력하면 명령이 실행된다. 

  

#### lodash 사용 예시 (일반 의존성 패키지)

~~~js
import _ from 'lodash'

console.log(_.camelCase('Hello world!'));
~~~



  

### 유의적 버전 (Semantic Versioning, SemVer)

~~~
Major. Minor. Patch --- 12.14.1
~~~

* Major : 기존 버전과 호환되지 않는 새로운 버전
* Minor : 기존 버전과 호환되는 새로운 기능이 추가된 버전
* Patch : 기존 버전과 호환되는 버그 및 오타 등이 수정된 버전 

* 맨 앞에 ^ 기호가 붙어있으면? : Major 버전 안에서 가장 최신 버전으로 업데이트가 가능함
  * Package.json 파일에서 패키지 정보 부분에서, 설치된 패키지들의 버전앞에 ^를 붙이면 npm update 명령을 사용했을 때 패키지가 업데이트되며, ^ 기호를 붙이지 않으면 npm update 명령을 사용해도 패키지가 업데이트 되지 않는다. 



  

### NPM 프로젝트의 버전 관리

node_modules, dist, .cache등 특정 명령을 통해서 언제든지 같은 구조로 만들어낼 수 있는 것들에 대해서는 버전관리를 해줄 필요가 없다. 

.gitignore 파일을 통해서 버전관리 하지 않을 내용들을 명시해준다.

~~~
.cache/
dist/
node_modules/
~~~



  

### ECMA  

자바스크립트의 5버전과 6버전의 차이를 아는것이 중요하다. 이 때 많은 변화가 생겼고  6버전을 ES6 라고 부른다. 

* IE는 5버전 이하의 버전만 지원한다.
* BABEL 같은 플러그인의 도움을 받아서 6버전 이후의 문법을 5버전에서도 사용할 수 있게 변환할 수 있다. 

  

## 기본 문법

### 데이터 타입 확인

~~~js
console.log(typeof 123); //number
console.log(typeof 'ABC'); //string
console.log(typeof null); //object
console.log(typeof {}; //object
~~~

typeof 를 이용해서 데이터 타입이 무엇인지 확인 가능하다. 단, null, {}객체데이터, []배열데이터는 다 object로 데이터 타입이 명시되기 때문에 이 세개의 타입을 구분하기 위해 따로 함수를 만들 수 있다. 

~~~js
function getType(data) {
	return Object.prototype.toString.call(data).slice(8,-1);
}
~~~

  

### 산술, 할당, 비교, 논리, 삼항 연산자

* 산술 연산자 : +, -, *, /, % 
* 할당 연산자 : =
* 비교 연산자 : >, <, >=, <=, ===, !==, 
  *  "===" 는 일치 연산자
  * 자바스크립트에서 "==" 는 동등 연산자 ---> 형 변환을 한 후에 좌항과 우항을 비교함. 의도하지 않은 동작을 할 수 있기 때문에 사용을 권장하지 않음 
* 논리 연산자 : && and , || or, ! not
* 삼항 연산자 : 기준값 ? 기준값이 참일때 실행 : 기준값이 거짓일때 실행 



### 조건문, 반복문

#### 조건문

* if - else if - else 

  ~~~js
  if () {
  
  } else if () {
  
  } else {
  
  }
  ~~~

* switch

  ~~~js
  switch (변수) {
  	case 값:
  		braek;
  	case 값2:
  	
  	.
  	.
  	.
    default: 
      모든 값에 해당되지 않을 때
  }
  ~~~

  break가 없으면 조건에 부합한 case 이후의 코드가 계속 실행된다.

  

#### 반복문

* for

  ~~~js
  for (시작조건; 종료조건; 변화조건) {};
  for (let i = 0; i < 3; i +=  1) {};
  ~~~

  

### 변수 유효범위

let, const은 블록레벨의 유효범위를 가진다. var은 함수레벨의 유효범위를 가진다. 
최신의 프론트엔드 개발에서는 블록레벨의 유효범위를 기본으로 생각하기 때문에 var는 사용을 권장하지 않는다.

  

### 형 변환 (type conversion)

* Truethy (참 같은 값)
  * true
  * {}
  * []
  * 1, 2, -12 (음수도 해당)
  * 'false'
  * ...
* Falsy (거짓 같은 값)
  * false
  * ''
  * null
  * undefined
  * 0, -0
  * Nan : 숫자 데이터긴 하지만 숫자가 아닌 데이터 ex ) 1 + undefined

Falsy 값은 명시된 것들만 알고있으면 되지만 Truethy 값은 무수히 많음. 



  

### 함수

함수는 자주 실행되지 않도록 한다. 따라서 함수의 결과가 반복적으로 사용될 때는 변수에 담아서 사용하는 것이 권장된다. 

#### 함수의 두가지 방식

* 함수 선언 방식 - 기명함수

  ~~~js
  function sum(x, y) {
  	return x + y ;
  }
  ~~~

* 함수 표현 방식 - 익명함수

  ~~~js
  const sum = function (x, y) {
  	return x + y ;
  }
  ~~~

  

#### 매개변수를 지정하지 않는 함수

~~~js
function sum() {
	return arguments[0] + arguments[1]
}
~~~

arguments 키워드를 통해서 외부에서 매개변수로 넣어진 변수들을 관리할 수 있다. 

  

#### 화살표 함수

~~~js
const doubleArrow = (x) => {
	return x * 2;
}

//위 함수는 아래 처럼 사용 가능하다.
const doubleArrow = x => x * 2;

//매개변수가 여러개일 때는 
const doubleArrow = (x, y) => x * 2;

console.log(doubleArrow(7));
~~~

화살표 함수는 일부 내용을 생략해서 축약형으로 함수를 편리하게 작성할 수 있다.
단 함수가 다른 동작을 하지 않고 반환만 하는 경우에만 중괄호 생략이 가능하다. 
객체데이터는 {} 이며 이는 함수의 블록부분을 표현하는 {}와 똑같기 때문에 객체데이터를 반환할 때는 {중괄호}를 (괄호)로 감싸야한다.

  

#### 즉시 실행 함수

IIFE (Immediately-Invoked Function Expression)

함수를 만들자마자 바로 실행할 수 있다. 아래의 두가지 방법중 두번째 방법을 권장. 

~~~js
(function double() {
	return a * 2;
})();

(function double() {
	return a * 2;
}());
~~~

왜 사용하는지는 찾아봐야될듯..

  

#### 호이스팅

Hoisting : 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상

함수 표현 위에서 함수를 호출하는 것은 불가능하지만 함수 선언 위에서 함수를 호출하는 것은 가능하다. 이는 함수 선언이 항상 최상단으로 끌어올려지기 때문이다. 

코드가 맨 윗줄부터 맨 아랫줄 까지 차례로 실행된다는 가정 하에, 함수의 선언부보다 앞에서 함수를 호출하는것은 불가능한 일이다. (C언어등 절차지향 언어에서는 그렇다.) 하지만 자바스크립트는 호이스팅이라는 특성을 가지고 있어서 함수 선언을 어디서 했던지 간에 최상단에서 함수 선언이 이루어진다. 따라서 함수 선언의 위치와 상관 없어 함수 호출이 가능하다. 

  

#### 타이머 함수

* setTimeout(함수, 시간) : 일정 시간 후 함수를 실행
  * 시간의 단위는 밀리세컨드
* setInterval(함수, 시간) : 시간 간격마다 함수를 실행
* clearTimeout() : 설정된 Timeout 함수를 종료
* clearIntercal() : 설정된  Interval 함수를 종료

~~~js
const timer = setInterval(() => {
  console.log('Hello!')
}, 3000);

const h1El = document.querySelector('h1');
h1El.addEventListener('click', () => {
  clearInterval(timer);
});
~~~

  

#### 콜백 (Callback)

함수의 인수로 사용되는 함수

~~~js
function timeout(cb) {
  setTimeout(() => {
    console.log('Hello');
    cb();
  }, 3000)
}

timeout(() => {
  console.log('Done!');
})
~~~

 콜백은 실행 위치를 보장하는 용도로 자주 사용된다. 
timeout 함수의 실행이 끝나면 Done이라는 문자열을 콘솔에 출력하려고 할 때, timeout 함수를 호출한 후에 console.log 를 실행하면 타이머 함수에 부여한 딜레이 시간때문에 console.log가 먼저 실행된 후에 타이머 함수가 실행된다. 이때 타이머 함수를 호출하는 함수의 **인자**로 ```실행시키고 싶은 코드가 담긴 함수```를 받으면 타이머 함수 실행 이후에 그 함수가 호출되는 것을 보장할 수 있다. 



  

### 클래스

####  prototype

~~~js
function User(firtst, last) {
  this.firstName = first;
  this.LastName =last;
}
user.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`
}
const heropy(인스턴스) = new User ('Heropy', 'Park');
//하나의 객체데이터를 리터럴 방식으로 생성하는 것
~~~

모든 객체 인스턴스에서 동일하게 동작하는 메소드는 객체 안에 선언하는 것보다 밖으로 빼내서 메모리에 한번만 저장되게 할 수 있다. 

prototype을 통해서 지정한 메소드는 메모리에 딱 한번만 만들어지며, prototype 앞에 명시되는 생성자가 new키워드를 통해 만들어내는 인스턴스에서 언제든지 그 메소드를 사용할 수 있다. 

생성자 함수는 일반 함수인지, 생성자인지 헷갈릴 수 있기 때문에 파스칼케이스 표기법을 이용한다. 

메소드 표현은 축약형도 존재한다 

~~~js
const user = {
  name: 'HWI',
  printName() { // === printName: function() {
    console.log(`${this.name}`);
  }
};
~~~

  

#### 	 this

일반함수는 **호출 위치**에 따라 this를 정의하며, 화살표 함수는 자신이 선언된 **함수 범위**에서 this를 정의한다. 

* 일반함수 : 호출이 될 때 연결되어진 객체가 this
* 화살표함수 : 자신이 선언된 함수 범위 내에서 this가 정의됨. 호출한 객체에서 this를 찾는 것이 아님!! 

  

#### ES Classes

~~~js
class User {
	constructor(first, last) {
  	this.firstName = first;
  	this.LastName =last;
  }
  getFullName() {
	  return `${this.firstName} ${this.lastName}`
  }
}
~~~

  

#### 상속 (확장)

~~~js
class Vehicle {
  constructor(name, wheel) {
    this.name = name
    this.wheel = wheel
  }
}
class Bicycle extends Vehicle {
  constructor(name, wheel) {
		super(name, wheel) //Vehicle의 constructor가 실행됨
  }
}
class Car extends Vehicle {
  constructor(name, wheel, license) {
		super(name, wheel) //Vehicle의 constructor가 실행됨
    this.license = license
  }
}

~~~



# Javascript Level up

## JS 데이터

구글에서 String Mdn 검색해서 Mdn페이지에 접근하면 다양한 메소드들을 예시와 함께 볼 수 있음.

### 문자 String

string 전역 객체는 문자열의 생성자이다. 원래 new String 생성자를 이용해서 문자열을 만들 수 있지만 우리는 리터럴 방식을 이용해서 문자열을 만들 수 있다. 

리터럴 방식이란 특정한 기호를 통해서 데이터를 만들어 내는 방식이다. Ex ) '문자열' {객체} [배열]

아래는 많이 쓰이는 string method. 출처는 [MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String)

* str.indexOf('some') : 호출한 string 객체에서 주어진 값과 일치하는 첫 번째 인덱스를 반환합니다. 일치하는 값이 없으면 -1을 반환합니다. 

* str.length() :  문자열 길이 반환
* str.slice(beginIndex[, endIndex]) : beginIndex부터 시작해서 endIndex의 직전 까지 문자열의 일부를 추출하면서 새로운 문자열을 반환
* str.replace('some', 'else') : 첫번째 인자가 있는 부분을 두번째 인자의 문자열로 바꾼다.  
* str.match(/.+(?=@)/) : 정규표현식을 인자로 받아서 배열 데이터를 반환
* str.trim() : 공백 삭제



### 숫자와 수학

* float.toFixed(2) :  소수점 자릿수를 인자로 들어온 수만큼 변환. 이 메소드는 숫자 데이터에 사용할 수 있는데 반환값은 문자데이터임에 주의.
* parseInt(문자) : 문자를 정수형으로 변환
* parseFloat(문자) : 문자를 실수형으로 변환

#### Math

math는 수학적인 상수와 함수를 위한 속성과 메서드를 가진 내장 객체, 즉 자바스크립트에 내장되어있는 객체이다.

* Math.abs() : 절대값 반환
* Math.min() : 최소값 반환
* Math.max() : 최대값 반환
* Math.ceil() : 올림 처리  (정수 단위)
* Math.floor() : 내림 처리
* Math.round() : 반올림
* Math.random() : 랜덤 수 반환 

  

### 배열

* arr.find(element => element > 10) : 주어진 판별 함수를 만족하는 첫 번째 요소의 값을 반환하며 그런 요소가 없다면 undefined를 반환한다. 
  배열의 각 값에 콜백 함수 (element => element > 10) 가 실행되고 이 값이 true가 되는 첫 번째 요소 값이 반환된다.
* arr.findIndex(판별 함수) : 주어진 판별 함수를 만족하는 첫 번째 요소의 인덱스를 반환한다.

* arr.length() : 배열 데이터의 아이템 개수를 반환
*  arr.concat(arr2) : arr1과 arr2를 병합해서 새로운 배열 데이터를 반환
* arr.forEach( 함수(element, index, array){  } ) : 배열 데이터의 개수 만큼 콜백 함수가 반복적으로 실행됨. element에 각 아이템이 순서대로 들어간다. 매개변수 이름은 임의로 바꿔도 괜찮다. 
* arr.map( 함수(element, index, array){  } ) : forEach 처럼 각 배열 아이템에 콜백 함수가 반복적으로 실행됨. 단 forEach는 반환값이 없지만 map은 콜백함수 내부에 반환값을 새로운 배열로 만들어서 반환한다. 
* arr.filter(판별 함수) : 판별함수의 반환 값이 true인 경우의 아이템의 데이터들로 구성된 새로운 배열을 만들어준다. 

* arr.includes(데이터) : 배열 데이터 안에  특정 데이터가 포함 되어있는지 아닌지 반환한다.
* arr.push(데이터) : 원본 배열데이터 맨 끝에 특정 데이터를 추가한다.
* arr.unshift(데이터) : 원본 배열데이터 맨 앞에 특정 데이터를 추가한다.
* arr.reverse( ) : 원본 배열데이터의 아이템 인덱스 순서를 뒤집는다. 

* arr.splice(시작인덱스, 지울 아이템 개수) : 원본 배열데이터의  특정 시작 인덱스부터 특정 개수의 아이템을 지운다.
  * arr.splice(시작인덱스, 0 , 추가할 아이템) :  지울 아이템 개수에 0을 넣고 세번째 인자로 추가할 아이템을 넣으면 지정한 시작인덱스에 추가할 아이템을 넣을 수 있다. 만약에 지울 아이템 개수가 0보다 크면 아이템을 삭제한 후에 그 자리에 새로운 아이템을 추가한다. 

  

### 객체

정적 메소드 : prototype에 정의되지 않은 메소드, 리터럴 뒤에 점을 붙여서 직접적으로 메소드를 사용할 수 없다.
객체는 숫자 인덱스를 이용해서 접근할 수 없고 속성의 이름을 통해서 인덱싱이 가능하다. 

* Object.assign(target, source) : source의 속성을 target에 복사한다. 반환 값은 target이며 인자로 들어간 target의 원본과 같은 객체이다!! (즉 원본에 변화가 생기고 그 원본을 반환하는 것) 새로운 객체를 반환하는 것이 아님에 주의 ! 
  * 출처객체는 여러개를 적을 수 있고 만약에 출처객체들을 이용해서 새로운 객체를 만들고 싶다면 맨 앞에 대상 객체 인자를 {}로 넣으면 된다. 
* Object.keys(객체) : 객체 내부의 속성 이름만 추출해서 배열을 생성

  

### 구조 분해 할당 (Destructuring assignment, 비구조화 할당)

~~~js
const user = {
  name: 'Hwi',
  age: 85,
  email: a
}

const { name: newname, age, email, address = 'Korea' } = user;
~~~

name, age, email에 user의 속성값이 입력된다. 

* 꺼내고싶은 속성 : 바꿀 이름 

* 속성 = '기본 값, 객체에서 값을 새로 가져오게되면 갱신됨'

배열 데이터도 구조 분해 할당이 가능. 배열은 꺼내오고 싶은 속성을 적지 않고 순서대로 추출됨. 첫번째 데이터는 필요 없고 두번째 데이터만 필요할 때는 [, b] 이런식으로 첫번째 부분을 비워서 구현 가능하다.

  

### 전개 연산자 (Spread)

전개 연산자는 배열데이터를 쉼표로 구분하는 각각의 아이템으로 전개시켜준다.  

~~~js
fruit = ['Apple', 'Banana', 'Cherry']
  ...fruit ===> 'Apple', 'Banana', 'Cherry'
~~~

배열 데이터 이름 앞에 ... 을 붙여서 사용한다. 
매개변수에도 ...를 사용가능한데 이는  rest parameter 라고 불리며 인수의 개수가 명확하지 않을때 초과되어 들어오는 나머지 인자들을 하나으 배열데이터로 만들어주는 역할을 한다. 

매개변수로 받은 인자들을 객체데이터로 변환할 때, 속성 이름과 값으로 들어올 변수 이름이 같다면 축약형을 사용할 수 있다.

~~~js
a: a ==> a, b: b ==> b
~~~

~~~js
function toObject(a, b, ...c) {
  return {
    a: a,
    b: b,
    c: c
  }
}

const toObject = (a, b, ...c) => ({a, b, c})
~~~

위, 아래 동일한 함수

  

### 불변성 (immutability)

* 원시 데이터 : String, Number, Boolean, undefined, null 
  * 같은 값은 같은 메모리를 공유함
  *  원시 데이터들은 한번 메모리에 생성되면 변하지 않는다. 
  * 원시 데이터들은 값이 다르면 같지 않다고 할 수 있다. ( 메모리 위치가 같지 않음 )
* 참조형 데이터 : Object, Array, Function 
  * 참조형 데이터들은 값이 같아도 데이터 자체는 같지 않을 수 있다. 
  * c에서 포인터 변수를 이용해서 메모리 값을 참조하는 것이랑 비슷함..
  * 만약에 메모리 상관 없이 값만 새로운 변수에 할당하고 싶으면 "복사" 의 개념을 이용해야함

  

### 얕은 복사, 깊은 복사

* 얕은 복사 : 외부 메모리는 달라지지만 내부에 또다른 참조형 데이터들은 복사되지않고 원래 메모리 그대로 들어가는 복사
  * Object.assign({}, 복사할 객체) 
  * 새로운 객체 = {...복사할 객체}

* 깊은 복사 : 내부의 참조형 데이터들도 "복사" 하는 복사

  * loash를 이용해서 복사.

    ~~~js
    const copyUser = _.cloneDeep(user)
    ~~~

    

  

## 데이터 실습

### 가져오기, 내보내기

* Import 할 때 from '이렇게' 따옴표 안에 적으면 node_modules에 설치된 모듈을 의미한다.
* 모듈을 내보내기 할 때는 두가지 방법이 있다.
  * Default export : 이름을 따로 지정하지 않고 내보낸다.
    * 하나의 모듈에서 하나의  default export만 가능하다.
    * named export와 혼용해서 사용 가능하다. 
  * Named export : 이름을 지정해서 내보낸다.
    * Import할 때 import { 이름 } from 파일 의 형식으로 사용해야한다. 중괄호 필요.
    * 가져오는 이름 as 원하는 이름 : 이 방법으로 데이터 이름을 변경할 수 있다. 
    * \* as 객체이름 : 이 방법으로 모듈 안의 모든 데이터를 한번에 가져올 수 있다. 

