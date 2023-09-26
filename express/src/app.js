const express = require('express')
const cors = require('cors')
const askrouter=require("./routes/askroutes")

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('hallo hai server is started')
})
app.use('/api/ask',askrouter)


module.exports = app
