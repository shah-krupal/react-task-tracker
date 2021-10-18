import React from 'react'
import Button from './Button'

const Header = (props) => {
    const onClick = () => {
        console.log('Its click')
    }
    return (
        <header>
            <h1><b><i>Header.js {props.title}</i></b></h1>
            <Button color='#48A14D' text='ADD to CART' onClick={onClick}/>
        </header>
    )
}


export default Header

/* RAFCE is the shortcut*/