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


  $(window).scroll(function(){
    let scollpos=$(this).scrollTop();
    $("#txt1").text(scollpos);//올릴때html주석걸어서 올리면됨

    //스크롤이 350이상일때 top버튼, 오른쪽 퀵메뉴 보이게 하고 스크롤 올리면 다시 숨김
    if(scollpos > 400){
      $("#scroll_btn").css({"opacity":1});
    }else{
      $("#scroll_btn").css({"opacity":0});
    }
    

    //scroll 1600~2999
    if(scollpos>=350 && scollpos<3000){
      $("#scroll_btn ul .scb1").addClass("active");
      $("#scroll_btn ul .scb1 a .scroll_hover").addClass("active");
    }else{
      $("#scroll_btn ul .sc1").removeClass("active");
      $("scroll_btn ul .scb1 a .scroll_hover").removeClass("active");
    };

    if(scollpos>=350 && scollpos<3000){
      $("#scroll_btn ul .scb2").addClass("active");
      $("#scroll_btn ul .scb2 a .scroll_hover").addClass("active");
    }else{
      $("#scroll_btn ul .sc2").removeClass("active");
      $("scroll_btn ul .scb2 a .scroll_hover").removeClass("active");
    };

    if(scollpos>=350 && scollpos<3000){
      $("#scroll_btn ul .scb3").addClass("active");
      $("#scroll_btn ul .scb3 a .scroll_hover").addClass("active");
    }else{
      $("#scroll_btn ul .sc3").removeClass("active");
      $("scroll_btn ul .scb3 a .scroll_hover").removeClass("active");
    };

  });
