$(function() {
  $(".fixed-banner .close").on("click",function(){
    $(".fixed-banner").fadeOut();
  });
    });


$(function(){
$('.slider').slick({
    autoplay:true,
    autoplaySpeed:5000,
    dots:true,
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
