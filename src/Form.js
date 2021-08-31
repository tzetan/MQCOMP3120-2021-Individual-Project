import React, { useState } from 'react';
import {Redirect, useHistory, useRouteMatch, useParams } from "react-router-dom"


/*
    Form component which displays the form and handles the submission 
*/
const Form = ({ submitForm, poems }) => {

    const [newTitle, setNewTitle] = useState("")
    const [newAuthor, setNewAuthor] = useState("")
    const [newText, setNewText] = useState("")

    const [titleError, setTitleError] = useState("")
    const [authorError, setAuthorError] = useState("")
    const [textError, setTextError] = useState("")

    const history = useHistory()

    const errorHandler = () => {
        setTitleError( titleError.length>0 ? "" : "Please set a valid Poem Title")
        setAuthorError( authorError.length>0 ? "" : "Please set a valid Poem Author")
        setTextError( textError.length>0 ? "" : "Please add Poem Text")
        return ((newTitle.length>0) ? true : false)
    }

    const formHandler = (event) => {
        event.preventDefault()

        if (errorHandler()) {

            //handles form submission with the newly added field values
            submitForm({newTitle, newAuthor, newText})
    
            //resets the fields' values
            setNewTitle('')
            setNewAuthor('')
            setNewText('')
            
            console.log(poems)
            //navigates to the newly added poem page
            history.push(`/poems/${poems.length}`)
        }
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
                        <span style={{color: "red"}}> {titleError} </span>
                        <br/>
                </div>

                <div className="six columns">
                    <label> Poem Author:  </label>
                        <input  
                            value={newAuthor}
                            placeholder="name"
                            onChange={(inputText) => setNewAuthor(inputText.target.value)}
                        />
                        <span style={{color: "red"}}> {authorError} </span>
                        <br/>
                </div>

                <label>  Poem Text:  </label>
                <textarea className="u-full-width"
                    value={newText}
                    placeholder="text"
                    onChange={(inputText) => setNewText(inputText.target.value)}
                />
                <br/>
                <span style={{color: "red"}}> {textError} </span>
                <br/>

                <button type="submit" > Add </button>

            </div>

        </form>
    )
}

export default Form