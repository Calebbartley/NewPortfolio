
import './App.css';
import redpyramid from"./assets/images/redpyramid.jpg";

import React from 'react'

function App() {
  return (
    <div className='App-header' style={{backgroundImage:`url(${redpyramid})`}}>
      <h1>
        HEY! I'm Caleb Bartley.
      </h1>
      <div>
        <h4>
          I'm a Full-Stack Developer
        </h4>
      </div>
    </div>
  )
}

export default App