function scriptOdev() {

    //open modal window 

    var modal = document.getElementById("modal");
    if(modal != null){
        modal.style.display = "block";
    } 

    //close modal window

    
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

