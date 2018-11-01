$(".main-navigation li a").on("click", function(){
    $(".main-navigation li a.active").removeClass("active");
    $(this).addClass("active");
})