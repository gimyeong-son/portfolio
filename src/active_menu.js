"use strict";

// 구현 계획
// 1. 모든 섹션 요소들과 메뉴 아이템들을 가지고 온다.
// 2. IntersectionObserver를 사용해서 모든 섹션을 관찰해야 한다.
// 3. 보여지는 섹션에 해당하는 메뉴 아이템을 활성화 시킨다.
// 보여지는 섹션
// - 다수의 섹션이 동시에 보여진다면, 가장 상위의 섹션을 활성화한다.
// - 단, contact 섹션이 보여진다면 가장 마지막 섹션이 활성화 된다.
const sectionIds = [
  "#home",
  "#about",
  "#skills",
  "#work",
  "#testimonial",
  "#contact",
];
const sections = sectionIds.map((id) => document.querySelector(id));
const navItems = sectionIds.map((id) =>
  document.querySelector(`[href="${id}"]`)
);

// false만 6개 들어있는 배열이됨.
const visibleSections = sectionIds.map(() => false);

let activeNavItem = navItems[0];

const options = {
  // 조금만 보여도 true가 되는 문제
  rootMargin: "-20% 0px 0px 0px",
  threshold: [0, 0.98],
};
const observer = new IntersectionObserver(observerCallback, options);

// 모니터링할 아이템 등록
sections.forEach((section) => observer.observe(section));

// 모니터링 등록한 아이템을 어떻게 기능을 할것인지 정하는 콜백함수
function observerCallback(entries) {
  let selectLastOne;

  entries.forEach((entry) => {
    const index = sectionIds.indexOf(`#${entry.target.id}`);
    visibleSections[index] = entry.isIntersecting; // 관측되면 true
    selectLastOne =
      index === sectionIds.length - 1 &&
      entry.isIntersecting &&
      entry.intersectionRatio >= 0.95;

    // console.log(entry.target.id);
    // console.log(index);
    // console.log(entry.target);
    // console.log(entry.isIntersecting);
    // console.log(entry.intersectionRatio);
  });
  //console.log(visibleSections);
  //console.log("무조건 라스트 섹션!!", selectLastOne);

  const navIndex = selectLastOne
    ? sectionIds.length - 1
    : findFirstIntersecting(visibleSections); // 처음으로 true의 인덱스를 반환
  //console.log(sectionIds[navIndex]);
  selectNavItem(navIndex);
}

function findFirstIntersecting(intersections) {
  const index = intersections.indexOf(true);
  return index >= 0 ? index : 0;
}

function selectNavItem(index) {
  const navItem = navItems[index];
  if (!navItem) return;
  activeNavItem.classList.remove("active");
  activeNavItem = navItem;
  activeNavItem.classList.add("active");
}
