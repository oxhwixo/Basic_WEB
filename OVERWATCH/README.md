### OVERWATCH 캐릭터 선택  예제

### reset.css

reset.css cdn 검색 --> [reset-css CDN by jsDelivr - A CDN for npm and GitHub](https://www.jsdelivr.com/package/npm/reset-css)

들어가서 copy HTML 하고, HTML문서의 타이틀 부분 밑에 붙여넣기.



### 요소 여러개 한번에 만들기

.id이름 < 의 포맷을 입력하고 엔터치면 자동으로 \<div>태그이면서 명시한 id이름을 가지는 태그 생성이 가능함.

그 옆에 *와 원하는 만큼의 수를 입력하면 여러개의 요소를 한번에 생성 가능!

그 요소가 자식으로 가지는 요소 또한 설정 가능 

**.id이름*n>.자식요소** 의 형태



~~~css
body {
  /* 배경을 추가함 */
	height: 100vh;
  /*높이를 화면 크기에 맞춤 */
	background-image: url("https://raw.githubusercontent.com/ParkYoungWoong/overwatch-hero-selector-vanilla/master/images/bg.jpg");
	background-size: cover;
  /* 백그라운드 이미지의 크기 비율이 가로 혹은 세로중 더 큰 값을 기준으로 맞춰짐 */
	background-repeat: no-repeat;
  /* 백그라운드 이미지 크기보다 화면 크기가 클 때, 반복을 허용하지 않음 */
	background-attachment: fixed;
  /* 스크롤에 따라 배경이 움직이지 않고 화면에 고정됨 */
}

.container{
	padding: 50px 0px;
  /* 영웅들 모아놓은 박스 위아래 여백을 줌. 사실 밑에 여백이랑 합쳐도 될 듯? */
}

.container .heroes {
	display: flex;
  /* 자식 요소들이 수평 정렬될 수 있도록 만들어준다. */
	flex-wrap: wrap; 
  /* 자식 요소들이 flex로 인해 수평으로 정렬되면 줄바꿈 없이 한 줄에 쌓이게 되는데 줄바꿈을 해주기 위해서 wrap으로 설정 */
	justify-content: center;
  /* flex의 주 축을 기준으로 정렬하는 방법을 선택. 가운데 정렬로 설정 */
	max-width: 700px;
  /* 가로의 최대 사이즈를 설정. 최소 사이즈는 없음! */
	margin: auto;
  /* 블럭요소에 가로사이즈가 있는 상태에서 margin이 auto라면 화면에 가운데 정렬이 된다. */
	padding: 40px 20px;
  /* 영웅들 모아놓은 박스에 여백을 주고 싶어서 내부여백설정  */
}

.container .heroes .hero {
	width: 80px;
	height: 84px;
  /* 각각 hero 요소들의 가로,세로 너비 설정 */
	margin: 4px;
  /* 각각의 사이에 거리를 두기 위해 외부 여백 설정 */
	border: 3px solid #fff;
  /* 테두리 값 설정 */
	border-radius: 10px;
  /* 모서리 둥글게 */
	box-sizing: border-box;
  /* margin, border등의 설정으로 인해 원래 설정한 크기 값이 변하지 않도록 하는 설정 */
	background-color: #555;
	overflow: hidden;
  /* 하위 요소가 더 클 경우 넘침을 허용하지 않는 설정 */
	transform: skewX(-14deg);
  /* 기울임 */
	transition:
		transform .1s,
    /* transform 속성은 0.1초의 딜레이 설정 */
		background-color .6s;
}
.container .heroes .hero:hover  {
	background-color: #ff9c00;
	transform: scale(1.3) skewX(-14deg);
  /* 마우스가 올라가면 크기가 커지게 만들기. skewX는 상위에서 설정한 적이 있지만 가상 선택자 안에서 transform 속성을 다시 사용하며 초기화 되었기 때문에 다시 적어주어야 함 */
	z-index: 1;
  /* 가장 앞에 나오게 설정 */
}

.container .heroes .hero .image {
	width: 140%;
	height: 100%;
  /* 부모 요소의 값을 기준으로 배율 */
	background-position: center;
	background-size: 90px;
	background-repeat: no-repeat;
	transform: skewX(14deg) translateX(-16px);
  /* 상위 요소에 의해 기울어짐이 상속되는데 그것을 없애기 위해 반대로 기울여주고 왼쪽으로 옮기기 위해 translateX 사용 */
}

.container .heroes .hero:nth-child(1) .image { background-image: url(https://raw.githubusercontent.com/ParkYoungWoong/overwatch-hero-selector-vanilla/master/images/hero1.png); }
.container .heroes .hero:nth-child(2) .image { background-image: url(https://raw.githubusercontent.com/ParkYoungWoong/overwatch-hero-selector-vanilla/master/images/hero2.png); }
.container .heroes .hero:nth-child(3) .image { background-image: url(https://raw.githubusercontent.com/ParkYoungWoong/overwatch-hero-selector-vanilla/master/images/hero3.png); }
.container .heroes .hero:nth-child(4) .image { background-image: url(https://raw.githubusercontent.com/ParkYoungWoong/overwatch-hero-selector-vanilla/master/images/hero4.png); }
.container .heroes .hero:nth-child(5) .image { background-image: url(https://raw.githubusercontent.com/ParkYoungWoong/overwatch-hero-selector-vanilla/master/images/hero5.png); }
.container .heroes .hero:nth-child(6) .image { background-image: url(https://raw.githubusercontent.com/ParkYoungWoong/overwatch-hero-selector-vanilla/master/images/hero6.png); }
.container .heroes .hero:nth-child(7) .image { background-image: url(https://raw.githubusercontent.com/ParkYoungWoong/overwatch-hero-selector-vanilla/master/images/hero7.png); }
.container .heroes .hero:nth-child(8) .image { background-image: url(https://raw.githubusercontent.com/ParkYoungWoong/overwatch-hero-selector-vanilla/master/images/hero8.png); }
.container .heroes .hero:nth-child(9) .image { background-image: url(https://raw.githubusercontent.com/ParkYoungWoong/overwatch-hero-selector-vanilla/master/images/hero9.png); }
.container .heroes .hero:nth-child(10) .image { background-image: url(https://raw.githubusercontent.com/ParkYoungWoong/overwatch-hero-selector-vanilla/master/images/hero10.png); }
.container .heroes .hero:nth-child(11) .image { background-image: url(https://raw.githubusercontent.com/ParkYoungWoong/overwatch-hero-selector-vanilla/master/images/hero11.png); }
.container .heroes .hero:nth-child(12) .image { background-image: url(https://raw.githubusercontent.com/ParkYoungWoong/overwatch-hero-selector-vanilla/master/images/hero12.png); }
.container .heroes .hero:nth-child(13) .image { background-image: url(https://raw.githubusercontent.com/ParkYoungWoong/overwatch-hero-selector-vanilla/master/images/hero13.png); }
.container .heroes .hero:nth-child(14) .image { background-image: url(https://raw.githubusercontent.com/ParkYoungWoong/overwatch-hero-selector-vanilla/master/images/hero14.png); }
.container .heroes .hero:nth-child(15) .image { background-image: url(https://raw.githubusercontent.com/ParkYoungWoong/overwatch-hero-selector-vanilla/master/images/hero15.png); }
.container .heroes .hero:nth-child(16) .image { background-image: url(https://raw.githubusercontent.com/ParkYoungWoong/overwatch-hero-selector-vanilla/master/images/hero16.png); }
.container .heroes .hero:nth-child(17) .image { background-image: url(https://raw.githubusercontent.com/ParkYoungWoong/overwatch-hero-selector-vanilla/master/images/hero17.png); }
.container .heroes .hero:nth-child(18) .image { background-image: url(https://raw.githubusercontent.com/ParkYoungWoong/overwatch-hero-selector-vanilla/master/images/hero18.png); }
.container .heroes .hero:nth-child(19) .image { background-image: url(https://raw.githubusercontent.com/ParkYoungWoong/overwatch-hero-selector-vanilla/master/images/hero19.png); }
.container .heroes .hero:nth-child(20) .image { background-image: url(https://raw.githubusercontent.com/ParkYoungWoong/overwatch-hero-selector-vanilla/master/images/hero20.png); }
.container .heroes .hero:nth-child(21) .image { background-image: url(https://raw.githubusercontent.com/ParkYoungWoong/overwatch-hero-selector-vanilla/master/images/hero21.png); }
.container .heroes .hero:nth-child(22) .image { background-image: url(https://raw.githubusercontent.com/ParkYoungWoong/overwatch-hero-selector-vanilla/master/images/hero22.png); }
.container .heroes .hero:nth-child(23) .image { background-image: url(https://raw.githubusercontent.com/ParkYoungWoong/overwatch-hero-selector-vanilla/master/images/hero23.png); }
.container .heroes .hero:nth-child(24) .image { background-image: url(https://raw.githubusercontent.com/ParkYoungWoong/overwatch-hero-selector-vanilla/master/images/hero24.png); }
.container .heroes .hero:nth-child(25) .image { background-image: url(https://raw.githubusercontent.com/ParkYoungWoong/overwatch-hero-selector-vanilla/master/images/hero25.png); }
.container .heroes .hero:nth-child(26) .image { background-image: url(https://raw.githubusercontent.com/ParkYoungWoong/overwatch-hero-selector-vanilla/master/images/hero26.png); }
.container .heroes .hero:nth-child(27) .image { background-image: url(https://raw.githubusercontent.com/ParkYoungWoong/overwatch-hero-selector-vanilla/master/images/hero27.png); }
.container .heroes .hero:nth-child(28) .image { background-image: url(https://raw.githubusercontent.com/ParkYoungWoong/overwatch-hero-selector-vanilla/master/images/hero28.png); }
.container .heroes .hero:nth-child(29) .image { background-image: url(https://raw.githubusercontent.com/ParkYoungWoong/overwatch-hero-selector-vanilla/master/images/hero29.png); }
.container .heroes .hero:nth-child(30) .image { background-image: url(https://raw.githubusercontent.com/ParkYoungWoong/overwatch-hero-selector-vanilla/master/images/hero30.png); }
.container .heroes .hero:nth-child(31) .image { background-image: url(https://raw.githubusercontent.com/ParkYoungWoong/overwatch-hero-selector-vanilla/master/images/hero31.png); }
.container .heroes .hero:nth-child(32) .image { background-image: url(https://raw.githubusercontent.com/ParkYoungWoong/overwatch-hero-selector-vanilla/master/images/hero32.png); }

.container .logo {
	max-width: 300px;
	margin: auto;
	padding: 0 20px;
}

.container .logo  img{
	width: 100%;
}
~~~



## 복습

* overflow 속성은 이미지를 삽입하는 선택자가 아니라 그 상위 선택자!! 부모선택자에 적용해야함!!

* border 값들은 쉼표로 구분하지 않음
* transform 함수들은 쉼표로 구분함
