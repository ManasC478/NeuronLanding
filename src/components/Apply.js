import React from 'react'

const Apply = () => {
    return (
        <main className="main-apply">
            <section className="apply" id="apply">
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
                        <a href="https://forms.gle/XL84znyNnKeET7n26" rel="noreferrer" target="_blank">Apply</a>
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
                        <a href="https://forms.gle/eABVvp2xnQz95EuM6" rel="noreferrer" target="_blank">Apply</a>
                        <span>*Must be in high school or above</span>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Apply
