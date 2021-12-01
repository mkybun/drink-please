import React, {useEffect, useState} from "react";
import axios from "axios";

function SearchIngredient() {
    const [getIngredient, setIngredient] = useState([])
    useEffect(() => {
        async function getAllIngredients() {
            try {
                const response = await axios.get(`api/json/v1/1/list.php?i=list`)
                const ingredients = response.data
                let listIngredients = []
                for(let i = 0; i < 100; i++) {
                    listIngredients.push(ingredients.drinks[`${i}`][`strIngredient1`])
                }
                listIngredients.sort()
                setIngredient(listIngredients)
    
            } catch (error) {
                console.log(error)
            }
        }
        getAllIngredients()
}, [])
  


    return (
        <div>
            <p>Ingredients</p>
            <div>
                <select>
                {getIngredient.map((single, index) => {
                    return <option key={index}>{single}</option>
                })}
                </select>
            </div>
        </div>
    )
}

export default SearchIngredient