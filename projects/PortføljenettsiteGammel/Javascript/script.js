
var coll = document.getElementsByClassName("collapsible");
    var i;

for (i = 0; i < coll.length; i++) {
coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
    content.style.maxHeight = null;
    } else {
    content.style.maxHeight = content.scrollHeight + "px";
    } 
});
}


let imageArray = ["../img/BildeGalleri/IMG_1514.JPG", "../img/BildeGalleri/IMG_1613.JPG", "../img/BildeGalleri/IMG_1662.JPG", "../img/BildeGalleri/PNGLightPower.png"];

// document.getElementById("bildegalleri").style.width = "50vw";

function imageSlider() {
    imageArray.forEach(element => {
        // document.getElementById("bildegalleri").src=element;
        document.getElementById("bildegalleri").innerHTML += `
        <img src=${element} id="libraryImg" ></img>
        <style>
            #libraryImg {
                width: 100%;
                height: 80vh;
                scroll-snap-align: center;
                display: inline-block;
                margin-right: 18vw;
                margin-left: 18vw;
            }
        
        </style>
        `   
        

    });
}


imageSlider();