# html, css, js 간단 복습

- html은 웹 페이지를 구성하는 뼈대이다.
- css는 뼈대 위에 꾸며주는 역할을 한다.
- js는 웹 페이지가 동적으로 작동할 수 있게 함.

### css파일 적용

html의 head태그 안에 밑에와 같은 코드를 삽입해준다.

```html
<link rel="stylesheet" href="./css/main.css" />
```

rel은 stylesheet으로 고정이고, href에는 css파일의 경로를 입력한다.

### js파일 적용

html의 body태그가 끝나는 부분에 밑에와 같은 코드를 삽입해준다.

```html
<script src="./js/start.js" charset="uft-8"></script>
```

html의 head태그나 body태그가 시작되는 부분에서 선언 해도 되지만, 통상적으로 body태그가 끝나는 부분에 선언하는 것을 선호한다. 왜냐 html파일을 읽을때, 위에서부터 아래로 읽게 되는데 js파일의 코드분량이 많다면 js파일을 읽는데 오래 걸리기 때문에 웹페이지가 늦게 띄워질 수 있다. 즉, 로딩이 길어질 수 있기 때문에 js파일을 상단에 import하지 않는것이 좋다.

### 동적 기능만들기(버튼)

js로 페이지를 동적으로 만들기 위해서는 페이지의 부분부분을 선택할 수 있어야 하며 querySelector로 선택할 수 있다.

```js
const main = document.querySelector("#main");
```

document.querySelector는 문서에서 css 선택자에 대응되는 것을 선택해주는 기능이다. 위 코드는 id가 main인 태그를 선택하여 main변수에 저장하는 것이다.

아주 간단히 main이 사라지는 함수를 만들어 본다.

```js
function hideMain() {
  main.style.display = "none";
}
```

이 함수가 동작하기 위해서 html 버튼 태그에 `onclick` 속성을 추가하고, 값으로 `js:hideMain()`을 주면 된다.

```html
<button onclick="js:hideMain()">사라지기</button>
```

이제 사라지기 버튼을 클릭하면, hideMain함수가 실행되고, main태그의 display가 none으로 바뀌면서 화면에서 사라지게 된다.

### 에니메이션

[TCPschool](http://tcpschool.com/css/css3_transform_animation) 참고해서 사용하기

- innerHTML : 태그에 text넣는다.
- createElement : 태그를 만든다.
- classList.add : 태그에 클래스명을 만든다.
- addeventListener : 이벤트 생성

위에와 같은 메서드들은 js에서 html로 접근할 수 있게 해준다.

## 부트스트랩

각각의 디바이스 화면에 맞게 디자인 한 것을 반응형 웹사이트라고 한다. 직접 반응형으로 디자인 할수도 있지만, 코드가 길어지고, css에 대한 이해도가 높아야한다. 이떄, 이미 만들어진 반응형 컴포넌트를 사용할 수 있게 해주는게 부트스트랩이다.

[부트스트랩](https://getbootstrap.com/docs/5.1/getting-started/introduction/)페이지에 있는 css 링크를 복사해서 head태그안에 넣어준다.

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <title>Document</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
  </head>
  <body></body>
</html>
```

이제 부트스트랩을 사용할 수 있게 되었다. 버튼을 하나 생성해보기 위해서 [부트스트랩](https://getbootstrap.com/docs/5.1/components/buttons/) 웹페이지에서 button을 검색하고 원하는 디자인의 코드를 복사해서 붙여 넣으면, 바로 적용이 된다.

<사진>

부트스트랩을 통해 반응형을 적용시키고 싶다면, grid 시스템에 대해서 알아야한다. grid는 웹 페이지를 12등분으로 나눈다고 생각하면 된다. class에 col,row 설정으로 항상 비율을 유지할 수 있다.

```html
<body>
  <div class="col-8" style="background-color: blue">col-8</div>
  <div class="col-4" style="background-color: red">col-4</div>
</body>
```

이렇게 col-8과 col-4를 class 값으로 주면 화면 크기에 따라 8/12, 4/12의 비율을 항상 유지하게 된다.

<사진>

이 뿐 아니라, 해상도에 따라 다르게 적용을 할수도 있다.

[부트스트랩 grid](https://getbootstrap.com/docs/5.1/layout/grid/)을 보면 해상도 별로 어떻게 설정할지에 대해 나와있다.

<사진>

```html
<body>
  <div class="col-8 col-lg-12 col-md-4" style="background-color: blue">
    col-8
  </div>
  <div class="col-4 col-lg-10 col-md-2" style="background-color: red">
    col-4
  </div>
</body>
```

위와 같이 작성하고 화면을 조절하면 해당 해상도에 따라 입력한 col비율이 적용된다. 잘 사용하면 아주 유용하게 쓸 수 있을 것 같다.

부트스트랩을 통해서 margin과 padding도 설정을 할 수 있다. [여기서](https://getbootstrap.com/docs/5.1/utilities/spacing/#notation) 확인해보자.

이미지 크기가 화면을 넘을 경우 밑에와 같은 부트스트랩의 설정으로 사이즈를 조절 할 수 있다.
<img src="..." class="img-fluid" alt="...">

## font 변경시키는 방법

google font를 이용하여 font를 변경할 수 있다. 원하는 폰트를 선택 후, `Select this style`를 클릭하면 `Selected family`가 나오는데 여기서 link태그를 html head태그 안에 붙여넣는다. 그리고 css 부분을 복사하여 적용하고 싶은 선택자에 넣는다. 보통은 전체에 적용하기 때문에 이런식으로 넣어준다.

```css
* {
  font-family: "Concert One", cursive;
}
```

그러면 font가 변경된다.
