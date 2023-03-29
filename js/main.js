const btns = document.querySelectorAll(".btns li");
const boxes = document.querySelectorAll("section article");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", () => {

    // for(let k= 0; k<btns.length; k++){btns[k].classList.remove('on');}
    // //모든 버튼을 순간 on을 모두 제거 하고 
    // btns[i].classList.add('on');
    // //내가 클릭한 대상에 on을 붙이는것 

  //버튼의 활성화 구문  => 어떤 배열? btns배열을 사용한다 
  //모든 버튼을 on을 모두 제거하고 
  // for (let k = 0; k < btns.length; k++) {btns[k].classList.remove("on");}
  // //내가 클릭한 대상버튼에 on을 붙임 
  // btns[i].classList.add("on");
  activation(btns, i);
    // for(let el of btns) {el.classList.remove("on");}
    // btns[i].classList.add("on");

    //박스의 활성화 구문 => 어떤 배열? boxes라는 배열 
    //모든 박스를 on을 모두 제거하고 
    // for (let j = 0; j < boxes.length; j++) {boxes[i].classList.remove("on");}
    // //내가 클릭한 버큰에 해당 하는 박스만 on을 붙임 
    // boxes[i].classList.add("on");
    activation(boxes, i);
    // for (let el of boxes) {el.classList.remove("on"); }
    // boxes[i].classList.add("on");

  })
}

//함수 패키징

function activation(list, index) {
  for (let el of list) {
    el.classList.remove("on");
  }
  list[index].classList.add("on");
}

// 1. 반복문(기본,of)
// 2. 활성화 구문
// 3. 함수 패키징