import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import RandomDrink from './RandomDrink';
import SearchIngredient from './SearchIngredient';

render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="random" element={<RandomDrink />} />
      <Route path="searchIngredient" element={<SearchIngredient />} />
 </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
