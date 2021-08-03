import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import NavBar from './components/NavBar';
import FrontPage from './components/FrontPage';
import Features from './components/Features';
import About from './components/About';
import Team from './components/Team';
import Example from './components/Example';
import GetStarted from './components/GetStarted';
import Apply from './components/Apply';
import Footer from './components/Footer';
import { GlobalStyles, lightTheme, darkTheme } from './globalStyles';
import ModeButton from './components/ModeButton';
import './index.css';

const App = () => {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <GlobalStyles />
            <NavBar />
            <FrontPage />
            <Features />
            <Example />
            <About />
            <Team />
            <GetStarted />
            <Apply />
            <Footer />
            <ModeButton darkMode={darkMode} setDarkMode={setDarkMode} />
        </ThemeProvider>
    )
}

export default App
