import React, { useState, useEffect } from 'react';

import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import HomeIcon from '@material-ui/icons/Home';
import CreateIcon from '@material-ui/icons/Create';
import ForumIcon from '@material-ui/icons/Forum';
import MoneyOffIcon from '@material-ui/icons/MoneyOff';
import HelpIcon from '@material-ui/icons/Help';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';

const FeatureCarousel = () => {
    const [x, setX] = useState(0);

    useEffect(() => {
        const automaticSlider = setInterval(() => {
            goRight();
        }, 8000);
        return () => {
            clearInterval(automaticSlider);
        }
    }, [x])

    const goLeft = () => {
        x === 0 ? setX(-100 * 5) : setX(x + 100);
    }

    const goRight = () => {
        x === -100 * 5 ? setX(0) : setX(x - 100);
    }

    return (
        <>
            <button onClick={goLeft}><ArrowLeftIcon fontSize={'inherit'} /></button>
            <div className="carousel-container">
                <div className="feature-item" style={{transform: `translateX(${x}%)`}}>
                    <LocalLibraryIcon />
                    <article>
                        <h4>Learn Comething New</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, nobis!</p>
                    </article>
                </div>
                <div className="feature-item" style={{transform: `translateX(${x}%)`}}>
                    <ForumIcon />
                    <article>
                        <h4>Interactive Sessions</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, nobis!</p>
                    </article>
                </div>
                <div className="feature-item" style={{transform: `translateX(${x}%)`}}>
                    <MoneyOffIcon />
                    <article>
                        <h4>Every Sesssion is FREE</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, nobis!</p>
                    </article>
                </div>
                <div className="feature-item" style={{transform: `translateX(${x}%)`}}>
                    <HelpIcon />
                    <article>
                        <h4>Ask Questions</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, nobis!</p>
                    </article>
                </div>
                <div className="feature-item" style={{transform: `translateX(${x}%)`}}>
                    <CreateIcon />
                    <article>
                        <h4>Find Practice</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, nobis!</p>
                    </article>
                </div>
                <div className="feature-item" style={{transform: `translateX(${x}%)`}}>
                    <HomeIcon />
                    <article>
                        <h4>Join a Community</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, nobis!</p>
                    </article>
                </div>
            </div>
            <button onClick={goRight}><ArrowRightIcon fontSize={'inherit'} /></button>
        </>
    )
}

export default FeatureCarousel
