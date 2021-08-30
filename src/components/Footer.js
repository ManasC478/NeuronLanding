import React from 'react'

import FavoriteIcon from '@material-ui/icons/Favorite';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';

const Footer = () => {
    return (
        <main className="main-footer">
            <footer>
                <div className="navigation">
                    <h3>Navigation</h3>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#features">Features</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#team">Team</a></li>
                        <li><a href="#apply">Apply</a></li>
                    </ul>
                </div>
                <div className="support">
                    <h3>Support</h3>
                    <ul>
                        <li><a href="mailto:contactneuronedu@gmail.com">Contact Us</a></li>
                        <li><a href="#">Term of Services</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
                <div className="overview">
                    <h1>Neuron</h1>
                    <div className="media">
                        <a href="#"><LinkedInIcon /></a>
                        <a href="#"><InstagramIcon /></a>
                        <a href="#"><FacebookIcon /></a>
                    </div>
                    <p>An all in one community-sourced platform for education.  Unleash the power of online learning with handmade lessons and live lessons. Empower yourself!</p>
                    <button>Sign Up</button>
                </div>
                {/* <p>For questions and Inquiries, please email</p>
                <a href="mailto:contactneuronedu@gmail.com">Contact Us</a>
                <p id="made-by">Made with <FavoriteIcon /> by Neuron</p> */}
                {/* <div className="backdrop-overlay">
                </div> */}
                <hr />
                <p id="rights">©Copyright 2021. All rights reserved by Neuron Education.</p>
            </footer>
        </main>
    )
}

export default Footer
