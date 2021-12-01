import React from "react";
import {Link} from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <h1>Drink Please</h1>
            <Link to="random">Random Drink</Link>
        </div>
    )
}