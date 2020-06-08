import React from 'react'
import ReactDOM from 'react-dom'
import './greeting.styles.css'

function GreetComponent({name}){
  return(
      <div className="bio-container">
          <h1>Welcome {name}</h1>
          <h2>Age: {25 + 1}</h2>
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
      </div>
  )
}

export default GreetComponent