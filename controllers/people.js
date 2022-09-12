const {people} = require('../data.js')

const getPeople = (req, res) => {
    res.json({status: true, data: people})
}

const createPerson = (req, res) => {
    const {name} = req.body
    if(!name) {
        return res.status(400).json({success: false, msg: 'Please provide a name'})
    }

    res.status(201).json({success: true, person: name})
}

const updatePerson = (req, res) => {
    const {id} = req.params
    const {name} = req.body

    const person = people.find(person => person.id === Number(id))

    if(!person) {
        return res.status(404).json({success: false, msg: `No person found with id ${id}`})
    }
    const newPeople = people.map(person => {
        if(person.id === Number(id)) {
            person.name = name
        }
        return person
    })
    res.status(200).json({success: true, people: newPeople})
}

const deletePerson = (req, res) => {
    const {id} = req.params

    const person = people.find(person => person.id === Number(id))

    if(!person) {
        return res.status(404).json({success: false, msg: `No person found with id ${id}`})
    }
    const newPeople = people.filter(person => person.id !== Number(id))  
    
    res.status(200).json({success: true, people: newPeople})
}

module.exports = {getPeople, createPerson, updatePerson, deletePerson}