const express = require('express')
const app = express()
const {people} = require('./data.js')

app.get('/api/people', (req, res) => {
    res.json({status: true, data: people})
})

app.listen(5001, ()=> {
    console.log('Server is listening port 5001')
})