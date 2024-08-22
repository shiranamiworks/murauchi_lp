$(function(){
$('.slider').slick({
    autoplay:true,
    autoplaySpeed:5000,
    dots:true,
});
});

$(function() {
  $('.main-visual .mv01')
      .animate({'opacity':'1'}, 1000)
      .animate({'opacity': '0'}, 1200);
  $('.main-contents')
    .animate({'opacity':'1'}, 2000)
    .animate({'top': '0'}, 1000);
});

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
  $(".mv-slide").slick({
    autoplay: true,
    autoplaySpeed: 0,
    speed: 20000,
    cssEase: "linear",
    slidesToShow: 1,
    swipe: false,
    arrows: false,
  });
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

$(function () {
  $(".animation_box.box01").css("visibility", "hidden");
  $(window).scroll(function () {
    var windowHeight = $(window).height(),
      topWindow = $(window).scrollTop();
    $(".animation_box.box01").each(function () {
      var targetPosition = $(this).offset().top;
      if (topWindow > targetPosition - windowHeight + 100) {
        $(this).addClass("fadeInDown01");
      }
    });
  });
});
$(function () {
  $(".animation_box.box02").css("visibility", "hidden");
  $(window).scroll(function () {
    var windowHeight = $(window).height(),
      topWindow = $(window).scrollTop();
    $(".animation_box.box02").each(function () {
      var targetPosition = $(this).offset().top;
      if (topWindow > targetPosition - windowHeight + 100) {
        $(this).addClass("fadeInDown02");
      }
    });
  });
});
$(function () {
  $(".animation_box.box03").css("visibility", "hidden");
  $(window).scroll(function () {
    var windowHeight = $(window).height(),
      topWindow = $(window).scrollTop();
    $(".animation_box.box03").each(function () {
      var targetPosition = $(this).offset().top;
      if (topWindow > targetPosition - windowHeight + 100) {
        $(this).addClass("fadeInDown03");
      }
    });
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


