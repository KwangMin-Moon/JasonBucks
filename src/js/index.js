// step1 요구사항 구현을 위한 전략
// 1. 글자를 입력한다
// 2. 엔터 확은 확인 버튼을 누르면 추가된다.

const $form = document.querySelector('#espresso-menu-form');
const $input = document.querySelector('#espresso-menu-name');
const $espressoMenuList = document.querySelector('#espresso-menu-list');
const $menuCount = document.querySelector('.menu-count');
let menuCount = 0;

$form.addEventListener('submit', (e) => {
  e.preventDefault();
  const newItem = $input.value;
  if (!newItem) {
    return;
  }
  let $li = document.createElement('li');
  let $modifyingBtn = document.createElement('button');
  $modifyingBtn.textContent = '수정';
  $li.textContent = newItem;
  $espressoMenuList.appendChild($li);
  $li.appendChild($modifyingBtn);
  $input.value = '';
  menuCount++;
  $menuCount.textContent = `총 ${menuCount}개`;
});
