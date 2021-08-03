import React from 'react'

import FavoriteIcon from '@material-ui/icons/Favorite';
import adobeBackdrop from '../public/adobe-backdrop.jpeg';

const Footer = () => {
    return (
        <footer style={{ backgroundImage: `url(${adobeBackdrop})` }}>
            <div className="backdrop-overlay">
                <div className="footer-extra-layer">
                    <h2>Neuron © 2020</h2>
                    <p>For questions and Inquiries, please email</p>
                    <a href="mailto:contactneuronedu@gmail.com">Contact Us</a>
                    <p id="made-by">Made with <FavoriteIcon /> by Neuron</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
