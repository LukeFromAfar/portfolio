var prevScrollpos = window.scrollY;

window.onscroll = function() {
    var currentScrollPos = window.scrollY;
    var nav = document.getElementById("nav");

    // Change navbar color based on scroll position
    if (currentScrollPos > 0) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }

    // Show/hide navbar based on scroll direction
    if (prevScrollpos > currentScrollPos) {
        nav.style.top = "0";
    } else {
        nav.style.top = "-70px";
    }

    prevScrollpos = currentScrollPos;
};