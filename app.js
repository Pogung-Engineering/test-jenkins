const express = require('express')
const app = express()
const port = 6767

app.get('/', (_, res) => {
  res.send('Just test jenkins!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})