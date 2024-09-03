let feilPassord = document.getElementById("wrongPassword");
feilPassord.style.display = "none";

let feilLenght = document.getElementById("wrongLength");
feilLenght.style.display = "none";

function handleSubmit() {
    console.log("handling submit");

    let email = document.getElementById("email").value;
    let passord1 = document.getElementById("nyttPassord1").value;
    let passord2 = document.getElementById("nyttPassord2").value;

    if(passord1 === passord2) {

        if (passord1.length >= 4) {
            console.log("Vellykett");
        localStorage.setItem("userPassword", passord1)
        localStorage.setItem("userEmail", email)

        window.location.href="http://127.0.0.1:5500/index.html";
        }
        else {
            console.log("Ikke langt nok passord");

            if (feilLenght.style.display === "none") {
                feilLenght.style.display = "block";
            }
            if (feilPassord.style.display === "block") {
                feilPassord.style.display = "none";
            }
        }

    }
    else{
        console.log("Ikke samme passord!");

        if (feilPassord.style.display === "none") {
            feilPassord.style.display = "block";
        }
        if (feilLenght.style.display === "block") {
            feilLenght.style.display = "none";
        }
    }
}
