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


app.post('/api/poems', (request, response) => {
    const body = request.body
    
    const generateID = () => {
        const maxID = poems.poems.length > 0
        ? Math.max(...poems.poems.map(p => p.id))
        : 0
        
        return maxID + 1
    }

    if (!body.title || !body.author || !body.text) {
        return response.status(400).json({
            error: 'title, author or text is missing'
        })
    }

    const newPoem = {
        id: generateID(),
        title: body.title,
        author: body.author,
        text: body.text,
        votes: 0,
    }

    poems.poems = poems.poems.concat(newPoem)
    response.json(newPoem)
})

const PORT = 3001
app.listen(PORT)