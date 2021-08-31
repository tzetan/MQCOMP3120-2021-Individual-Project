import React from "react"
import ReactMarkdown from 'react-markdown'
import {BrowserRouter as Router, Switch, Route, Link, useParams,withRouter} from "react-router-dom"

/*
    Poem component for displaying the content of each poem from poems list
*/
const Poem = ({poems}) => {
    //gets id of selected poem and finds the matching with same id
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