import React from "react"
import ReactMarkdown from 'react-markdown'
import {BrowserRouter as Router, Switch, Route, Link, useParams,withRouter} from "react-router-dom"

/*
    Poem component for displaying the content of each poem from poems list
*/
const Poem = ({poems, handleVote}) => {
    //gets id of selected poem and finds the matching with same id
    const id = Number(useParams().id)
    console.log(id)
    const poem = poems.find(poem => poem.id === id)
    console.log(poems)
    console.log(poem)

    if (poem) {
        return(
            <div className="poem"> 
                <table>
                    <th> {poem.title} </th>
                    <tr>
                        <td>
                            <ReactMarkdown children={poem.text} />
                        </td>
                    </tr>
                    <button onClick={() => handleVote(poem)}> vote ({poem.votes}) </button>
                </table>
                
            </div>
        )
    }
    return <stan> This Poem does not exists</stan>
}


export default withRouter(Poem)