$(document).ready(function(){
  $(".btn1").click(function(){
    $(".content").slideDown();
  });
});

$(document).ready(function(){
  $(".btn2").click(function(){
    $(".content").slideUp();
  });
});

$(document).ready(function(){
  $(".btn3").click(function(){
    $(".build_content").css('color','black');
    $(".building").show();

  });
});

$(document).ready(function(){
  $(".btn4").click(function(){
    $(".audio").fadeIn();
  });
});
