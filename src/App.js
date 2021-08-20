import React, { useEffect, useState } from 'react';
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

  return (
    <div className="App">

      <header className="App-header">
        <h2> POETRY </h2>
      </header>

      <ol>
        {poems.map(poem => 
          <li key={poem.id}> {poem.title} {poem.author} {poem.text} {poem.votes} </li>  
        )}
      </ol>

    </div>
  );
}

export default App;
