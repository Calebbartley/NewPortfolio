import powerline from '../assets/powerline.png'
import search from '../assets/search.png'
import bulb from '../assets/bulb.ico'
import instagram from '../assets/instagram.png'
import twitter from '../assets/twitter.png'


import React from 'react'

import './Home.css';


const Home=()=> {
  return (
    <div className="body">
      <div className="head">
        <div className="logoContainer">
          <img src={powerline} className="powerline" alt="" />
        </div>

        <div className="headerItems">
          <img src={instagram} className="search" alt="" height="45px" />
          <img src={twitter} className="search" alt="" height="45px" />
          <div className="search" alt="" height="50px">
            Resume
          </div>
        </div>
      </div>
      <div className="Text">
        <h1>
          Hi I'm Caleb I'm a FullStack Developer with a focus in react.
          <h4>Music • Web3 • Crypto </h4>
        </h1>
      </div>
    </div>
  );
}
export default Home



