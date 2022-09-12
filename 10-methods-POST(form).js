const express = require('express')
const app = express()

app.use(express.static('./methods-public'))
app.use(express.urlencoded({extended: true}))

app.post('/login', (req, res) => {
    const {name} = req.body
    if(name) {
        res.status(200).send(`Welcome there ${name}`)
    } else{
        res.status(401).send('You are unauthorized user')
    }
})

app.listen(5001, ()=> {
    console.log('Server is listening port 5001')
})