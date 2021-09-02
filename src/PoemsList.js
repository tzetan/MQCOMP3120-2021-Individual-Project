import React from "react";
import ReactMarkdown from 'react-markdown'
import { Link } from "react-router-dom"


/*
    Poem list component for displaying a list of poems in a table
    Displays poem previews and clicking on the title or preview will navigate to individual poem page
*/
const PoemsList = ({poems}) => {

    //sorts the poems list in decending order
    poems.sort((a, b) => a.votes < b.votes ? 1 : -1)

    return (
        <div>
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
                            <td className="title">  <Link to={`/poems/${poem.id}`}> {poem.title} </Link> </td>
                            <td> 
                                {/* displays poem text preview with less than 50 characters */}
                                <ReactMarkdown 
                                    children={poem.text.length > 50 ?
                                        `${poem.text.substring(0, 50)}......` : poem.text
                                    } 
                                />
                                <Link to={`/poems/${poem.id}`}> Show More </Link>
                            </td>
                            <td> {poem.author} </td>
                            <td> {poem.votes} </td>
                        </tr>
                    )}
                    </>
                </tbody>
            </table>
        </div>
    )
}

export default PoemsList