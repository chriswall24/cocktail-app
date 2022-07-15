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
    <div>
    {data.drinks ?
    (<div className="app">
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

      {data.drinks ? data.drinks.map((drink, index) => (
      <div className="container">
        <div className="top">
          <div className="name">
            {drink ? <h1>{drink.strDrink}</h1> : null}
          </div>
          <div className="description">
            {drink ? <p>{drink.strGlass}</p> : null}
            {drink ? <p>{drink.strInstructions}</p> : null}
          </div>
          <div className="bottom">
            <div className="ingredients">
              {/* make iteration with .map maybe */}
              {drink ? <p className='bold'>{drink.strIngredient1}</p> : null}
              {drink ? <p>{drink.strMeasure1}</p> : null}
              {drink ? <p className='bold'>{drink.strIngredient2}</p> : null}
              {drink ? <p>{drink.strMeasure2}</p> : null}
              {drink ? <p className='bold'>{drink.strIngredient3}</p> : null}
              {drink ? <p>{drink.strMeasure3}</p> : null}
              {drink ? <p className='bold'>{drink.strIngredient4}</p> : null}
              {drink ? <p>{drink.strMeasure4}</p> : null}
              {drink ? <p className='bold'>{drink.strIngredient5}</p> : null}
              {drink ? <p>{drink.strMeasure5}</p> : null}
              {drink ? <p className='bold'>{drink.strIngredient6}</p> : null}
              {drink ? <p>{drink.strMeasure6}</p> : null}
              {drink ? <p className='bold'>{drink.strIngredient7}</p> : null}
              {drink ? <p>{drink.strMeasure7}</p> : null}
              {drink ? <p className='bold'>{drink.strIngredient8}</p> : null}
              {drink ? <p>{drink.strMeasure8}</p> : null}
              {drink ? <p className='bold'>{drink.strIngredient9}</p> : null}
              {drink ? <p>{drink.strMeasure9}</p> : null}
              {drink ? <p className='bold'>{drink.strIngredient10}</p> : null}
              {drink ? <p>{drink.strMeasure10}</p> : null}
            </div>
            <div className="image">
              {drink ? <img src={drink.strDrinkThumb} alt="Cocktail" /> : null }
            </div>
          </div>
        </div>
      </div>
      )) : null}

    </div>) :
      <div className="search-container">
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
      </div>
    }
    </div>
  );
}

export default App;
