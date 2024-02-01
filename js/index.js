$(document).ready(function(){
    $("#tabmenu .textb").click(function(){
      $(this).addClass("active"); // 선택한 탭의 클래스 생성
      $(this).siblings().removeClass("active"); //선택한 탭의 나머지 탭은 클랙스 삭제

      $(".contsub1 .content").removeClass("active");
      $("#"+$(this).attr("data-alt")).addClass("active").hide().fadeIn();
    });
  });

  $(document).ready(function(){
    $(window).scroll(function(){

      let pos=$(window).scrollTop();
      if(pos>500){
        $("header, .btn-top").addClass('active');
      }else{
        $("header, .btn-top").removeClass('active');
      }
    });
  });

  $(document).ready(function() {
    $('.solutioncont ul li').click(function() {
      $(this).addClass("active"); // 선택한 탭의 클래스 생성
      $(this).siblings().removeClass("active"); //선택한 탭의 나머지 탭은 클랙스 삭제
    });
  });

