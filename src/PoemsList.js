import React from "react";
import ReactMarkdown from 'react-markdown'


const PoemsList = ({poem, handleVote}) => {

    poem.sort((a, b) => a.votes < b.votes ? 1 : -1)

    return (
        <div>
                {/* {poem.title} {poem.author}  {poem.votes}   */}
            <table className="u-full-width">
                <thead>
                    <tr>
                        <th> Poem Title </th>
                        <th> Author Name </th>
                        <th> Votes </th>
                    </tr>
                </thead>
                <tbody>
                    <>
                    {poem.map(poem => 
                        <tr key={poem.id}>
                            <td> {poem.title} </td>
                            <td> {poem.author} </td>
                            <td> <ReactMarkdown children={poem.text} /> </td>
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