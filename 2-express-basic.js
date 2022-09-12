const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Homepage')
})

app.get('/about', (req, res) => {
    res.send('About page')
})

app.all('*', (req, res) => {
    res.status(404).send('resource not found')
})

app.listen(5001, () => {
    console.log('Server is listening port 5001')
})