const express = require('express');
const app = express()
const port = 5000

app.get('/test',(req,res) => {
    res.send('Hello World')
})

app.listen(port, () => {
    console.log(`App running ar http://localhost:${port}`)
})