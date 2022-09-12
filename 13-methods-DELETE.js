const express = require('express')
const app = express()
const {people} = require('./data.js')

app.use(express.json())

app.delete('/api/people/:id', (req, res) => {
    const {id} = req.params

    const person = people.find(person => person.id === Number(id))

    if(!person) {
        return res.status(404).json({success: false, msg: `No person found with id ${id}`})
    }
    const newPeople = people.filter(person => person.id !== Number(id))  
    
    res.status(200).json({success: true, people: newPeople})
})

app.listen(5001, ()=> {
    console.log('Server is listening port 5001')
})