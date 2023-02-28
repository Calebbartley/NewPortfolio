
import redpyramid from '../assets/Images/redpyramid.jpg';

import React from 'react'

function Home() {
  return (
    <div className='App-header' style={{backgroundPosition:'center',backgroundImage:`url(${redpyramid})`, backgroundSize:'cover', backgroundRepeat:'no-repeat', height:"400px", width:"100%"}}>
      <h1 className='Text'>
        Hi! I'm Caleb Bartley.
      </h1>
      <div className='Text'>
        <h4>
          Full-Stack Developer
        </h4>
        <h6>Musician • Audio Engineer • Producer</h6>
      </div>
    </div>
  )
}

export default Home