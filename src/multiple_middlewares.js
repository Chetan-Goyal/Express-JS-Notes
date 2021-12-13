const express = require('express')
const logger = require('./logger')
const authBarrier = require('./authBarrier')

// localhost Port
const LOCALHOST_PORT = 5000

const app = express()
app.use([logger, authBarrier])

app.get('*', (req, res) => {
  res.send('Home Page')
})

app.listen(LOCALHOST_PORT, () => {
  console.log(`Server is running at: http://localhost:${LOCALHOST_PORT}`)
})