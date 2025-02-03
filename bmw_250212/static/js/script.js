
$(function(){
$('.store-list .slider').slick({
    autoplay:true,
    autoplaySpeed:5000,
    dots:true,
    arrows: false,
});
});

$(function(){
$('.mv-txt.pc')
    .animate({'bottom':'12%'}, 1000)
    .animate({'opacity':'1'}, 800);
});
$(function(){
$('.mv-txt.sp')
    .animate({'bottom':'8%'}, 1000)
    .animate({'opacity':'1'}, 800);
});

$(function() {
  if($('#top').length){
    var scurrent = 0;
    var flg = location.hash == "#top" ;
    var _sId;
    var _topmv_s = function(n){
      clearTimeout(_sId);
      _sId = setTimeout(function(){
          _topmv_s();
      },7500);
      var l = (typeof n == "undefined")  ?  scurrent+1 : n ;
      if( l >= $(".slides li").length ) l = 0;
      $(".slides li.on").removeClass("on");
      $(".slides li").eq(l).addClass("on");
      $(".thumbs li.on").removeClass("on");
      $(".thumbs li").eq(l).addClass("on");
      scurrent = l;
    }
    $(".thumbs li").on("click",function(){
      clearTimeout(_sId);
      var l = $(".thumbs li").index(this);
      _topmv_s(l);
    })
//    if(flg){
//      $(".movie").hide();
//      _sId = setTimeout(function(){
//        _topmv_s();
//      },2000);
//    }else{
//      $(".movie .pc,.movie .sp").on("ended",function(){
//        $(".movie").fadeOut(800,function(){
//          _sId = setTimeout(function(){
//            _topmv_s();
//          },2000);
//        });
//      });
//
//    }
  }
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
    var bannerBtn = $('.fixed-banner.pc');
    bannerBtn.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
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
  if (scroll > 50) {
    elm.style.opacity = "1";
  } else {
    elm.style.opacity = "0";
  }
});

window.addEventListener("scroll", function () {
  const elm = document.querySelector(".fixed-banner.bnr02");
  if(!elm) return;
  const scroll = window.pageYOffset;
  if (scroll > 50) {
    elm.style.opacity = "1";
  } else {
    elm.style.opacity = "0";
  }
});

$(function () {
  $(window).scroll(function () {
    $('.animetion').each(function () {
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight) {
        $(this).addClass('active');
      } else {
        $(this).removeClass('active');
      }
    });
  });
});


$(function(){
  var setAnim = $('.animate');
  $(window).on('scroll resize',function(){
    var setHeight = 300;
    setAnim.each(function(){
      var setThis = $(this),
          setElm = $(this).find('.animate-elm');
      elmTop = setThis.offset().top,
      scrTop = $(window).scrollTop(),
      winHeight = $(window).height();
      if (scrTop > elmTop - winHeight + setHeight){
        setElm.addClass('show');
      }
    });
  });
});


$(function(){
  $('.slider01').slick({
    autoplay: true,
    autoplaySpeed: 0,
    speed: 5000,
    cssEase: "linear",
    slidesToShow: 4,
    swipe: false,
    arrows: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  });
});

$(function () {
  $(window).on("resize load scroll", function () {
    const ws = $(this).scrollTop() + ($(this).height() / 3) * 2;
    $(".open-bg").each(function () {
      if ($(this).offset().top < ws) {
        $(this).addClass("anime");
      }
    });
  });
});
