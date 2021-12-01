import React from "react";
import { Link } from 'react-router-dom'
import SearchIngredient from "./SearchIngredient";

export default function Home() {
    return (
        <div>

            <h1 className='outer-drink'>Drink Please</h1>
<SearchIngredient />
            <Link to="random">Random Drink</Link>
        </div>
    )
}