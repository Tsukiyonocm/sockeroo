// Scroll to nav section onclick
$("a[href^='#'").on("click", function(e){
    var target = $(this.getAttribute("href"));
    console.log(target);
    e.preventDefault();

    $("html, body").animate({
        scrollTop: $($(this).attr("href")).offset().top
    }, 1000);
})


let section = document.querySelectorAll(".scroll");
let sections = {};
let threshold = 30;

section.forEach(function(e){
    // console.log(e.id, e.offsetTop);
    sections[e.id] = e.offsetTop;
})

window.onscroll = function(){
    let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
    for (let i in sections){
        if(sections[i] <= scrollPos + threshold){
            document.querySelector(".active").setAttribute("class", "nav-link");
            document.querySelector("a[href*="+i+"]").setAttribute("class", "active nav-link");
        }
    }
}

$(window).scroll(function(){
    if($(window).scrollTop() + $(window).height() > $(document).height() - 200){
        $("#scroll_down").hide();
    }
    else {
        $("#scroll_down").show();
    }
})