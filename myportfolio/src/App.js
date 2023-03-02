import { Routing } from './Routing/Routing';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { StyledContainer } from './components/styles.jsx';



import './components/styles.jsx';

export default function App() {
  return (
    <div>
      <StyledContainer>
        <BrowserRouter>
          <Routing />
        </BrowserRouter>
      </StyledContainer>
    </div>
  );
}
