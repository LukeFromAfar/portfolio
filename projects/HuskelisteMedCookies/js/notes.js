let count = 0;

function sendNote() {

    let noteInnhold = document.getElementById("inputField").value;

    if (noteInnhold == "") {
    alert("Type something in the note");
    }
    else {
    document.getElementById("notes").innerHTML += `
    <p id="${count}">${noteInnhold}</p>
    `;
    count++;

    let notesListe = document.querySelector("#notes");
    console.log(notesListe);

    notesListe.addEventListener("click", (e) => {
        console.log(e.target);
        e.target.remove();
    })
    
    document.getElementById("inputField").value = "";
    }
    

}