const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3000;

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(cors())

// app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))