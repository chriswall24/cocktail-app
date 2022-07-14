import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState({})
  const [cocktail, setCocktail] = useState('')

  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail}`
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
    <div className="app">
      <div className="title-text">
        <h1>Find That Cocktail</h1>
      </div>
      <div className="search">
        <input
        value={cocktail}
        onChange={event => setCocktail(event.target.value)}
        onKeyPress={searchCocktail}
        placeholder='Search by Name'
        type="text"
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="name">
            {data.drinks ? <h1>{data.drinks[0].strDrink}</h1> : null}
          </div>
          <div className="description">
            {data.drinks ? <p>{data.drinks[0].strGlass}</p> : null}
            {data.drinks ? <p>{data.drinks[0].strInstructions}</p> : null}
          </div>
          <div className="bottom">
            <div className="ingredients">
              {/* make iteration with .map maybe */}
              {data.drinks ? <p className='bold'>{data.drinks[0].strIngredient1}</p> : null}
              {data.drinks ? <p>{data.drinks[0].strMeasure1}</p> : null}
              {data.drinks ? <p className='bold'>{data.drinks[0].strIngredient2}</p> : null}
              {data.drinks ? <p>{data.drinks[0].strMeasure2}</p> : null}
              {data.drinks ? <p className='bold'>{data.drinks[0].strIngredient3}</p> : null}
              {data.drinks ? <p>{data.drinks[0].strMeasure3}</p> : null}
              {data.drinks ? <p className='bold'>{data.drinks[0].strIngredient4}</p> : null}
            </div>
            <div className="image">
              {data.drinks ? <img src={data.drinks[0].strDrinkThumb} alt="Cocktail" /> : null }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
