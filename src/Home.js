import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1 className="outer-drink">Drink Please</h1>
      <Link to="random">Random Drink</Link>
      <Link to="searchIngredient">Search By Ingredient</Link>
    </div>
  );
}
