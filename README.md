## 유용한 웹사이트

1. 이미지를 자르는등

- https://www.iloveimg.com/crop-image

2. png to ico

- https://convertio.co/

3. 이미지를 동그라미로 변환

- https://crop-circle.imageonline.co/

4. Color

- https://m2.material.io/design/color/the-color-system.html#color-theme-creation

5. 물결 스타일링

- https://www.shapedivider.app/

6. 그라디언트

- https://cssgradient.io/

7. svg

- http://svgbackgrounds.com/

8. Color Picker 크롬 익스텐션

- Ultimate Color Picker

9. 타이핑 효과 라이브러리

- https://www.typeitjs.com/

10. 디자인 참고

- https://dribbble.com/shots/popular

## 기본 CSS

### Relative vs Absolute

- position: relative
  - 원래 자기 위치를 기준으로 이동
  - 자기 자신의 원래 위치(정상 흐름)를 기준으로 top, left, right, bottom 값을 적용한다.
  - 하지만 원래 자리(space)는 그대로 남아 있다 (즉, 보이지 않는 공간 차지).
- position: absolute
  - 부모 요소가 relative, absolute, fixed일 경우, 그 부모를 기준으로 이동
  - absolute는 부모 요소의 position: relative; 기준으로 움직인다.
  - 만약 부모 요소가 relative가 아니라면, <html>(문서 전체) 기준으로 이동한다.

### Sticky vs Fixed

- sticky
  - 부모 요소의 영역 내에서만 고정된다.
  - 스크롤을 내리다가 특정 위치에 도달하면 고정되지만, 부모 요소의 끝을 넘어서면 다시 스크롤된다.
  - top, left, right, bottom 등의 속성을 함께 사용해야 효과가 나타난다.
- fixed
  - 뷰포트(브라우저 화면 전체)에 대해 절대적인 위치를 유지한다.
  - 스크롤을 해도 계속 같은 위치에 머무른다.
  - 부모 요소와 관계없이 화면 전체에서 고정된다.

### 정렬 테크닉

- alignment-block
  - margin: auto;
- alignment-inline
  - text-align: center;
- alignment-text
  ```css
  .box {
    width: 200px;
    height: 100px;
    background-color: grey;
    text-align: center;
  }
  .text {
    line-height: 100px; // 부모의 높이와 동일하게 설정하면 수직정렬 된다.
  }
  ```
- alignment-translate
  ```css
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  ```
- alignment-flex
  ```css
  display: flex;
  justify-content: center;
  align-items: center;
  ```

### 반응형 백그라운드

```css
.box1 {
  background-image: url("https://media.swncdn.com/cms/BST/67912-gettyimages-817147678-kieferpix.1200w.tn.webp");
  background-repeat: no-repeat; /* 반복하지않음 */
  background-position: center; /* 이미지의 중간을 표시 */
  background-size: cover; /* 반응적 */
}
.box2 {
  /* 축약형 */
  background: center/cover no-repeat
    url("https://media.swncdn.com/cms/BST/67912-gettyimages-817147678-kieferpix.1200w.tn.webp");
}
```

### 트랜스포머

```css
.box1 {
  transform: translateX(100px);
}
.box2 {
  /*왼쪽으로 50px 위로 20px*/
  transform: translate(-50px, -20px);
}
.box3 {
  /* 크기 증가 */
  transform: scale(1.2);
}
.box4 {
  /* 회전 */
  transform: rotate(45deg);
}
.box5 {
  transform: translate(100px, 100px) scale(2) rotate(15deg);
}
```

### 트랜지션

```css
.box {
  width: 100px;
  height: 100px;
  margin: 20px;
  background-color: pink;
  /* transition: background-color 300ms linear; */
  transition: all 300ms linear;
}
.box1:hover {
  background-color: blueviolet;
}
.box2:hover {
  border-radius: 100%;
  background-color: cornflowerblue;
}
.box3:hover {
  border-radius: 50%;
  transform: translateX(400px);
  background-color: blue;
}
```

### 애니메이션

```css
.box {
  width: 100px;
  height: 100px;
  margin: 20px;
  background-color: chocolate;
  /* 
          infinite 무제한 반복 
          alternate 반대로 돌아가 자연스럽다.
        */
  animation: 3s infinite alternate slidein;
}
@keyframes slidein {
  0% {
    border-radius: 0%;
    background-color: aquamarine;
  }
  50% {
    background-color: pink;
  }
  100% {
    border-radius: 100%;
    background-color: hotpink;
  }
}
```

### css 변수

```css
:root {
  --background-color: darkslategrey;
  --text-color: whitesmoke;
  --font-size: 1.5rem;
}
.first-list {
  background-color: var(--background-color);
  color: var(--text-color);
  font-size: var(--font-size);
  margin-left: 8px;
}
.second-list {
  background-color: var(--background-color);
  color: var(--text-color);
  font-size: var(--font-size);
  margin-left: 16px;
}
@media screen and (max-width: 768px) {
  :root {
    --background-color: darkslateblue;
    --text-color: whitesmoke;
    --font-size: 1.2rem;
  }
}
```

### HTML 데이터

```css
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Data Attributes</title>
    <style>
      div {
        width: 100px;
        height: 100px;
        background-color: tomato;
        margin-bottom: 50px;
      }
      div[data-display-name="dream"] {
        background-color: beige;
      }
    </style>
  </head>
  <body>
    <!-- data-xx 를 사용해서 커스텀 data- 를 만들 수 있다. -->
    <div data-index="1" data-display-name="dream">드림!!</div>
    <div data-index="2" data-display-name="coding"></div>
    <span data-index="1" data-display-name="dream">드림!!</span>
    <script>
      const dream = document.querySelector('div[data-display-name="dream"]');
      console.log(dream.dataset);
      console.log(dream.dataset.displayName); // data- 는 사라지고 카멜케이스 방식으로 변경된다.
      console.log(dream.dataset.index);
    </script>
  </body>
</html>
```
