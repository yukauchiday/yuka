// ふわっと文字出す
//scroll_effect
$(window).scroll(function () {
  var scrollAnimationElm = document.querySelectorAll(".scroll_up");
  var scrollAnimationFunc = function () {
    for (var i = 0; i < scrollAnimationElm.length; i++) {
      var triggerMargin = 100;
      if (
        window.innerHeight >
        scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin
      ) {
        scrollAnimationElm[i].classList.add("on");
      }
    }
  };
  window.addEventListener("load", scrollAnimationFunc);
  window.addEventListener("scroll", scrollAnimationFunc);
});

var access = $.cookie("access");
if (!access) {
  flag = true;
  $.cookie("access", false);
} else {
  flag = false;
}

//モーダル表示
$(".modal-open").modaal({
  // ページロード時に表示するか
  overlay_close: true, //モーダル背景クリック時に閉じるか
  before_open: function () {
    // モーダルが開く前に行う動作
    $("html").css("overflow-y", "hidden"); /*縦スクロールバーを出さない*/
  },
  after_close: function () {
    // モーダルが閉じた後に行う動作
    $("html").css("overflow-y", "scroll"); /*縦スクロールバーを出す*/
  },
});

// 「同意する」のチェックボックスを取得
const agreeCheckbox = document.getElementById("agree");
// 送信ボタンを取得
const submitBtn = document.getElementById("submit-btn");

// チェックボックスをクリックした時
agreeCheckbox.addEventListener("click", () => {
  // チェックされている場合
  if (agreeCheckbox.checked === true) {
    submitBtn.disabled = false; // disabledを外す
  }
  // チェックされていない場合
  else {
    submitBtn.disabled = true; // disabledを付与
  }
});

$(window).on("scroll", function () {
  $(".JS_ScrollAnimationItem").each(function () {
    var position = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > position - windowHeight) {
      $(this).addClass("isActive");
    }
  });
});

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

// ハンバーガー
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

function OpeningAnime() {
  // bodyタグの範囲に対して.is-activeをつけ外しする（ハンバーガーで指定したoverflow:hiddenが効く）
  body.classList.toggle("active");
  gsap
    .timeline()
    .from(".js_opening-txt", {
      duration: 2.5,
      autoAlpha: 0,
      y: 40,
    })
    .to(".js_opening", {
      autoAlpha: 0,
      duration: 1.0,
      onComplete: function () {
        body.classList.remove("active");
      },
    });
}
OpeningAnime();
