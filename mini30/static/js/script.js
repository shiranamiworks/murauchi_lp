$(function(){
$('.slider01').slick({
    autoplay:true,
    autoplaySpeed:5000,
    slidesToShow: 4,
    dots:true,
    arrows: false,
    responsive: [
      {
        breakpoint: 580,
        settings: {
        slidesToShow: 1,
        centerMode: true,
        },
      },
    ],
});
});
$(function(){
$('.slider02').slick({
    autoplay:true,
    autoplaySpeed:5000,
    slidesToShow: 4,
    dots:true,
    arrows: false,
    responsive: [
      {
        breakpoint: 580,
        settings: {
        slidesToShow: 1,
        centerMode: true,
        },
      },
    ],
});
});

/*$(function() {
  $('.main-visual .mv01')
      .animate({'opacity':'1'}, 1000)
      .animate({'opacity': '0'}, 1200);
  $('.main-contents')
    .animate({'opacity':'1'}, 2000)
    .animate({'top': '0'}, 1000);
});*/

$(function(){
  if($(".change-buttons .button").length){
    $(".change-buttons .button").on("click",function(e){
      e.preventDefault();
      var _target = $(this).data("target");
      $(".change-buttons .button").removeClass("current");
      $(this).addClass("current");
      $(".tab-contents").removeClass("current");
      $(".tab-contents."+_target).addClass("current");
    });
  }
});

$(function(){
  $(window).on("load resize scroll",function(){
    var wh = $(this).scrollTop()+$(this).height()/8*7;
    $(".js-scroll").each(function(){
      var t = $(this).offset().top;
      if(wh >= t){
        $(this).addClass("on");
      }
    });
  });
});

$(function(){
  if($("#top").length){
    $(window).on("scroll resize",function(){
      var _ws = $(this).scrollTop();
      var _wh = $(this).height();
      $(".js-target").each(function(){
        var _ts = $(this).offset().top;
        if(_ts < _ws + _wh / 3 * 2 ){
          $(this).addClass("on");
        }
      });
    }).resize();
  }
});

$(function () {
  $(".slide-txt").slick({
    autoplay: true,
    autoplaySpeed: 0,
    speed: 8000,
    cssEase: "linear",
    slidesToShow: 1.5,
    swipe: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: .8,
        },
      },
    ],
  });
});

$(function() {
    var bannerBtn = $('.fixed-banner');
    bannerBtn.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            bannerBtn.fadeIn();
        } else {
            bannerBtn.fadeOut();
        }
    });

});

$(function() {
  $(".fixed-banner .close").on("click",function(){
    $(window).off('scroll');
    $(".fixed-banner").fadeOut();
  });
});

//ポップアップバナー
$(function(){
  $(window).on("scroll", function ($) {
	if (jQuery(this).scrollTop() > 300) {
		jQuery('.popup').fadeIn(1000);
	} else {
		jQuery('.popup').hide();
	}
});

//ポップアップバナーの閉じるボタンがクリックされた場合の処理
$('.popup-close').on('click', function () {
    $('.popup').addClass('hidden');
});
});



