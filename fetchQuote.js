document.getElementById('newQuotebtn').addEventListener('click', function(e) {
    e.preventDefault();
    const quoteEle = document.getElementById('quote');
    const authorEle = document.getElementById('author');
    let url = "https://aditiintechk.github.io/my-apis/haikyuuQuotes.json";
    fetch(url)
        .then(response => {
            if(response.ok) {
                response.json().then(data => {
                    let QuoteData = randomQuote(data);

                    quoteEle.innerText = `"` + QuoteData.quote + `"`;
                    authorEle.innerText = QuoteData.author;
                })
            }
        })
        .catch(err => {
            quoteEle.innerText = `Please Try Again`;
            authorEle.innerText = " ";
        })
})

function randomQuote(data) {
    let randomQ = Math.floor(Math.random() * data.length);
    // console.log(data[randomQ].quote + " by " + data[randomQ].author);
    return {
        quote: data[randomQ].quote,
        author: data[randomQ].author
    }
}
