### 설로인 프로젝트

# 1조 Free Pass

## 👨‍💻 프로젝트 소개

원티드 X 프리온보딩 1주차 두번째 프로젝트 상품 등록 페이지 구현

<p>팀장: 이용우 <br>
팀구성: 김유량, 양주영, 이용우, 홍유진</p>

배포주소 : http://wantedsirloin.s3-website.ap-northeast-2.amazonaws.com/<br>
설치 및 시작방법

- npm i 패키지 설치
- npm start 로컬서버 실행

## ⚙️ Tools

```
- View (React.js, React-Router, Styled-components)
- Build Tool (Create React App)
- Code Quality Tool (Prettier)
- Other Tools (Git, Github, notion, Slack. AWS)
```

<br/>

## <b>기능별 구현 사항</b>

<u>이용우</u>

```
노출 및 판매기간 설정
```

- 라디오버튼 재사용화 고려 컴포넌트 분리
- 달력 라이브러리 재사용성 고려 컴포넌트 분리
- input check 커스텀 훅 적용
- 달력 value값 커스텀 훅 적용
- Nav

<br/>

<br/>

<u>홍유진</u>

```
상품 기본 정보
```

- 카테고리 checkbox의 value 값을 확인하여 오른쪽 UI에 등록 & 삭제 기능
- 필터태그, 상품명, 정보의 input을 저장
- 썸네일, 대표이미지들 저장

```
react 최적화
```

- components에서 view와 로직을 분리
- data에 저장할 때, 스프레드 연산자로 복사하여 데이터의 불변성을 유지하며 저장

<br/>

<u>양주영</u>

```
상품 옵션
```

- 상품 등록시, 필수로 옵션 1개 이상을 등록해야 함.
- 옵션은 옵션세트 추가 버튼을 누르면 등록 가능.
- 옵션세트 내 이미지는 1개만 지정하며, 옵션은 여러개 생성할 수 있음.
- 관리자가 옵션 세트 내 이미지 파일을 첨부하지 않는 경우, 커머스 내에서 이미지 영역이 제거된 상태로 옵션만 노출

```
추가 옵션 상품 등록
```

- 해당 옵션에 추가 옵션상품을 등록할 수 있음.
- 옵션 1개당 여러 개의 추가 옵션 상품을 등록할 수 있음.
- 관리자가 해당 옵션에 추가 옵션 상품을 등록하면, 커머스에서 해당
- 옵션에 속하는 추가 옵션 상품을 사용자가 체크하여 구매할 수 있음

<br/>

```
옵션 내용 등록 영역
```

- 옵션은 옵션 세트 내에서 1개 이상 생성할 수 있음.
- 상품 정상가, 상품판매가, 재고 입력 가능, 과세/비과세 구분하여 타입 지정 가능

<u>김유량</u>

```
상품 배송 설정, 상품 혜택 허용 설정, 기타 설정
```

- on, off 스위치 토글 레이아웃 및 default값 지정 구현
- 사용자 배송일 출발일 지정 on, off 기능 구현
- 선 주문 예약 배송 지정의 data picker 기능 추가
