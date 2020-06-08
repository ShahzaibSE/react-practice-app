import React from 'react'
import ReactDOM from 'react-dom'
import './mediacard.style.css'

function MediaCard({title,desc,imageURL}){
    return(
        <div className='mediacard-container'>
            <h1>{title}</h1>
            <p>{desc}</p>
            <img src={imageURL} alt={title}/>
        </div>
    )
}

export default MediaCard