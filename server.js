const express = require('express')
const app = express();
const PORT = 8080;

app.get('/', (req, res)=>{
    res.send("99 Bottles of beer on the wall")
})

app.get('/:number', (req, res)=>{
    res.send(`<h1>${req.params.number} Bottles of beer on the wall</h1> 
    <a href=/${(req.params.number)-1}> take one down, pass it around</a> 
    <a href=${('/')}> Home</a>`
    )
})


app.listen(PORT, ()=>{
    console.log(`Listening on port: ${PORT}`);
}) 
