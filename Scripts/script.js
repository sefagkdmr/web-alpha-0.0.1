
let sozler = [
    "Bilginin efendisi olmak için çalışmanın uşağı olmak şarttır. (Balzac)",
    "Nerede olursanız olun, elinizdekilerle yapabileceklerinizi yapın. (Alex Morrison)",
    "Başarısız olmak zordur, ancak başaramaya çalışmamış olmak daha da zordur. (Theodore Roosevelt)",
]
let soz = sozler[Math.floor(Math.random() * sozler.length)]

document.getElementById("rand-text").innerHTML = soz;




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

$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#scroll').fadeIn();
        } else {
            $('#scroll').fadeOut();
        }
    });
    $('#scroll').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
});

$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
});
