import React, { useState, useEffect } from 'react';

import DehazeIcon from '@material-ui/icons/Dehaze';
import CloseIcon from '@material-ui/icons/Close';

const NavBar = () => {
    const [open, setOpen] = useState(false);
    const [topBar, setTopBar] = useState(window.innerWidth > 700);

    useEffect(() => {

        console.log('in useeffect');

        const setState = () => {
            if (window.innerWidth <= 700) {
                setTopBar(false);
            } else {
                setTopBar(true)
            }
        }
        
        window.addEventListener('resize', setState);

        return () => window.removeEventListener('resize', setState);
    }, [])

    const handleClick = () => {
        setOpen(!open);
    }

    return (
        <main class="main-nav">
            <nav style={window.innerWidth <= 700 ? open ? { transform: 'translateX(100%)' } : { transform: 'translateX(200%)' } : { transform: 'translateX(0%)' }}>
                <h1>Neuron</h1>
                <ul className="nav-links">
                    <a href="#features"><li>Features</li></a>
                    <a href="#about"><li>About</li></a>
                    <a href="#team"><li>Team</li></a>
                    <a href="#apply"><li>Apply</li></a>
                    <a href="https://app.neuroneducation.org/" rel="noreferrer" target="_blank" id="signin">Sign In</a>
                </ul>
            </nav>
            <button onClick={handleClick} id="nav-btn">{open ? <CloseIcon fontSize={'large'} /> : <DehazeIcon fontSize={'large'} />}</button>
        </main>
    )
}

export default NavBar
