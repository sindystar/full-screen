const img = document.querySelector(".showBox img");
const btns = document.querySelectorAll(".btns li");

const gallery = document.querySelector("#gallery");
const hOne = gallery.querySelector("h1");
const str = gallery.querySelector("strong");
// //for of 반복문
// for (let el of btns) {
//   el.addEventListener("click", (e) => {
//     e.preventDefault();

//     let clickA = el.querySelector("a");
//     let imgSrc = clickA.getAttribute("href");

//     // el.querySelector("a").getAttribute("href");
//     img.setAttribute("src", imgSrc);
    
//   })
// }

// 기본 for문으로 
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", (e) => {
    e.preventDefault();

    let clickA = btns[i].querySelector("a");
    let imgSrc = clickA.getAttribute("href");

    // el.querySelector("a").getAttribute("href");
    img.setAttribute("src", imgSrc);
  })
}
