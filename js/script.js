$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > 300){
            $(".bgTrans").css({"opacity":"1"});
        }
    })
})