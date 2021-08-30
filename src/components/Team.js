import React from 'react'

import Member from './HelperComponents/Member';
import DwijenImage from '../public/Dwijen.jpg';
import AlexiyImage from '../public/Alexiy.jpeg';

const Team = () => {

    const teamMembers = [
        {
            image_url: "",
            name: "Soham Manoli",
            position: "Founder",
            linkedIn: "",
            github: ""
        },
        {
            image_url: DwijenImage,
            name: "Dwijen Chawra",
            position: "Co-Founder",
            linkedIn: "",
            github: ""
        },
        {
            image_url: "",
            name: "Manas Chougule",
            position: "Developer",
            linkedIn: "",
            github: ""
        },
        {
            image_url: AlexiyImage,
            name: "Alexiy Buynitsky",
            position: "Developer",
            linkedIn: "",
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
