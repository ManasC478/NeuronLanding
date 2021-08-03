import React, { useState, useEffect } from 'react';

import DehazeIcon from '@material-ui/icons/Dehaze';
import CloseIcon from '@material-ui/icons/Close';

const NavBar = () => {
    const [open, setOpen] = useState(false);
    const [topBar, setTopBar] = useState(window.innerWidth > 700);
    // const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {

        console.log('in useeffect');

        const setState = () => {
            if (window.innerWidth <= 700) {
                setTopBar(false);
                // setOpen(false);
            } else {
                setTopBar(true)
                // setOpen(true);
            }
        }
        
        window.addEventListener('resize', setState);

        return () => window.removeEventListener('resize', setState);
    }, [])

    // useEffect(() => {
    //     console.log(window.innerWidth);
    // }, [window.innerWidth])

    const handleClick = () => {
        setOpen(!open);
    }

    return (
        <>
            <nav style={window.innerWidth <= 700 ? open ? { transform: 'translateX(0%)' } : { transform: 'translateX(100%' } : { transform: 'translateX(0%)' }}>
                <div className="nav-extra-layer">
                    <a href="#front-container">
                        <img id="logo" src="" alt="not found" />
                        <h1>Neuron</h1>
                    </a>
                    <ul className="nav-links">
                        <a href="#about"><li>About</li></a>
                        <a href="#features"><li>Features</li></a>
                        <a href="#team"><li>Team</li></a>
                        <a href="#apply"><li>Apply</li></a>
                        <button>Sign In</button>
                    </ul>
                </div>
            </nav>
            <button onClick={handleClick} id="nav-btn">{open ? <CloseIcon fontSize={'large'} /> : <DehazeIcon fontSize={'large'} />}</button>
        </>
    )
}

export default NavBar
