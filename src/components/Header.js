import React from 'react'
import Button from './Button'

const Header = (props) => {
    const onClick = () => {
        console.log('Its click')
    }
    return (
        <h1>
            <h1><b><i>Header.js  </i></b></h1>
            <Button color='#48A14D' text={props.title} onClick={onClick}/>
        </h1>
    )
}
Header.defaultProps ={
    title: "SECOND"
}


export default Header

/* RAFCE is the shortcut*/