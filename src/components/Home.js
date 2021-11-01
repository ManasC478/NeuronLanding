import React from 'react';

import headImg from '../public/Head.png';

const Home = () => {

    return (
        <main className="main-home">
            <section className="home" id="home">
                <img src={headImg} alt="Not Found" />
                <div className="primary-text">
                    <h1>Neuron</h1>
                    <p>An all in one community-sourced platform for education. Unleash the power of online learning with handmade lessons and live lessons. Empower yourself!</p>
                    <a href="https://app.neuroneducation.org/" rel="noreferrer" target="_blank" id="get-started">Get Started Today</a>
                </div>
            </section>
        </main>
    )
}

export default Home
