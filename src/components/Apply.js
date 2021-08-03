import React from 'react'

const Apply = () => {
    return (
        <section className="apply" id="apply">
            <div className="apply-extra-layer">
                <div className="header">
                    <h2>Apply</h2>
                    <div id="underline"></div>
                </div>
                <div className="apply-container">
                    <h3>Topic Lead</h3>
                    <p>Become the lead for a topic and create videos on it! Ilustrate your knowledge and highlight your capabilities as an individual.</p>
                    <div className="requirements">
                        <h4>Requirements</h4>
                        <ul>
                            <li>- Must have experience with the topic you are applying for!</li>
                            <li>- Must have a computer to record/stream videos from (If you don't know how, we'll help!</li>
                        </ul>
                        <button>Apply</button>
                        <span>*Must be in high school or above</span>
                    </div>
                </div>
                <div className="apply-container">
                    <h3>Outreach and Media Lead</h3>
                    <p>Run the social media accounts, market, and promote the organization! Illustrate your knowleedge and highlight you capabilities as an individual!</p>
                    <div className="requirements">
                        <h4>Requirements</h4>
                        <ul>
                            <li>- Must have experience with social media and writing emails!</li>
                            <li>- Must be able to create infographics, promotional media, etc... as well as handle messages on social media!</li>
                        </ul>
                        <button>Apply</button>
                        <span>*Must be in high school or above</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Apply
