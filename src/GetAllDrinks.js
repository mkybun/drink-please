import React, { useEffect, useState } from 'react';
import axios from 'axios';



function DisplayAllDrinks() {
    const [getDrinks, setDrinks] = useState([])
    const [name, setName] = useState('')


    // useEffect(() => {
        async function getAllDrinks() {
            try {
                const response = await axios.get(`api/json/v1/1/filter.php?i=${name}`);
                // const response = await axios.get(`api/json/v1/1/filter.php?i=vodka`);
                const cocktails = response.data
                let listDrinks = []
                for (let i = 0; i < cocktails.drinks.length; i++) {
                    listDrinks.push(cocktails.drinks[`${i}`][`strDrink`])
                }
                setDrinks(listDrinks)
    
            } catch (error) {
                console.log(error)
            }
        }
        getAllDrinks()
    // }, [])
    

    return (
        <div></div>
    )
}



