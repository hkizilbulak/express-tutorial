const express = require('express')
const app = express()
const {products} = require('./data.js')

app.get('/', (req, res) => {
    res.send("<h1>Home page</h1><a href='/api/products'>Product List</a>")
})

app.get('/api/products', (req, res) => {
    const newProducts = products.map(product => {
        const {id, name, image} = product
        return {id, name, image}
    })
    res.json(newProducts)
})

app.get('/api/products/:id', (req, res) => {
    const {id} = req.params
    const product = products.find(product => product.id === Number(id))
    if(product){
        return res.json(product)
    }
    return res.status(404).send('Product not found')
})

app.listen(5001, ()=> {
    console.log('Server is listening port 5001')
})