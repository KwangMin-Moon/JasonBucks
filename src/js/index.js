// step1 요구사항 구현을 위한 전략
// 1. 글자를 입력한다
// 2. 엔터 확은 확인 버튼을 누르면 추가된다.

// const $form = document.querySelector('#espresso-menu-form');
// const $input = document.querySelector('#espresso-menu-name');
// const $espressoMenuList = document.querySelector('#espresso-menu-list');
// const $menuCount = document.querySelector('.menu-count');
// let menuCount = 0;

// $form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const newItem = $input.value;
//   if (!newItem) {
//     return;
//   }
//   let $li = document.createElement('li');
//   let $modifyingBtn = document.createElement('button');
//   $modifyingBtn.textContent = '수정';
//   $li.textContent = newItem;
//   $espressoMenuList.appendChild($li);
//   $li.appendChild($modifyingBtn);
//   $input.value = '';
//   menuCount++;
//   $menuCount.textContent = `총 ${menuCount}개`;
// });

// step1 요구사항 구현을 위한 전략
// TODO 메뉴 추가
// - [ ] 메뉴의 이름을 입력 받고 엔터키 입력으로 추가한다.
// - [ ] 메뉴의 이름을 입력 받고 확인 버튼을 클릭하면 메뉴를 추가한다.
// - [ ] 추가되는 메뉴의 마크업은 `<ul id="espresso-menu-list" class="mt-3 pl-0"></ul>` 안에 삽입한다.
// - [ ] 총 메뉴 갯수를 count하여 상단에 보여준다.
// - [ ] 메뉴가 추가되고 나면, input은 빈 값으로 초기화한다.
// - [ ] 사용자 입력값이 빈 값이라면 추가되지 않는다.

// TODO 메뉴 수정
// - [ ] 메뉴의 수정 버튼 클릭 이벤트를 받고, 메뉴 수정하는 모달창이 뜬다.
// - [ ] 모달창에서 신규메뉴명을 입력 받고, 확인버튼을 누르면 메뉴가 수정된다.

// TODO 메뉴 삭제
// - [ ] 메뉴 삭제 버튼 클릭 이벤트를 받고, 메뉴 삭제 컨펌 모달창이 뜬다.
// - [ ] 확인 버튼을 클릭하면 메뉴가 삭제된다.
// - [ ] 총 메뉴 갯수를 count하여 상단에 보여준다.

const $ = (selector) => document.querySelector(selector);

function App() {
  $('#espresso-menu-form').addEventListener('submit', (e) => {
    e.preventDefault();
  });

  $('#espresso-menu-name').addEventListener('keypress', (e) => {
    if (e.key !== 'Enter') {
      return;
    }
    if ($('#espresso-menu-name').value === '') {
      alert('값을 입력해 주세요!');
      return;
    }
    const espressoMenuName = $('#espresso-menu-name').value;
    const menuItemTemplate = (espressoMenuName) => {
      return `
        <li class="menu-list-item d-flex items-center py-2">
  <span class="w-100 pl-2 menu-name">${espressoMenuName}</span>
  <button
    type="button"
    class="bg-gray-50 text-gray-500 text-sm mr-1 menu-edit-button"
  >
    수정
  </button>
  <button
    type="button"
    class="bg-gray-50 text-gray-500 text-sm menu-remove-button"
  >
    삭제
  </button>
</li>
        `;
    };

    $('#espresso-menu-list').insertAdjacentHTML(
      'beforeend',
      menuItemTemplate(espressoMenuName)
    );

    const menuCount = $('#espresso-menu-list').querySelectorAll('li').length;
    $('.menu-count').innerHTML = `총 ${menuCount}개`;
    $('#espresso-menu-name').value = '';
  });
}

App();
