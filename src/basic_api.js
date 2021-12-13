const express = require('express')

const products = require('./data')

const app = express()

// localhost Port
const LOCALHOST_PORT = 5000

app.get('/api/products', (req, res) => {
  const { title, limit } = req.query

  let result = [...products]

  if (title) {
    result = result.filter((product) => {
      return product.title.startsWith(title)
    })
  }

  if (limit) {
    result = result.slice(0, Number(limit))
  }

  if (result.length < 1)
    return res.json({ "success": true, data: [] })

  return res.json(result)
})

app.get('/api/products/:productID', (req, res) => {
  const singleProduct = products.find((product) => product.id == Number(req.params['productID']))
  if (!singleProduct) {
    return res.json({})
  }
  res.json(singleProduct)
})

app.listen(LOCALHOST_PORT, () => {
  console.log(`Server is running at: http://localhost:${LOCALHOST_PORT}`)
})