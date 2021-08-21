import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown'
import PoemsList from './PoemsList';
import axiosService from './Services/axiosServices';
// import './App.css';

function App() {

  const [poems, setPoems] = useState([])

  
  useEffect(() => {
    axiosService.getAll()
      .then(items => {
        setPoems(items)
      })
  },
  [])

  const markdown = `Just a link: https://reactjs.com.  
  this is the 2nd line`

  return (
    <div className="App">

      <header className="App-header">
        <h2> POETRY </h2>
      </header>

      <PoemsList poem={poems} />
      {/* <ol> {poems.map((poem) => (<PoemsList key={poem.id} poem={poem} />))} </ol> */}
      <ReactMarkdown children={markdown} />

    </div>
  );
}

export default App;
