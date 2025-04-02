// Header에 페이지 아래로 스크롤시 다크 스타일링을 적용한다.
const header = document.querySelector(".header");
// const headerHeight = header.getBoundingClientRect().height; // 소수점까지 정확하게 알려준다.
const headerHeight = header.offsetHeight; // 소수점까지 정확하지 않아도 된다면
document.addEventListener("scroll", () => {
  if (window.scrollY > headerHeight) {
    header.classList.add("header--dark");
  } else {
    header.classList.remove("header--dark");
  }
});

// Home 센션을 아래로 스크롤시 투명하게 처리함
const home = document.querySelector(".home__container");
const homeHeight = home.offsetHeight;
document.addEventListener("scroll", () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});
