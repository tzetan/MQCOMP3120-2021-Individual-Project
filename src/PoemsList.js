import React from "react";
import ReactMarkdown from 'react-markdown'
import {BrowserRouter as Router, Switch, Route, Link, useParams} from "react-router-dom"


const PoemsList = ({poems, handleVote}) => {

    poems.sort((a, b) => a.votes < b.votes ? 1 : -1)

    return (
        <div>
                {/* {poem.title} {poem.author}  {poem.votes}   */}
            <table className="u-full-width">
                <thead>
                    <tr>
                        <th> Title </th>
                        <th> Poem Preview </th>
                        <th> Author Name </th>
                        <th> Votes </th>
                    </tr>
                </thead>
                <tbody>
                    <>
                    {poems.map(poem => 
                        <tr key={poem.id}>
                            <td>  <Link to={`/poems/${poem.id}`}> {poem.title} </Link> </td>
                            {/* <td> <ReactMarkdown children={poem.text} /> </td> */}
                            <td> 
                                <ReactMarkdown 
                                    children={poem.text.length > 50 ?
                                        `${poem.text.substring(0, 50)}......` : poem.text
                                    } 
                                />
                                <Link to={`/poems/${poem.id}`}> Show More </Link>
                            </td>
                            <td> {poem.author} </td>
                            <td> {poem.votes} </td>
                            <td> <button onClick={() => handleVote(poem)}> vote </button> </td>
                        </tr>
                    )}
                    </>
                </tbody>
            </table>
        </div>
    )
}

export default PoemsList