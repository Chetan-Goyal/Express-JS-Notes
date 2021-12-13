const express = require('express')

const app = express()

// localhost Port
const LOCALHOST_PORT = 5000

function logger(req, res, next) {
  console.log(req.url)
  next();
}

app.get('/', logger, (req, res) => {
  res.send('Home Page')
})

app.listen(LOCALHOST_PORT, () => {
  console.log(`Server is running at: http://localhost:${LOCALHOST_PORT}`)
})