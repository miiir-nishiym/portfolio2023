// JavaScript
//console.log('Hello world!');

/*
Background Gradients From -- 
https://uigradients.com
*/





// IE、Safari対応
// smoothscroll.js読み込み
// https://github.com/iamdustan/smoothscroll

// セレクタ名（.pagetop）に一致する要素を取得
const topbutton = document.querySelector(".topbutton");

// .pagetopをクリックしたら
topbutton.addEventListener("click", scroll_top);

// ページ上部へスムーズに移動
function scroll_top() {
  window.scroll({ top: 0, behavior: "smooth" });
}

// スクロールされたら表示
window.addEventListener("scroll", scroll_event);
function scroll_event() {
  if (window.pageYOffset > 300) {
    topbutton.style.opacity = "1";
  } else if (window.pageYOffset < 100) {
    topbutton.style.opacity = "0";
  }
}






//実行する機能
const show = (entries, obs) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting){
        const keyframes = {
          opacity: [0, 1],
          translate: ['-100px 0',0]
        }
        entry.target.animate(keyframes,600);

        //一度表示されたら止める
        obs.unobserve(entry.target);
    }
    });
  }

//監視の設置
const observer = new IntersectionObserver(show);

//監視対象の指示
const images = document.querySelectorAll('.works_img');
images.forEach(img =>{
  observer.observe(img);
});






//ローディング
// 定数の定義
const loading = document.getElementById('loading');

// cssクラスを追加する関数
function animation(){
  loading.classList.add('loaded');
}

//画面が読み込まれたら animation を呼び出す
//window.addEventListener('load', animation);

// 指定秒後に動作させる
window.setTimeout( animation, 2000 );
