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
