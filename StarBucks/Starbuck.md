# 스타벅스 메인 페이지 클론 코딩

## FAVICON

대부분의 브라우저들은 프로젝트 root에 favicon.ico 파일이 있다면 자동으로 파비콘 이미지를 설정한다. (크롬은 아닌듯) 따로 지정하고싶다면 \<head>태그 안에서 아래와 같이 설정 가능하다.

`<link rel="icon" href="./favicon.png">`



## 오픈 그래프 (The Open Graph protocol)

웹 페이지가 소셜 미디어로 공유될 때 우선적으로 활용되는 정보를 지정한다.

~~~html
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Starbucks" />
<meta property="og:title" content="Starbucks Coffee Korea" />
<meta property="og:description" content="스타벅스는 세계에서 가장 큰 다국적 커피 전문점으로, 64개국에서 총 23,187개의 매점을 운영하고 있습니다." />
<meta property="og:image" content="./images/starbucks_seo.jpg" />
<meta property="og:url" content="https://starbucks.co.kr" />
~~~

- `og:type`: 페이지의 유형(E.g, `website`, `video.movie`)
- `og:site_name`: 속한 사이트의 이름
- `og:title`: 페이지의 이름(제목)
- `og:description`: 페이지의 간단한 설명
- `og:image`: 페이지의 대표 이미지 주소(URL)
- `og:url`: 페이지 주소(URL)



## 트위터 카드

~~~python
<meta property="twitter:card" content="summary" />
<meta property="twitter:site" content="Starbucks" />
<meta property="twitter:title" content="Starbucks Coffee Korea" />
<meta property="twitter:description" content="스타벅스는 세계에서 가장 큰 다국적 커피 전문점으로, 64개국에서 총 23,187개의 매점을 운영하고 있습니다." />
<meta property="twitter:image" content="./images/starbucks_seo.jpg" />
<meta property="twitter:url" content="https://starbucks.co.kr" />
~~~

- `twitter:card`: 페이지(카드)의 유형(E.g. `summary`, `player`)
- `twitter:site`: 속한 사이트의 이름
- `twitter:title`: 페이지의 이름(제목)
- `twitter:description`: 페이지의 간단한 설명
- `twitter:image`: 페이지의 대표 이미지 주소(URL)
- `twitter:url`: 페이지 주소(URL)



### 로컬호스트 환경에서 트위터카드 테스트 하는 법

> https://codingjames.ca/how-to-test-twitter-cards-from-localhost/

Ngrok을 이용하여  **secure tunnels**를 생성. 인터넷과 로컬호스트를 쉽게 연결하고 트위터카드를 테스트할 수 있음. 



## 구글 폰트 (Google Fonts)

Google에 Google Fonts 검색하고 들어가면 폰트들 미리보기와 함께 Select this style 버튼을 통해서 html 문서에 폰트를 링크로 연결할 수 있음.

폰트의 용량이 크기때문에, 너무 남발하지 않는 것이 중요함. 꼭 필요한 폰트와 두께만 가져와서 연결할 것.

