import React, { useEffect, useState } from 'react';
import axios from 'axios';

function SearchIngredient() {
    const [getIngredient, setIngredient] = useState([]);
    const [getDrinks, setDrinks] = useState([])
    const [name, setName] = useState('')

  useEffect(() => {
    async function getAllIngredients() {
      try {
        const response = await axios.get(`api/json/v1/1/list.php?i=list`);
        const ingredients = response.data;
        let listIngredients = [];
        for (let i = 0; i < 100; i++) {
            listIngredients.push(ingredients.drinks[`${i}`][`strIngredient1`]);
        }
        listIngredients.sort();
          setIngredient(listIngredients);
      } catch (error) {
        console.log(error);
      }
    }
    getAllIngredients();
  }, []);
    
    
    // useEffect(() => {
        async function getAllDrinks(e) {
            try {
                let name = e.target.value
                setName(name)
                const response = await axios.get(`api/json/v1/1/filter.php?i=${name}`);
                const cocktails = response.data
                let listDrinks = []
                for (let i = 0; i < cocktails.drinks.length; i++) {
                    listDrinks.push(cocktails.drinks[`${i}`][`strDrink`])
                    listDrinks.push(cocktails.drinks[`${i}`][`strDrinkThumb`])
                }
                setDrinks(listDrinks)
            } catch (error) {
                console.log(error)
            }
        }
        // getAllDrinks()
    // }, [])


  return (
    <div>
      <p>Search By Ingredient</p>
          <div>
              <select onChange={(e) => getAllDrinks(e)} value={name}>
                  {getIngredient.map((single, index) => {
            return <option key={index}>{single}</option>
          })}
              </select>
          </div>
          <div>{getDrinks.map((single, index) => {
              return (<div key={index}>
                  {(index % 2 !== 0 ? <img alt='drinks' src={single} /> : <h1>{single}</h1>)}
              </div>
                  
              )
          })}</div>
    </div>
  );
}

export default SearchIngredient;
