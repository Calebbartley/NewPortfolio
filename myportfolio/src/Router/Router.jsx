import React from 'react'
import {Route, Routes} from 'react-router-dom';

import Home from '../components/Home';
import AboutMe from '../components/AboutMe';
import Contact from '../components/Contact';

export const Router = () =>{
    return(
        <Routes>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route path="/AboutMe">
                <AboutMe/>
            </Route>
            <Route path="/Contact">
                <Contact/>
            </Route>
        </Routes>
    )
}