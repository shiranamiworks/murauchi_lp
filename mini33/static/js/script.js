$(function(){
  $('.slider').slick({
      autoplay:true,
      autoplaySpeed:5000,
      slidesToShow: 4,
      dots:true,
      arrows: false,
  });
});

$(function() {
  if (window.matchMedia('(max-width: 767px)').matches) {
    $('.main-visual .mv02')
      .animate({'width':'70%','opacity':'0'}, 1000)
      .animate({'width': '86%','opacity':'1'}, 1800);
    $('.main-visual .mv03')
      .animate({'opacity':'0'}, 3500)
      .animate({'opacity':'1'}, 10);
    $('.main-visual .mv04')
      .animate({'width':'70%','opacity':'0'}, 5000)
      .animate({'width': '88%','opacity':'1'}, 1800);
  }else if (window.matchMedia('(min-width:768px)').matches) {
  $('.main-visual .mv02')
      .animate({'width':'40%','opacity':'0'}, 1000)
      .animate({'width': '50%','opacity':'1'}, 1600);
  $('.main-visual .mv03')
      .animate({'opacity':'0'}, 3500)
      .animate({'opacity':'1'}, 10);
  $('.main-visual .mv04')
      .animate({'width':'40%','opacity':'0'}, 5000)
      .animate({'width': '54%','opacity':'1'}, 1600);
  }
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

$(function(){
  $(window).on("load resize scroll",function(){
    var wh = $(this).scrollTop()+$(this).height()/8*7;
    $(".zoom").each(function(){
      var t = $(this).offset().top;
      if(wh >= t){
        $(this).addClass("on");
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

$(function() {
  $(".sidenav .close").on("click",function(){
    $(window).off('scroll');
    $(".sidenav").fadeOut();
  });
});

