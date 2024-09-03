let category = "money";

const getQuote = async () => {
    
    let category = document.getElementById("categoryInputField").textContent;

    if (category == undefined) {
        category = "money";
        return category;
    }

    const url = 'https://api.api-ninjas.com/v1/quotes?category=' + category;
    let headers = new Headers({
    'X-Api-Key': 'kxtFWPMd9+e4d2TCEJdiXg==FM0sdZR1qb3ZEIz9',
    'Content-Type': 'application/json'
});

fetch(url, { method: 'GET', headers: headers })
    .then(response => response.json())
    .then(data => {
        document.getElementById("quote-ct").innerHTML = `${data[0].quote}`;
        document.getElementById("author-ct").innerHTML = `${data[0].author}`;

    })
    .catch(error => console.error('Error:', error));
};


const genButton = document.getElementById("generateButton");

genButton.addEventListener("click", () => {
    getQuote();
})

