import React from 'react'

import Member from './HelperComponents/Member';

const Team = () => {

    const teamMembers = [
        {
            image_url: "",
            name: "Soham Manoli",
            position: "Founder and CEO",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nesciunt commodi eligendi sequi enim, quis incidunt. Corporis eaque nihil quibusdam inventore ullam rerum numquam quaerat adipisci aliquam soluta? Labore, sint iusto fuga voluptas corrupti odio, dolor nulla id unde omnis ratione, deserunt eaque tenetur rem. Reiciendis, quos reprehenderit iste voluptate voluptas vel molestiae libero nulla iusto adipisci sint id suscipit animi laborum blanditiis cumque vitae repudiandae expedita atque rerum cum? Fugiat inventore accusamus iusto odit dolore, quam assumenda quos perferendis. Consequuntur architecto, expedita, facilis incidunt quis itaque perspiciatis aliquam cum corporis illum, in earum nam! Quam velit delectus alias vel?",
            linkedIn: "",
            github: ""
        },
        {
            image_url: "",
            name: "Dwijen Chawra",
            position: "Co-Founder and CTO",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit id itaque illo eos iusto quasi, ut nobis eius nulla! Unde deserunt omnis nisi possimus voluptas, quisquam perspiciatis! Exercitationem provident rem fuga, repudiandae corrupti id voluptatem maxime officia ipsa iusto illo cumque perspiciatis sunt harum saepe porro optio dicta deleniti? Officiis!",
            linkedIn: "",
            github: ""
        }
    ]

    return (
        <section className="team" id="team">
            <div className="team-extra-layer">
                <div className="header">
                    <h2>Meet Our Team</h2>
                    <div id="underline"></div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, provident architecto eum deserunt magni cupiditate adipisci veritatis dolor amet recusandae.</p>
                <div className="team-container">
                    {
                        teamMembers.map((member, index) => {
                            return (
                                <Member key={index} data={member} />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Team
