const express = require('express')
const path = require('path')
const app = express();

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'navbar-app', 'index.html'))
})

app.all('*', (req, res) => {
    res.status(404).end('resource not found')
})

app.listen(5001, () => {
    console.log('Server is listening port 5001')
})