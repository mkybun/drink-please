import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';



function RandomDrink() {
    const [getDrink, setDrink] = useState([]);
    const [getIngredient, setIngredients] = useState([]);

  async function getRandomDrink() {
    try {
      const response = await axios.get(`api/json/v1/1/random.php`);
      const drink = response.data;
      setDrink(drink.drinks[0]);
      
      let ingredients = [];
      for (let i = 1; i < 16; i++) {
        if (drink.drinks[0][`strIngredient${i}`] === null) {
          break;
        }
        ingredients.push(drink.drinks[0][`strMeasure${i}`] + "" + drink.drinks[0][`strIngredient${i}`]);
      }
    //   console.log('array of ingredients:', ingredients);
      setIngredients(ingredients);

    //   console.log('array', drink.drinks[0]);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getRandomDrink();
  }, []);

  return (
      <div className="App">
          <Link to='/'>Go Back Home</Link>
      <button onClick={() => getRandomDrink()}>Random Drink Please</button>

      {/* {getDrink.strDrink && <h1>{getDrink.strDrink}</h1>} */}
      <h1>{getDrink.strDrink}</h1>
      <p>Category: {getDrink.strCategory}</p>
      <p>Instructions: {getDrink.strInstructions}</p>
      <div>
        Ingredients:
        {getIngredient.map((ingredient, index) => {
          return <p key={index}>{ingredient}</p>;
        })}
      </div>
      <img alt="thumb" src={getDrink.strDrinkThumb} />
    </div>
  );
}

export default RandomDrink