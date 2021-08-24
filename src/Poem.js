import React from "react"
import ReactMarkdown from 'react-markdown'
import {BrowserRouter as Router, Switch, Route, Link, useParams,withRouter} from "react-router-dom"


const Poem = ({poems}) => {
    const id = Number(useParams().id)
    console.log(id)
    const poem = poems.find(poem => poem.id === id)
    console.log(poems)
    console.log(poem)

    if (poem) {
        return(
            <div> 
                <ReactMarkdown children={poem.text} />
                
            </div>
        )
    }
    return 'Not Found'
}


export default withRouter(Poem)