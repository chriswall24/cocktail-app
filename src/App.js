import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState({})
  const [cocktail, setCocktail] = useState('')

  const url = `www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail}`

  const searchCocktail = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setCocktail('')
    }
  }

  return (
    <div className="App">
      <div className="search">
        <input
        value={cocktail}
        onChange={event => setCocktail(event.target.value)}
        onKeyPress={searchCocktail}
        placeholder='Enter Cocktail'
        type="text"
        />
      </div>
    </div>
  );
}

export default App;
