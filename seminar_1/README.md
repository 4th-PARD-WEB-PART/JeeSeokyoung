과제 1 : Velog 가입 페이지 클론

부제 : React를 사용해 Velog 자기소개 페이지 피그마 보고 클론코딩 해보기

목표 : React의 styled components를 이용하여 코딩을 하였다.

개념 : styled components란?
- CSS를 컴포넌트화 시켜주는 라이브러리

- html + js + css까지 묶어서 하나의 js파일 안에서 컴포넌트 단위로 개발할 수가 있음!!

- 재사용성을 높일 수 있다는 장점이 있다!

애로사항 : 저번에 레포지토리 연결할때 seminar_1으로 만들어서 수정하는 법을 알고 싶다.

빌딩 하는법

레포지토리 클론 및 폴더 이동(./seminar_1/)

git clone https://github.com/4th-PARD-WEB-PART/JeeSeokyoung.git
cd ./seminar_1

패키지 다운받기
npm install

프로젝트 실행
npm start

스크린샷
https://github.com/4th-PARD-WEB-PART/JeeSeokyoung/blob/main/seminar_1/public/img/screenshot.png?raw=true

과제 2 : Velog 피드 페이지 클론

부제 : React를 사용해 Velog 피드 페이지 피그마 보고 클론코딩 해보기

목표 : React의 Hook 라이브러리, Props와 Event를 이용하여 코딩을 하였다.

개념 : 

Hook란?
여러 React 기능ㅇㄹ 사용할 수 있도록 만든 라이브러리

Events란?
사용자가 웹 페이지와 상호 작용할 때 발생하는 사건

Props란?
Component에 전달할 다양한 정보를 담고 있는 자바스크립트 객체

빌딩 하는법

레포지토리 클론 및 폴더 이동(./seminar_1/)

git clone https://github.com/4th-PARD-WEB-PART/JeeSeokyoung.git
cd ./seminar_1

패키지 다운받기
npm install

프로젝트 실행
npm start

스크린샷
https://github.com/4th-PARD-WEB-PART/JeeSeokyoung/blob/main/seminar_1/public/img/screenshot2.png?raw=true

<h1>[과제3] Velog 회원가입, 피드페이지, 디테일페이지 연결하고 만들기</h1>
<h2>📖 소개</h2>
<p>이번 과제는 Velog에 여러 페이지들을 구현하는 것입니다.</p>

<p>목표: 

1. 각 페이지 연결하기
2. 디테일 페이지 구현하기
3. 변수로 데이터 가져오기
</p>

<h2>기능</h2>
<ul>
    <li><strong>Routes, Route</strong>: 페이지간 이동을 하기 위해 사용된다.</li>
    <li><strong>Link</strong>: 피드페이지에서 디테일페이지로, 디테일페이지에서 피드페이지로 가는데 사용된다.</li>
    <li><strong>Nav</strong>: 가입페이지에서 피드페이지로 이동하는데 사용된다.</li>
</ul>


<h2>어려웠던 점</h2>
<p> link에 대해서는 조금 알겠으나 navigate 쓰는것이 어려워 공부가 필요할 것 같다.
<p> 레이아웃을 처음에 세세하게 안짰다고 시간을 너무 많이 소비하여 어려움이 있었고 최대한 세분화하는 것이 좋다는 것을 깨달았다.

<h2>스크린샷</h2>
https://github.com/4th-PARD-WEB-PART/JeeSeokyoung/blob/main/seminar_1/public/img/screenshot3.png?raw=true

## 프로젝트 빌드 방법

### 1. 레포지토리 클론 및 폴더 이동
먼저 프로젝트 레포지토리를 클론하고 해당 폴더로 이동합니다.

```bash
git clone https://github.com/4th-PARD-WEB-PART/JeeSeokyoung.git
cd ./seminar_1


패키지 다운받기
npm install

프로젝트 실행
npm start

<h1>[과제4] Velog 회원가입, 피드페이지, 디테일페이지 수정페이지 연결하고 리코일 이용하여 정보 없데이트 하기</h1>
<h2>📖 소개</h2>
<p>이번 과제는 Velog에 리코일을 사용하여 전역 상태를 관리하는 것입니다.</p>

<p>목표: 

1. 수정 페이지 구현하기
2. 수정 페이지 연결하기
3. 리코일 사용하여 상태 관리하기
</p>

<h2>기능</h2>
<ul>
    <li><strong>Recoil</strong>: Facebook에서 개발한 React 애플리케이션의 전역 상태 관리 라이브러리</li>
    <li><strong>RecoilRoot</strong>: Recoil을 React에서 사용하기 위해 필요한 context를 제공하는 React 컴포넌트</li>
    <li><strong>Atom</strong>: 고유의 키 값과 데이터를 다루는 default 값</li>
    <li><strong>useRecoilState</strong>: Recoil 상태의 현재 값을 읽고 해당 상태를 업데이트하는 데 사용</li>
    <li><strong>EditPage</strong>: Atom.js를 설정하여 recoil을 사용한 정보 업데이트를 하였다.</li>
</ul>


<h2>어려웠던 점</h2>
<p> 처음에 useRecoilState를 useState대신에 써야하는지를 잘 몰라 어려움이 있었다.
<p> RecoilRoot로 감싸줘야 한다는 점과 상태를 업데이트하는 것이 잘 안돼 어려움이 있었다.

<h2>스크린샷</h2>
https://github.com/4th-PARD-WEB-PART/JeeSeokyoung/blob/main/seminar_1/public/img/screenshot4.png?raw=true

## 프로젝트 빌드 방법

### 1. 레포지토리 클론 및 폴더 이동
먼저 프로젝트 레포지토리를 클론하고 해당 폴더로 이동합니다.

```bash
git clone https://github.com/4th-PARD-WEB-PART/JeeSeokyoung.git
cd ./seminar_1


패키지 다운받기
npm install

프로젝트 실행
npm start