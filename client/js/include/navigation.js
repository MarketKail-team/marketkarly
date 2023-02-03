const category = document.querySelector('.nav__item--category');
const categoryBtn = category.querySelector('button');
const categoryMap = category.querySelector('ul')
function openCategoryMap(){
  categoryMap.classList.replace('category__map', 'category__map--active');
  categoryBtn.classList.replace('category__btn', 'category__btn--active');
}
function closeCategoryMap(){
  categoryMap.classList.replace('category__map--active', 'category__map');
  categoryBtn.classList.replace('category__btn--active', 'category__btn');
}
category.addEventListener('mouseover', openCategoryMap);
category.addEventListener('mouseleave', closeCategoryMap);
// 모듈함수 사용하며 보완 필요
// 접근성 관련 추가 고려 필요 : tab키로 카테고리 버튼에 도달한 경우에도 메뉴가 열리도록 제어