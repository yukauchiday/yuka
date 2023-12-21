"use strict";

/*---------- GSAP 設定 ----------*/

//存在しない要素を取得しようとするときに出るエラーを非表示にする
gsap.config({
  nullTargetWarn: false,
});

/*---------- ハンバーガーメニュー ----------*/
const hamburger = document.querySelector(".js_hamburger");
const navigation = document.querySelector(".js_nav");
const body = document.querySelector(".js_body");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("is-active");
  navigation.classList.toggle("is-active");
  body.classList.toggle("is-active");
});
/*---------- スライドイン ----------*/
// gsap
//   .timeline()
//   .from(".js_sub-copy", {
//     duration: 0.6,
//     autoAlpha: 0,
//     x: -100,
//   })
//   .from(".js_copy", {
//     duration: 0.6,
//     autoAlpha: 0,
//     x: -100,
//   });

/*---------- オープニングアニメーション ----------*/

gsap.timeline()
  .from(".js_opening-txt", {
    duration: 1.2,
    autoAlpha: 0,
    y: 40,
  }).to(".js_opening", {
    autoAlpha: 0,
    duration: 0.6,
    onComplete: function () {
      body.classList.remove("is-active");
    },
  })
  .from(".js_sub-copy", {
    duration: 0.6,
    autoAlpha: 0,
    x: -100,
  })
  .from(".js_copy", {
    duration: 0.6,
    autoAlpha: 0,
    x: -100,
  });

/*---------- スライドイン単体 ----------*/

gsap.fromTo(
  ".js_service",
  {
    // y値を予め下方向に200pxずらす
    y: 200,
    // 不透明度を0
    autoAlpha: 0,
  },
  {
    // y値を定位置に戻す
    y: 0,
    // 不透明度を0
    autoAlpha: 1,
    // アニメーションの時間
    duration: 0.8,
    // 変化前から変化後までのアニメーションの振る舞い
    ease: "Power4.inOut",
    // スクロールで発火させる
    scrollTrigger: {
      // アニメーションの発火するスクロール位置
      trigger: ".js_service-trigger",
      // スクロール位置の基準（markersをするとscroller-startと表示され、top centerは画面中央）
      start: "top center",
      // 発火するスクロール位置や終了位置をマーカーする
      // markers: true,
    },
    // 同じクラスがついた複数要素を順番にアニメーションする
    stagger: {
      // each: 指定した時間が経過された時に次の要素のアニメーションを開始する
      each: 0.2,
      // amount: アニメーションの総時間（eachかamountのどちらかを指定する）
      // amount: 1,
      // アニメーションする要素の順番
      from: "start",
      // 順番に表示する際のアニメーションスピード
      // ease: "bounce"
    },
  }
);

/*---------- スライドイン 複数----------*/
const items = document.querySelectorAll(".js_h-slide");

items.forEach(function (item, idx) {
  gsap.from(item, {
    // インデックス番号に+1して、2で割った時にあまりが0だったら100%、でなければ-100%に配置する
    x: (idx + 1) % 2 == 0 ? "100%" : "-100%",
    autoAlpha: 0,
    ease: "Power4.inOut",
    scrollTrigger: {
      trigger: item,
      start: "top center",
      // 発火するスクロール位置や終了位置をマーカーする
      // markers: true,
    },
  });
});

//別解答
// const items = document.querySelectorAll(".js_h-slide");

// items.forEach(function (item, idx) {

//   gsap.from(item, {
//     インデックス番号に+1して、2で割った時にあまりが0だったら100%、でなければ-100%に配置する
//     x: function () {
//       if ((idx + 1) % 2 == 0) {
//         return "100%";
//       } else {
//         return "-100%";
//       }
//     },
//     autoAlpha: 0,
//     ease: "Power4.inOut",
//     scrollTrigger: {
//       trigger: item,
//       start: "top center",
//        発火するスクロール位置や終了位置をマーカーする
//        markers: true,
//     },
//   });
// });

/*---------- アコーディオンメニュー ----------*/

const faq = document.querySelectorAll(".js_faq"); //使用するhtml要素を全て取得する

console.log(faq);

faq.forEach(function (element) {
  const faqA = element.querySelector(".js_faq-a");
  element.addEventListener("click", function () {
    if (element.classList.contains("is-active")) {
      // アコーディオンを閉じるときの処理
      // アイコン操作用クラスを切り替える(クラスを取り除く)
      element.classList.toggle("is-active");
      element.querySelector(".js_faq_mark").classList.toggle("is-open");

      // アニメーション実行
      closingAnim(faqA);
    } else {
      // アコーディオンを開くときの処理
      // アイコン操作用クラスを切り替える(クラスを付与)
      element.classList.toggle("is-active");
      element.querySelector(".js_faq_mark").classList.toggle("is-open");

      // アニメーション実行
      openingAnim(faqA);
    }
  });
});

const closingAnim = function (content) {
  gsap.to(content, {
    height: 0,
    opacity: 0,
    duration: 0.4,
    ease: "Power4.inOut",
  });
};

const openingAnim = function (content) {
  // ウィンドウの幅を取得
  const windowWidth = window.innerWidth;

  // paddingの初期値を設定
  let paddingValue = "16px 48px 16px 16px";

  // ウィンドウの幅が1080px以上の場合、paddingを16pxに変更
  if (windowWidth >= 1080) {
    paddingValue = "16px";
  }

  gsap.fromTo(
    content,
    {
      height: 0,
      opacity: 0,
    },
    {
      height: "auto",
      opacity: 1,
      padding: 0, // 条件に基づいて設定されたpadding値を使用
      duration: 0.4,
      ease: "Power4.inOut",
    }
  );
};

/*---------- カルーセルパネル ----------*/

const swiper = new Swiper(".js_case-swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  spaceBetween: 20,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1088: {
      slidesPerView: 3,
      clickable: false,
      allowTouchMove: false,
    },
  },
});
