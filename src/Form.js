import React, { useState } from 'react';
import { useHistory } from "react-router-dom"

/*
    Form component which displays the form and handles the submission 
*/
const Form = ({ submitForm, poems }) => {

    // set values and updates its initial state
    const [newTitle, setNewTitle] = useState("")
    const [newAuthor, setNewAuthor] = useState("")
    const [newText, setNewText] = useState("")

    // set error values and updates its initial state
    const [titleError, setTitleError] = useState("")
    const [authorError, setAuthorError] = useState("")
    const [textError, setTextError] = useState("")

    const history = useHistory()
    
    // checks if title, author and text are entered
    const errorHandler = () => {
        setTitleError( newTitle.length>0 ? "" : "Please enter a Poem Title")
        setAuthorError( newAuthor.length>0 ? "" : "Please enter a Poem Author")
        setTextError( newText.length>0 ? "" : "Please add a Poem Text")
        return ((newTitle.length>0) && (newAuthor.length>0) && (newText.length>0) ? true : false)
    }

    const formHandler = (event) => {
        event.preventDefault()

        // only submits form if there is no error
        if (errorHandler()) {

            // handles form submission with the newly added field values
            submitForm({newTitle, newAuthor, newText})
    
            // resets the fields' values
            setNewTitle('')
            setNewAuthor('')
            setNewText('')
            
            // navigates to the newly added poem page
            history.push(`/poems/${poems.length}`)
        }
    }

    return(
        <form onSubmit={formHandler} className="form">
            <div className="row">
                <div className="six columns">
                    <label> Poem Title: </label>
                        <input
                            value={newTitle}
                            placeholder="Insert Title"
                            onChange={(inputText) => setNewTitle(inputText.target.value)}
                        />
                        <br/>
                        {titleError.length>0 ? <span> {titleError} </span> : <></>}
                </div>

                <div className="six columns">
                    <label> Poem Author:  </label>
                        <input  
                            value={newAuthor}
                            placeholder="Insert Name"
                            onChange={(inputText) => setNewAuthor(inputText.target.value)}
                        />
                        <br/>
                        {authorError.length>0 ? <span> {authorError} </span> : <></>}
                </div>

                <label>  Poem Text:  </label>
                <textarea className="u-full-width"
                    value={newText}
                    placeholder="Insert Text (Double space or enter for line breaks)"
                    onChange={(inputText) => setNewText(inputText.target.value)}
                />
                <br/>
                {textError.length>0 ? <span> {textError} </span> : <></>}
                <br/>

                <button type="submit" > Add </button>

            </div>

        </form>
    )
}

export default Form