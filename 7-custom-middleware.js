const express = require('express')
const app = express()
const logger = require('./middleware/logger.js')

app.use(logger);

app.get('/', (req, res) => {
    res.send('Home Page')
})

app.get('/about', (req, res) => {
    res.send('About Page')
})

app.listen(5001, ()=> {
    console.log('Server is listening port 5001')
})