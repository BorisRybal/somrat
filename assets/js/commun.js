$(document).ready(function(){



// Animation Intro

function animIntro() {



setTimeout(function(){
    $("path, rect, polygon").each(function(){
    var id = $(this).attr("class");
    var num = (300 + Math.floor(Math.random() * 300)) / 300;
    $(this).css({"transition": "transform " + num +"s ease-out"})
    $(this).addClass(id + "--active");
  })

}, 800);

setTimeout(function(){
    $(".wrapper_animationIntro").animate({"background-color": "rgba(255,255,255,0)"}, { duration: 800, queue: false });
    $(".wrapper_animationIntro").delay(100).fadeOut(500);
}, 3300);
  
}


$(".wrapper_animationIntro").addClass("animated fadeInUp");
  if(typeof(sessionStorage.getItem("welcomeShown")) != null && sessionStorage.getItem("welcomeShown") != "true"){
    animIntro();
    sessionStorage.setItem("welcomeShown","true");
  }else{
  	$(".wrapper_animationIntro").hide();
  }

$(window).keydown(function (e){
    if(e.keyCode == 13){
        sessionStorage.clear();
    }
})


// Menu

$(".menu").hover(
  function() {
    $( this ).addClass( "menu--active" );
  }, function() {
    $( this ).removeClass( "menu--active" );
  }
);

$(".menu_mobile").click(function(){
  $(".menu li").toggleClass("li--active");
  $(this).addClass("menu_mobile--active");
  $(".cross_menu_mobile").toggleClass("cross_menu_mobile--active");
});


// controle a-propos

$(".row_apropos").click(function(){
  if ($(window).width() < 980){
  $(this).find(".toggle_apropos").slideToggle();
  $(this).find(".cross_apropos_mobile").toggleClass("cross_apropos_mobile--active");
  }
});

$(window).resize(function(){
  if ($(window).width() > 980){
    $(".row_apropos").find(".toggle_apropos").slideDown();
    $(".cross_apropos_mobile").removeClass("cross_apropos_mobile--active")
  }
});




});
