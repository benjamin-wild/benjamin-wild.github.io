// Active elements for Education portion of Website

$(document).ready(async function () {
  show_content();
});

async function show_content(){
    var tags = document.getElementsByClassName("course")
    var i = 0;

    for(i = 0; i < tags.length; i++){
        tags[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        } ); 
    }
}
