
$(function(){
$('.store-list .slider').slick({
    autoplay:true,
    autoplaySpeed:5000,
    dots:true,
    arrows: false,
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

$(function(){
  $(window).on("load resize scroll",function(){
    var wh = $(this).scrollTop()+$(this).height()/8*7;
    $(".ebg").each(function(){
      var t = $(this).offset().top;
      if(wh >= t){
        $(this).addClass("on");
      }
    });
  });
});



window.addEventListener("scroll", function () {
  const elm = document.querySelector(".fixed-banner");
  if(!elm) return;
  const scroll = window.pageYOffset;
  if (scroll > 400) {
    elm.style.opacity = "1";
  } else {
    elm.style.opacity = "0";
  }
});

window.addEventListener("scroll", function () {
  const elm = document.querySelector(".fixed-banner.bnr02");
  if(!elm) return;
  const scroll = window.pageYOffset;
  if (scroll > 400) {
    elm.style.opacity = "1";
  } else {
    elm.style.opacity = "0";
  }
});