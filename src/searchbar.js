import { useState } from "react";
import React from 'react'

const searchbar = (props) => {
    return (
        <div>
            <h2>Search for an Item</h2>
            <form>
                <label for="name-field">Name Search</label>
                <input id="name-field" type = "text" />
                <label for="price-field">Price Search</label>
                <input id="price-field" type = "number" />
                <label for="type-field">Type Search</label>
                <input id="type-field" type = "text" />
                <label for="brand-field">Brand Search</label>
                <input id="brand-field" type = "text" />
                <button>Search</button>
            </form>
        </div>
    )
}



export default searchbar
