
let sozler = [
    "Bilginin efendisi olmak için çalışmanın uşağı olmak şarttır. (Balzac)",
    "Nerede olursanız olun, elinizdekilerle yapabileceklerinizi yapın. (Alex Morrison)",
    "Başarısız olmak zordur, ancak başarmaya çalışmamış olmak daha da zordur. (Theodore Roosevelt)",
]
let soz = sozler[Math.floor(Math.random() * sozler.length)]

document.getElementById("rand-text").innerHTML = soz;

yonlendir = function(url) {
    window.location = url;
}
var y;
$(document).ready(function() {
    $("#ucgen").addClass("fa fa-plus")
    y = 0;
})
$(".icon-bars").click(function() {
    if(y == 0) {
        $("#ucgen").removeClass("fa fa-plus")
        $("#ucgen").toggleClass("fa fa-times")
        y = 1;
    } else {
        $("#ucgen").removeClass("fa fa-times")
        $("#ucgen").addClass("fa fa-plus")
        y = 0;
    }
})

if ($(".text-slider").length == 1) {
    var typed_strings = $(".text-slider-items").text();
    var typed = new Typed(".text-slider", {
        strings: typed_strings.split(", "),
        typeSpeed: 50,
        loop: true,
        backDelay: 900,
        backSpeed: 30,
    });
}