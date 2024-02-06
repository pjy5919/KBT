$(document).ready(function() {
  // 탭 클릭 이벤트
  $("#tabmenu .textb").click(function() {
    $(this).addClass("active").siblings().removeClass("active");
    $(".contsub1 .content").removeClass("active");
    $("#" + $(this).attr("data-alt")).addClass("active").hide().fadeIn();
  });

  $('.solutioncont ul li').click(function() {
    $(this).addClass("active");
    $(this).siblings().removeClass("active"); 
  });

  // 스크롤 이벤트
  $(window).scroll(function() {
    let pos = $(window).scrollTop();
    $("header, .btn-top").toggleClass('active', pos > 500);
    $("#txt1").text(pos);

    // 스크롤 위치에 따라 요소 표시 여부 설정
    $("#scroll_btn").css({"opacity": pos > 400 ? 1 : 0});
    $("#scroll_btn ul .scb1").toggleClass("active", pos >= 350 && pos < 3000);
    $("#scroll_btn ul .scb2").toggleClass("active", pos >= 350 && pos < 3000);
    $("#scroll_btn ul .scb3").toggleClass("active", pos >= 350 && pos < 3000);
    $("#scroll_btn ul .scb1 a .scroll_hover").toggleClass("active", pos >= 350 && pos < 3000);
    $("#scroll_btn ul .scb2 a .scroll_hover").toggleClass("active", pos >= 350 && pos < 3000);
    $("#scroll_btn ul .scb3 a .scroll_hover").toggleClass("active", pos >= 350 && pos < 3000);
  });

  // 해상도 조절 이벤트
  $(window).resize(function() {
    let w = $(window).width();
    if (w > 768) {
      $(".gnb").removeAttr("style");
      $(".trigger").removeClass("active");
    }
  });

  // 햄버거 메뉴 클릭 이벤트
  $(".trigger").click(function() {
    $(this).toggleClass("active");
    $(".gnb").slideToggle();
  });
});