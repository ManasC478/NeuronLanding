import React from 'react'

import Member from './HelperComponents/Member';
import DwijenImage from '../public/Dwijen.jpg';
import AlexiyImage from '../public/Alexiy.jpeg';
import SohamImage from '../public/Soham.jpg';

const Team = () => {

    const teamMembers = [
        {
            image_url: SohamImage,
            name: "Soham Manoli",
            position: "Founder",
            linkedIn: "https://www.linkedin.com/in/soham-manoli-342b4719a/",
            github: "https://github.com/msoham123"
        },
        {
            image_url: DwijenImage,
            name: "Dwijen Chawra",
            position: "Co-Founder",
            linkedIn: "https://www.linkedin.com/in/dchawra/",
            github: "https://github.com/dwijenchawra"
        },
        {
            image_url: "",
            name: "Manas Chougule",
            position: "Developer",
            linkedIn: "https://www.linkedin.com/in/manas-chougule-8529671bb/",
            github: "https://github.com/ManasC478"
        },
        {
            image_url: AlexiyImage,
            name: "Alexiy Buynitsky",
            position: "Developer",
            linkedIn: "https://www.linkedin.com/in/alexiy-buynitsky-86115b215/",
            github: ""
        },
        {
            image_url: "",
            name: "Arjun Krishnan",
            position: "Designer",
            linkedIn: "",
            github: ""
        }
    ]

    return (
        <section className="team" id="team">
            <div className="header">
                <h2>Meet Our Team</h2>
                <div id="underline"></div>
            </div>
            <p>Meet our dedicated and commited team. We strive to simplify the process of learning for everyone.</p>
            <div className="team-container">
                {
                    teamMembers.map((member, index) => {
                        return (
                            <Member key={index} data={member} />
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Team
