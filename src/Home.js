import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <div className="outer-drink">
        <p className="drink-please">Drink Please</p>
      </div>
      <p className='subtext'>A Cocktail Lovers Online Recipe Book</p>

      <div className="routes-container">
        <Link to="random">Random Drink</Link>
        <Link to="searchIngredient">Search By Ingredient</Link>
      </div>
    </div>
  );
}
