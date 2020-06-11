import React from 'react'
import ReactDOM from 'react-dom'
import './room.style.css'

function RoomComponent(){
    let [is_on_off,set_on_off] = React.useState(true)
    let [temperature, setTemperature] = React.useState(72)
    let onON = () => {
        // console.log("On -> Button clicked")
        if (is_on_off == false){
            set_on_off(!is_on_off)
        }
    }
    //
    let onOFF = () => {
        // console.log("Off -> Button clicked")
        if (is_on_off == true){
            set_on_off(!is_on_off)
        }
    }
    //
    let increaseTemperature = () => {
            setTemperature(temperature++)
    }
    //
    let decreaseTemperature = () => {
            setTemperature(temperature--)
    }
    return(
        <div className='room_container'>
            <button onClick={onON}>ON</button>
            <button style={{marginLeft: 12}}  onClick={onOFF}>OFF</button>
            <br/>
            <div className="room-dark">
                { is_on_off ? 
                <div>
                    <h2>Lite</h2><h3>{temperature}</h3>
                    <button onClick={increaseTemperature}><h3>+</h3></button>
                </div> : 
                <div>
                    <h2>Dark</h2><h3>{temperature}</h3>
                    <button onClick={decreaseTemperature}><h3>-</h3></button>
                </div> }
            </div>
        </div>
    )
}

export default RoomComponent