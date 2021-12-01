import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import RandomDrink from './RandomDrink';

render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="random" element={<RandomDrink />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
