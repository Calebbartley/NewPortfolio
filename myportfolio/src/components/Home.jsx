
import React from 'react'
import styled, { withTheme } from "styled-components";
import { colors, StyledContainer,Title, } from './styles';
import Navbar from './Navbar';
import './Home.css';


const Home=()=> {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <h1 color={colors.light1} size={50}>
        This is the End
      </h1>
    </div>
  );
}
export default Home



