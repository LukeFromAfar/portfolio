let prevScrollpos = window.scrollY;
window.onscroll = function() {
    const currentScrollPos = window.scrollY;
    const nav = document.getElementById("nav");

    // Check if the page is scrollable
    if (document.body.scrollHeight > window.innerHeight) {
        // Page is scrollable
        if (currentScrollPos > 0) {
            nav.classList.add("scrolled");
        } else {
            nav.classList.remove("scrolled");
        }

        // Show/hide navbar based on scroll direction
        if (prevScrollpos > currentScrollPos) {
            nav.style.top = "0";
        } else {
            nav.style.top = "-70px"; // Adjust based on your navbar height
        }
    } else {
        // Page is not scrollable, ensure navbar is visible
        nav.style.top = "0";
        nav.classList.remove("scrolled");
    }

    prevScrollpos = currentScrollPos;
};

// Check navbar visibility on resize
window.addEventListener('resize', () => {
    const nav = document.getElementById("nav");

    if (document.body.scrollHeight <= window.innerHeight) {
        // Page is not scrollable
        nav.style.top = "0";
        nav.classList.remove("scrolled");
    }
});