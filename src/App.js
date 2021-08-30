import React from 'react';

import NavBar from './components/NavBar';
import Home from './components/Home';
import Features from './components/Features';
import Background1 from './public/background1.jpg';
import About from './components/About';
import Team from './components/Team';
import Example from './components/Example';
import GetStarted from './components/GetStarted';
import Apply from './components/Apply';
import Footer from './components/Footer';
import './index.css';
//  style={{backgroundImage: `url(${Background1})`}}

const App = () => {

    return (
        <>
            <NavBar />
            {/* <div id="background1" style={{backgroundImage: `url(${Background1})`}}>
            </div> */}
            <Home />
            <Features />
            <Example />
            <About />
            <div id="animation1">
                <Team />
                <GetStarted />
                <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <Apply />
            <Footer />
        </>
    )
}

export default App
