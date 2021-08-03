import React, { useState } from 'react';

import personPlacholder from '../../public/person-placeholder.png';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const Member = ({data}) => {
    const [show, setShow] = useState(false);

    return (
        <div className="member">
            <div onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)} id="profile-pic" style={data.image_url ? { backgroundImage: `url(${data.image_url})` } : { backgroundImage: `url(${personPlacholder})` }}>
                <div id="info" style={show ? {opacity: '1'} : {opacity: '0'}}>
                    <h3>{data.name}</h3>
                    <h5>{data.position}</h5>
                   <div className="links">
                        <button href={data.linkedIn}><LinkedInIcon /></button>
                        <button href={data.github}><GitHubIcon /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Member
