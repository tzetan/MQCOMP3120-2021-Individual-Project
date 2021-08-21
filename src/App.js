import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown'
import Form from './Form';
import PoemsList from './PoemsList';
import axiosService from './Services/axiosServices';
// import './App.css';

function App() {

  const [poems, setPoems] = useState([])

  
  const addPoem = ({newTitle, newAuthor, newText}) => {
    const newPoem = {
      title: newTitle,
      author: newAuthor,
      text: newText,
      votes: 0,
    }

    axiosService.addList(newPoem)
      .then(items => {
        console.log("POST response: ", items)
        setPoems([...poems, items])
        console.log("new poem added", newPoem)
      })
  }

  const addVote = (poem) => {
    const newPoem = {...poem, votes: poem.votes + 1}

    axiosService.updateVotes(newPoem)
      .then(item => {
        const newPoems = poems.map(poem => 
            poem.id !== item.id ? poem : item)
        setPoems(newPoems)
      })
  }

  useEffect(() => {
    axiosService.getList()
      .then(items => {
        console.log("we have a response", items)
        setPoems(items)
      })
  },
  [])

  // const markdown = `Just a link: https://reactjs.com.  
  // this is the 2nd line`

  return (
    <div className="App">

      <header className="App-header">
        <h2> POETRY </h2>
      </header>

      <PoemsList poem={poems} handleVote={addVote} />
      {/* <ol> {poems.map((poem) => (<PoemsList key={poem.id} poem={poem} />))} </ol> */}
      {/* <ReactMarkdown children={markdown} /> */}

      <Form submitForm={addPoem}/>

    </div>
  );
}

export default App;
