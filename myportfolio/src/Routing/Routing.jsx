import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from '../components/Home';
import AboutMe from '../components/AboutMe';
import Contact from '../components/Contact';
import styled from "styled-components";
import { StyledContainer } from '../components/styles';

export const Routing = () =>{
    return (
      <Router>
        <StyledContainer>
          <Routes>
            <Route exact path="/" element={<Home />}
            />
          </Routes>
        </StyledContainer>
      </Router>
    );
}