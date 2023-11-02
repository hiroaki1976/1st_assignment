// jsを記述する際はここに記載していく
$(function () {
    $('#slick_slider').slick(
        {
        dots:true,//ドット部分（Swiperでいうページネーション）
        autoplay: true,//自動でスライドさせる
        autoplaySpeed: 1000,//次の画像に切り替えるまでの時間
        cssEase: 'linear',//動きの種類は等速に
        arrows: false,//左右に出る矢印を非表示
        swipe: false,//スワイプ禁止
        }
        );
    });