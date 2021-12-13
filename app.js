const express = require('express')
const productsRouter = require('./routers/products')

const app = express()

// localhost Port
const LOCALHOST_PORT = 5000

app.use('/api/products', productsRouter)


app.listen(LOCALHOST_PORT, () => {
  console.log(`Server is running at: http://localhost:${LOCALHOST_PORT}`)
})