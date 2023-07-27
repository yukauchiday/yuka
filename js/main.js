"use strict";
/*---------- ハンバーガーメニュー ----------*/
const ham = document.querySelector("#js-hamburger");
const nav = document.querySelector("#js-nav");
const body = document.querySelector(".body");

ham.addEventListener("click", function () {
  ham.classList.toggle("active");
  nav.classList.toggle("active");
  body.classList.toggle("active");
});

const navItems = document.querySelectorAll(".l_header-nav_link");
navItems.forEach((navItem) => {
  navItem.addEventListener("click", () => {
    ham.classList.remove("active");
    nav.classList.remove("active");
    body.classList.remove("active");
  });
});

/*---------- ワイプイン ----------*/
gsap.from(".js_about", {
  duration: 1.5,
  autoAlpha: 0,
  x: 200,
  scrollTrigger: {
    trigger: ".js_about-trigger",
    start: "top center",
  },
});
/*---------- スライドイン（単体） ----------*/

gsap.from(".js_skill", {
  scrollTrigger: {
    trigger: ".js_skill-trigger",
    start: "center bottom",
    end: "center top",
    // markers: true,
  },
  duration: 3,
  y: 200,
  opacity: 0,
  ease: "Power4.inOut",
  stagger: {
    from: "start",
    amount: 1,
  },
});

// gsap.from(".js_about", {
//   scrollTrigger: {
//     trigger: ".js_about-trigger",
//     start: "center bottom",
//     end: "center top",
//     // markers: true,
//   },
//   duration: 2,
//   y: 200,
//   opacity: 0,
//   ease: "Power4.inOut",
// });

/*---------- スライドイン（複数） ----------*/
const items = document.querySelectorAll(".js_h-slide");

items.forEach(function (item, idx) {
  gsap.from(item, {
    // インデックス番号に+1して、2で割った時にあまりが0だったら100%、でなければ-100%に配置する
    x: function () {
      if ((idx + 1) % 2 == 0) {
        return "100%";
      } else {
        return "-100%";
      }
    },
    autoAlpha: 0,
    ease: "Power4.inOut",
    scrollTrigger: {
      // item.parentNode: itemの親要素
      trigger: item.parentNode,
      start: "top center",
      // 発火するスクロール位置や終了位置をマーカーする
      // markers: true,
    },
  });
});
