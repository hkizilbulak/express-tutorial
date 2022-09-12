const express = require('express')
const app = express()

const peopleRouter = require('./routes/people.js')
const authRouter = require('./routes/auth.js')

app.use(express.static('./methods-public'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/api/people', peopleRouter)
app.use('/login', authRouter)

app.listen(5001, ()=> {
    console.log('Server is listening port 5001')
})