# Haikyū Quote Generator

### Design

- Style: Retro
- Application: Figma

![](./resources/screenshot.JPG)

### Code & URL

- [Code](https://github.com/Aditi002-holo/haikyuu-quote-generator)
- [Live URL TBD]()
- [API URL](https://aditi002-holo.github.io/my-apis/haikyuuQuotes.json)

### Code I cherish 

```js
let url = "https://aditi002-holo.github.io/my-apis/haikyuuQuotes.json";
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
```