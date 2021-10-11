    import React from 'react'

import exampleImg from '../public/example-img.png';

const Example = () => {
    return (
        <main className="main-example">
            <section className="example">
                <h4 id="peek">A   Sneak   Peek</h4>
                <img src={exampleImg} alt="not found"/>
                <div id="tag-line">
                    <h3>Watch.</h3>
                    <h3>Learn.</h3>
                    <h3>Advance.</h3>
                    <a href="#">Learn More</a>
                </div>
            </section>
        </main>
    )
}

export default Example