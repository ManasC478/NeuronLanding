import React from 'react';

import adobeBackdrop from '../public/adobe-backdrop.jpeg';

const FrontPage = () => {

    return (
        <section className="front-container" style={{backgroundImage: `url(${adobeBackdrop})`}}>
            <div id="background-overlay">
                <div className="front-container-extra-layer">
                    <div className="primary-text">
                        <h1>Neuron</h1>
                        <p>An all in one community-sourced platform for education. Unleash the power of online learning with handmade lessons and live lessons. Empower yourself!</p>
                        <button id="get-started">Get Started Today</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FrontPage
