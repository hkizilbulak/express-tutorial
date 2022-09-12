const express = require('express')
const app = express()
const {people} = require('./data.js')

app.use(express.static('./methods-public'))
app.use(express.json())

app.get('/api/people', (req, res) => {
    res.json({status: true, data: people})
})

app.post('/api/people', (req, res) => {
    const {name} = req.body
    if(!name) {
        return res.status(400).json({success: false, msg: 'Please provide a name'})
    }

    res.status(201).json({success: true, person: name})
})

app.listen(5001, ()=> {
    console.log('Server is listening port 5001')
})