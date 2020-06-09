import React from 'react'
import ReactDOM from 'react-dom'
import './greeting.styles.css'
// Component.
import GateComponent from './gate.component'

function GreetComponent({name, is_open}){
  return(
      <div className="bio-container">
          <h1>{name}</h1>
          <h2>Age:<span style={{fontWeight:"bold",fontSize:20,paddingLeft:10}}>{25 + 1}</span></h2>
          <h2>About:</h2>
          <p><strong>Technology</strong>, <strong>Gamer</strong> and <strong>Content Creator</strong></p>
          <br/>
          <h2>Skills</h2>
          <ul>
              <li>Machine Learning</li>
              <li>Web Development</li>
              <li>TensorFlow</li>
              <li>Angular</li>
              <li>Python</li>
              <li>NodeJS</li>
          </ul>
          <div>
            <h2 style={{paddingBottom:7}}>Gate:</h2>  
            <GateComponent isOpen={true}></GateComponent>
            <GateComponent isOpen={false}></GateComponent>
          </div>
      </div>
  )
}

export default GreetComponent