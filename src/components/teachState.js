import { render } from '@testing-library/react'
import React from 'react'
import { useState } from 'react'

const teachState = () => {
    const [title, settitle] = useState=""
    const [data,setdata] = useState="0"

    const updatetitleclick = () =>{
        settitle("REACT STATES") ;
    };

    const updatedataclicked = () =>{
        setdata(data+1) ;
    };
    return (
        <div>
            <p>Title: {title}</p>
            <p>data: {data}</p>
            <button onClick={updatetitleclick}>Update Title</button>
            <button onClick={updatedataclicked}>Update data</button>
        </div>
    )
    
}

export default teachState
