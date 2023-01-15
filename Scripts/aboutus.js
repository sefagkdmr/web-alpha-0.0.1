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

function seyfoModal () {
    
    var modal = document.getElementById("modal");
    if(modal != null){
        modal.style.display = "block";
    } 
    
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var span = document.getElementsByClassName("close")[0];
if(span != null){
    span.onclick = function() {
        modal.style.display = "none";
    }
}