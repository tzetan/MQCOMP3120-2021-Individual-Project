import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Switch, Route, Link, withRouter} from "react-router-dom"
import Form from './Form';
import Poem from './Poem';
import PoemsList from './PoemsList';
import axiosService from './Services/axiosServices';
import './App.css';

function App() {

  // sets state as empty array
  const [poems, setPoems] = useState([])

  
  //adds a new poem to the poems list
  const addPoem = ({newTitle, newAuthor, newText}) => {


    const newPoem = {
      title: newTitle,
      author: newAuthor,
      text: newText,
      votes: 0,
    }

    axiosService.addList(newPoem)
      .then(items => {
        // adds the new poem into the database once promise is fulfilled
        setPoems([...poems, items])
      })
      .catch(() => {
        alert("There was a problem adding the poem")
      })
    }

  //adds an upvote for the poem with specific id 
  const addVote = (poem) => {
    const newPoem = {...poem, votes: poem.votes + 1}

    axiosService.updateVotes(newPoem)
      .then(item => {
        const newPoems = poems.map(poem => 
            poem.id !== item.id ? poem : item)
        //updates poems state with newly added poem once promise is fulfilled
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
        //updates empty state with poems retrieved from backend server once promise is fulfilled
        setPoems(items)
      })
      .catch(() => {
        alert("There was a problem listing the poems")
      })
  },
  [])


  return (
    <Router>
      <div className="App">

        <header className="App-header">
          <h2> EXPRESSIVE POETRY </h2>
        </header>
        
        <nav>
          <ul>
            <li> <Link to="/"> Home </Link> </li>
            <li> <Link to="/form"> Form </Link> </li>
          </ul>
        </nav>

        <Switch>
          
          <Route path="/poems/:id">
            <Poem poems={poems} handleVote={addVote}/>
          </Route>

          <Route path="/form">
            <Form poems={poems} submitForm={addPoem} />
          </Route>

          <Route path="/">
            <PoemsList poems={poems} />
          </Route>

        </Switch>
  
      </div>
    </Router>
  );
}

export default withRouter(App);
