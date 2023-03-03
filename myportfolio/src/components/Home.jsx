
import React from 'react'

import './Home.css';


const Home=()=> {
  return (
    <div className="Body">
      <div className="logoContainer">
        <img src={powerline} className="powerline" alt="" />
      </div>
      <div className="searchBar">
        <div className="searchIconContainer">
          <img src={search} className="search" alt="" />
        </div>
        <input
          className="searchInput"
          type="text"
          placeholder="Collection, Item, or User..."
        />
      </div>

      <div className="headerItems">
        <p>Drops</p>
        <p>Marketplace</p>
        <p>Create</p>
      </div>
      <div className="headerActions">
        <div className="themeSwitchContainer">
          <img src={bulb} alt="" />
        </div>
      </div>
      <div className="loginButton">GET IN</div>
    </div>
  );
}
export default Home



