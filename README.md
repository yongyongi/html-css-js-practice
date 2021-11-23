# html, css, js 간단 복습

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
