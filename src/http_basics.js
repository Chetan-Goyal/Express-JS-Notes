const express = require('express')

// localhost Port
const LOCALHOST_PORT = 5000

const app = express()

app.get('/', (req, res) => {
  res.status(200).send('GET request to the homepage')
})

app.get('/about', (req, res) => {
  res.status(200).send('GET request to the About Page')
})

app.all('*', (req, res) => {
  res.status(404).send('404: Not Found Page')
})

app.listen(LOCALHOST_PORT, () => {
  console.log(`Server is running at: http://localhost:${LOCALHOST_PORT}`)
})