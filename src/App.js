import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown'
import {BrowserRouter as Router, Switch, Route, Link, useHistory, withRouter} from "react-router-dom"
import Form from './Form';
import Poem from './Poem';
import PoemsList from './PoemsList';
import axiosService from './Services/axiosServices';
// import './App.css';

function App() {

  const [poems, setPoems] = useState([])
  const [submitted, setSubmitted] = useState(false)
  const history = useHistory()

  
  //adds a new poem to the poems list
  const addPoem = ({newTitle, newAuthor, newText, path}) => {


    const newPoem = {
      title: newTitle,
      author: newAuthor,
      text: newText,
      votes: 0,
    }

    axiosService.addList(newPoem)
      .then(items => {
        // history.push(`/poems/${items.id}`)
        console.log("POST response: ", items)
        setPoems([...poems, items])
        // history.push("/")
        console.log("new poem added", newPoem)
        setSubmitted(true)
        // history.push("/")
        console.log(submitted)
        // path = `/poems/${items.id}`
      })
      .catch(() => {
        alert("There was a problem adding the poem")
      })
      // .then(items =>{
        // console.log("POST response: ", items)
        // history.push(`/poems/${items.id}`)
        // console.log(submitted)

      // })
      console.log(submitted)

      // history.push("/")
      // history.push(`/poems/${newPoem.id}`)
    // if (submitted) {
    //   return(
    //     history.push(`/poems/${newPoem.id}`)
    //   )
    // }
    // axiosService.getPoem(newPoem)
  }

  // const clickHandler = () => {
  //   history.push("/")
  // }
  // const navigateTo = (path) => {
  //   history.push(path)
  // }

  //adds an upvote for the poem with specific id 
  const addVote = (poem) => {
    const newPoem = {...poem, votes: poem.votes + 1}

    axiosService.updateVotes(newPoem)
      .then(item => {
        const newPoems = poems.map(poem => 
            poem.id !== item.id ? poem : item)
        //updates poems state with newly added poem
        setPoems(newPoems)
      })
      .catch(() => {
        alert("There was a problem updating the upvotes")
      })
  }

  //return and renders a list of poem records
  useEffect(() => {
    axiosService.getList()
      .then(items => {
        console.log("we have a response", items)
        //updates empty state with poems retrieved from backend server
        setPoems(items)
      })
      .catch(() => {
        alert("There was a problem listing the poems")
      })
  },
  [])

  // const markdown = `Just a link: https://reactjs.com.  
  // this is the 2nd line`

  return (
    <Router>
      <div className="App">

        <div>
          <Link to="/"> Home </Link>
          <Link to="/form"> Form </Link>
        </div>
  
        <header className="App-header">
          <h2> POETRY </h2>
        </header>

        <Switch>
          
          <Route path="/poems/:id">
            <Poem poems={poems}/>
          </Route>

          <Route path="/form">
            <Form poems={poems} submitForm={addPoem} />
          </Route>

          <Route path="/">
            <PoemsList poems={poems} handleVote={addVote} />
            {/* <ol> {poems.map((poem) => (<PoemsList key={poem.id} poem={poem} />))} </ol> */}
            {/* <ReactMarkdown children={markdown} /> */}
          </Route>

        </Switch>
  
      </div>
    </Router>
  );
}

export default withRouter(App);
