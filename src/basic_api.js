const express = require('express')

const products = require('./data')

const app = express()

// localhost Port
const LOCALHOST_PORT = 5000

app.get('/api/products', (req, res) => {
  res.json(products)
})

app.get('/api/products/:productID', (req, res) => {
  const singleProduct = products.find((product) => product.id == Number(req.params['productID']))
  if (!singleProduct) {
    res.json({})
  }
  res.json(singleProduct)
})

app.listen(LOCALHOST_PORT, () => {
  console.log(`Server is running at: http://localhost:${LOCALHOST_PORT}`)
})