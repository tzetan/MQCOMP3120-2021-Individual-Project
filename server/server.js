const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())

const fs = require('fs')
const poemsJSON = fs.readFileSync('server/poems.json')
const poems = JSON.parse(poemsJSON)


app.get('/api/poems', (request, response) => {
    response.json(poems.poems)
})



const PORT = 3001
app.listen(PORT)