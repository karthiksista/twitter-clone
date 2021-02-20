const express = require('express')
const mongoose = require('mongoose')
require('dotenv/config')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express();
app.use(cors())
app.use(bodyParser.json())
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('CONNECTED YO')
})

const tweetsRoute = require('./routes/tweets')
app.use('/tweets', tweetsRoute)

app.get('/', (req, res) => {
    res.send('YO NIGGA')
})


app.listen(4000);