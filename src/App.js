import React from 'react';

import NavBar from './components/NavBar';
import Home from './components/Home';
import Features from './components/Features';
import About from './components/About';
import Team from './components/Team';
import Example from './components/Example';
import GetStarted from './components/GetStarted';
import Apply from './components/Apply';
import Footer from './components/Footer';
import './index.css';

const App = () => {

    return (
        <>
            <NavBar />
            <Home />
            <Features />
            <Example />
            <About />
            <Team />
            <GetStarted />
            <Apply />
            <Footer />
        </>
    )
}

export default App
