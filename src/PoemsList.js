import React from "react";
import ReactMarkdown from 'react-markdown'


const PoemsList = ({poem}) => {

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
                    {poem.map(poem => 
                        <tr>
                            <td> {poem.title} </td>
                            <td> {poem.author} </td>
                            <td> {poem.votes} </td>
                            <td> vote </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default PoemsList