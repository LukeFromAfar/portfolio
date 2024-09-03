
function allowCookies() {
    console.log("Accepted");
    document.getElementById("cookieContainer").style.display = "none";
    document.cookie = "cookieAccept=true; expires=Wed, 14 Feb 2024 12:00:00 UTC";
    checkCookie();
}

function denyCookies() {
    console.log("Denied");
    document.getElementById("cookieContainer").style.display = "none";
    document.cookie = "cookieAccept=false; expires=Wed, 14 Feb 2024 12:00:00 UTC";
    checkCookie();
}


function checkCookie() {
    let cookie = document.cookie;
    console.log(cookie);

    if (cookie === "cookieAccept=true") {
        document.querySelector("body").style.background = "#c95858";
    }
    else if (cookie === "cookieAccept=false") {
        document.querySelector("body").style.background = "#ffffff";
    }
}

checkCookie();

function openCookies() {
    
}