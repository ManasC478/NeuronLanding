import React, { useState, useEffect } from 'react';

import HomeIcon from '@material-ui/icons/Home';
import CreateIcon from '@material-ui/icons/Create';
import ForumIcon from '@material-ui/icons/Forum';
import MoneyOffIcon from '@material-ui/icons/MoneyOff';
import HelpIcon from '@material-ui/icons/Help';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import FeatureCarousel from './HelperComponents/FeatureCarousel';
const Features = () => {
    const [carousel, setCarousel] = useState(window.innerWidth <= 450);

    useEffect(() => {
        const setState = () => {
            setCarousel(window.innerWidth <= 450);
        }

        window.addEventListener('resize', setState);

        return () => window.removeEventListener('resize', setState);

    }, [])


    return (
        <section className="features" id="features">
            <div className="features-extra-layer">
                <div className="header">
                    <h2>Features</h2>
                    <div id="underline"></div>
                </div>
                <div className="feature-container">
                    {
                        !carousel ?
                            (
                                <>
                                    <div className="feature-item">
                                        <LocalLibraryIcon fontSize={'large'} />
                                        <article>
                                            <h4>Learn Comething New</h4>
                                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, nobis!</p>
                                        </article>
                                    </div>
                                    <div className="feature-item">
                                        <ForumIcon fontSize={'large'} />
                                        <article>
                                            <h4>Interactive Sessions</h4>
                                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, nobis!</p>
                                        </article>
                                    </div>
                                    <div className="feature-item">
                                        <MoneyOffIcon fontSize={'large'} />
                                        <article>
                                            <h4>Every Session is FREE</h4>
                                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, nobis!</p>
                                        </article>
                                    </div>
                                    <div className="feature-item">
                                        <HelpIcon fontSize={'large'} />
                                        <article>
                                            <h4>Ask Questions</h4>
                                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, nobis!</p>
                                        </article>
                                    </div>
                                    <div className="feature-item">
                                        <CreateIcon fontSize={'large'} />
                                        <article>
                                            <h4>Find Practice</h4>
                                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, nobis!</p>
                                        </article>
                                    </div>
                                    <div className="feature-item">
                                        <HomeIcon fontSize={'large'} />
                                        <article>
                                            <h4>Join a Community</h4>
                                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, nobis!</p>
                                        </article>
                                    </div>
                                </>
                            )
                            :
                            <FeatureCarousel />
                    }
                </div>
            </div>
        </section>
    )
}

export default Features
