const express = require('express')
const app = express()
const {products} = require('./data.js')

app.get('/api/products', (req, res) => {
    const {search, limit} = req.query
    let sortedProducts = [...products];

    if(search) {
        sortedProducts = sortedProducts.filter(product => product.name.startsWith(search))
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }

    if(sortedProducts.length === 0) {
        return res.status(404).send('No product found with your search')
    }

    res.json(sortedProducts)
})

app.listen(5001, ()=> {
    console.log('Server is listening port 5001')
})