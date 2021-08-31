const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())

//load data from poems JSON file into memory
const fs = require('fs')
const rawData = fs.readFileSync('server/poems.json')
const poems = JSON.parse(rawData)


app.get('/api/poems', (request, response) => {

    // validates authentication of requests through special headers. Restricts authorization if these headers are not present
    if(!request.headers.bob || request.headers.bob !== "Bobalooba") {
        return response.status(401).json({error: "Unauthorized"})
    }

    response.json(poems.poems)
})

app.get('/api/poems/:id', (request, response) => {
    const id = Number(request.params.id)

    // validates authentication of requests through special headers. Restricts authorization if these headers are not present
    if(!request.headers.bob || request.headers.bob !== "Bobalooba") {
        return response.status(401).json({error: "Unauthorized"})
    }

    const poem = poems.poems.find(poem => poem.id === id)

    response.json(poem)
})

app.post('/api/poems', (request, response) => {
    const body = request.body

    const generateID = () => {
        const maxID = poems.poems.length > 0
        ? Math.max(...poems.poems.map(p => p.id))
        : 0
        
        return maxID + 1
    }

    // validates authentication of requests through special headers. Restricts authorization if these headers are not present
    if(!request.headers.bob || request.headers.bob !== "Bobalooba") {
        return response.status(401).json({error: "Unauthorized"})
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

app.post('/api/poems/:id', (request, response) => {
    const id = Number(request.params.id)
    // const body = request.body
    const poem = poems.poems.find(poem => poem.id === id)
    const updatedPoem = {...poem, votes: poem.votes + 1}

    // validates authentication of requests through special headers. Restricts authorization if these headers are not present
    if(!request.headers.bob || request.headers.bob !== "Bobalooba") {
        return response.status(401).json({error: "Unauthorized"})
    }

    poems.poems = poems.poems.map(item => 
            item.id !== updatedPoem.id ? item : updatedPoem
    )

    response.json(updatedPoem)
})

const PORT = 3001
app.listen(PORT)