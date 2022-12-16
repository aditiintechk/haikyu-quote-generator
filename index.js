import express from "express";
const app = express();
const port = 3000;

// change this to public
app.use(express.static('public'));

// app.get('/', (req,res) => {
//     res.render('index.html');
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


