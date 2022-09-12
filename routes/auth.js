const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
    const {name} = req.body
    if(name) {
        res.status(200).send(`Welcome there ${name}`)
    } else{
        res.status(401).send('You are unauthorized user')
    }
})

module.exports = router