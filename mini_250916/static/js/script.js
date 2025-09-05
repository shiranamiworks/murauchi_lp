$(function(){
  $('.slider').slick({
      autoplay:true,
      autoplaySpeed:5000,
      slidesToShow: 1,
      dots:true,
      arrows: false,
  });
});

$(function(){
$('.main-visual .mv02')
    .animate({'opacity':'0','left':'-10%'}, 0)
    .animate({'opacity':'1','left':'5%'}, 1000);
$('.main-visual .mv03')
    .animate({'opacity':'0','left':'-10%'}, 0)
    .animate({'opacity':'1','left':'6%'}, 1000);
$('.main-visual .mv04')
    .animate({'opacity':'0','left':'-10%'}, 0)
    .animate({'opacity':'1','left':'6%'}, 1000);
//$('.main-visual .mv03')
//    .animate({'opacity':'0'}, 0)
//    .animate({'left':'-10%'}, 800)
//    .animate({'opacity':'1','left':'6%'}, 1000);
//$('.main-visual .mv04')
//    .animate({'opacity':'0'}, 0)
//    .animate({'left':'-10%'}, 1600)
//    .animate({'opacity':'1','left':'6%'}, 1000);
$('.main-contents')
    .animate({'top':'0'}, 2400)
    .animate({'opacity':'1'}, 2000);
});


$(function(){
	$(window).scroll(function () {
		$('.txt-box div').each(function () {
			boxNum = $(this).attr("class"),
			scrollTop = $(window).scrollTop();
			areaTop = $(this).offset().top;
			if (scrollTop > areaTop) {
				$('.images .' + boxNum).addClass('active');
			} else{
				$('.images .' + boxNum).removeClass('active');
			}
		});
	});
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


$(function(){
	$(window).scroll(function () {
		$('.texts div').each(function () {
			boxNum = $(this).attr("class"),
			scrollTop = $(window).scrollTop();
			areaTop = $(this).offset().top;
			if (scrollTop > areaTop) {
				$('.images .' + boxNum).addClass('active');
			} else{
				$('.images .' + boxNum).removeClass('active');
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

$(function () {
  if ($(".sec02").length) {
    $(window).on("load", function () {});
    $(".buttons a,.buttons span").on("click", function (event) {
      event.preventDefault();
      $(this).siblings("a").addClass("on");
      $(this).siblings("span").addClass("on");
      $(this).removeClass("on");
      $(this).parents(".pull").find("dd").stop(true, true).slideToggle(300);
    });
  }
});