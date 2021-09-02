import React from "react"
import ReactMarkdown from 'react-markdown'
import { useParams, withRouter } from "react-router-dom"

/*
    Poem component for displaying the content of each poem from poems list
*/
const Poem = ({poems, handleVote}) => {

    // gets id of selected poem and finds the matching poem with same id
    const id = Number(useParams().id)
    const poem = poems.find(poem => poem.id === id)

    if (poem) {
        return(
            <div className="poem"> 
                <table>
                    <thead>
                        <tr>
                            <th> {poem.title} </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <ReactMarkdown children={poem.text} />
                                <button onClick={() => handleVote(poem)}> vote ({poem.votes}) </button>
                            </td>
                            
                            
                        </tr>
                    </tbody>
                </table>
                
            </div>
        )
    }
    return <stan> This Poem does not exists</stan>
}


export default withRouter(Poem)