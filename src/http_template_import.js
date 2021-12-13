const express = require('express')
const path = require('path')
// localhost Port
const LOCALHOST_PORT = 5000

const app = express()

app.use(express.static('./public'))

app.get('/', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, './public/index.html'))
})

app.all('*', (req, res) => {
  res.status(404).send('404: Not Found Page')
})

app.listen(LOCALHOST_PORT, () => {
  console.log(`Server is running at: http://localhost:${LOCALHOST_PORT}`)
})