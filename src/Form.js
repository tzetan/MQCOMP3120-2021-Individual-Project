import React, { useState } from 'react';
import {Redirect, useHistory, useRouteMatch, useParams } from "react-router-dom"

const Form = ({ submitForm, poems }) => {

    const [newTitle, setNewTitle] = useState('')
    const [newAuthor, setNewAuthor] = useState('')
    const [newText, setNewText] = useState('')
    const history = useHistory()

    const formHandler = (event) => {
        event.preventDefault()

        submitForm({newTitle, newAuthor, newText})
        setNewTitle('')
        setNewAuthor('')
        setNewText('')
        
        console.log(poems)
        history.push(`/poems/${poems.length}`)
    }

    return(
        <form onSubmit={formHandler}>
            <div className="row">
                <div className="six columns">
                    <label> Poem Title: </label>
                        <input
                            value={newTitle}
                            placeholder="title"
                            onChange={(inputText) => setNewTitle(inputText.target.value)}
                        />
                </div>

                <div className="six columns">
                    <label> Poem Author:  </label>
                        <input  
                            value={newAuthor}
                            placeholder="name"
                            onChange={(inputText) => setNewAuthor(inputText.target.value)}
                        />
                </div>

                <label>  Poem Text:  </label>
                <textarea className="u-full-width"
                    value={newText}
                    placeholder="text"
                    onChange={(inputText) => setNewText(inputText.target.value)}
                />

                <button type="submit" > Add </button>

            </div>

        </form>
    )
}

export default Form