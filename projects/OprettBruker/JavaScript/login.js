let feil = document.getElementById("wrongEmPs");
feil.style.display = "none";

function handleLogin() {


    let loginPassword = document.getElementById("passwordCheck").value;
    let loginEmail = document.getElementById("emailCheck").value;

    if(localStorage.getItem("userPassword") === loginPassword && localStorage.getItem("userEmail") === loginEmail) {
        console.log("logget inn");
        window.location.href="http://127.0.0.1:5500/HTML/velkommen.html"
    }   
    else{

        if (feil.style.display === "none") {
            feil.style.display = "block";
        }

        if (localStorage.getItem("userPassword") != loginPassword) {
            console.log("Feil passord");
        }

        if (localStorage.getItem("userEmail") != loginEmail) {
            console.log("Feil epost");
        }
    }
}