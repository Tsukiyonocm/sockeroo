// Scroll to nav section onclick
$("a[href^='#'").on("click", function(e){
    var target = $(this.getAttribute("href"));
    console.log(target);
    e.preventDefault();

    $("html, body").animate({
        scrollTop: $($(this).attr("href")).offset().top
    }, 1000);
})

