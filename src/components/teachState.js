import React from 'react'
import { useState } from 'react'

const TeachState = () => {
    const [title, Settitle] = useState(' ')
    const [data,Setdata] = useState(0)

    const updatetitleclick = () =>{
        Settitle("REACT STATES") ;
    };

    const updatedataclicked = () =>{
        Setdata(data+1) ;
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

export default TeachState
