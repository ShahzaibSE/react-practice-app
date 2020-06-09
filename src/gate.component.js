import React from 'react'
import ReactDOM from 'react-dom'

function GateComponent({isOpen}){
    return(
        isOpen ? <h2>Opened!</h2> : <h2>Closed!</h2>
    )
}

export default GateComponent