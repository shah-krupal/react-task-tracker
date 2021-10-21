import React from 'react'
import { useState } from 'react'

const SearchBar = (props) => {
    const [name,setName] = useState("") ;
    const [price,setPrice] = useState(0) ;
    const [type,setType] = useState("") ;
    const [brand,setBrand] = useState("") ;

    const searchButtonPressed = () => {
        {/*console.log(name) ;
        console.log(price) ;
        console.log(type) ;
        console.log(brand) ;*/}
        props.callback({name:name, price:price, type:type,brand:brand}) ;
    };

    return (
        <div>
            <h2>Search for an Item</h2>
            <form>
                <label htmlFor="name-field">Name Search</label>
                <input id="name-field" type = "text"  value = {name} onChange = { (e) => setName(e.target.value)}/>
                <br/>
                <label htmlFor="price-field">Price Search</label>
                <input id="price-field" type = "number" value = {price} onChange = { (e) => setPrice(e.target.value)} />
                <br/>
                <label htmlFor="type-field">Type Search</label>
                <input id="type-field" type = "text" value = {type} onChange = { (e) => setType(e.target.value)}/>
                <br/>
                <label htmlFor="brand-field">Brand Search</label>
                <input id="brand-field" type = "text" value = {brand} onChange = { (e) => setBrand(e.target.value)}/>
                <br/>
                <button type = "button" onClick = { searchButtonPressed }>Search</button>
                
            </form> 

        </div>
    )
}


export default SearchBar
