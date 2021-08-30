import React, { useState, useEffect } from 'react'

import Question from './HelperComponents/Question';
import aboutUs from '../public/about-us.svg';

const About = () => {
    const [fullWidth, setFullWidth] = useState(window.innerWidth <= 700);

    useEffect(() => {
        const setState = () => {
            setFullWidth(window.innerWidth <= 700);
        }

        window.addEventListener('resize', setState);

        return () => window.removeEventListener('resize', setState);
    }, [])

    const faqs = [
        {
            question: "What is Neuron?",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, voluptate quae. Facere, vero ratione molestiae minus ea beatae non optio possimus vitae distinctio consequuntur quibusdam illum, explicabo totam exercitationem! Eum."
        },
        {
            question: "Why should I use Neuron?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut soluta delectus quibusdam mollitia fugiat pariatur ullam recusandae quod placeat voluptatibus? Est voluptas ut, similique voluptates id quas reprehenderit. Consequuntur aspernatur sunt, voluptatum hic fuga aperiam!"
        },
        {
            question: "Do I have to pay for Neuron?",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias voluptatem totam voluptatum perferendis accusantium consectetur deleniti voluptates illo voluptate aspernatur."
        }
    ]

    return (
        <main className="main-about">
            <section className="about" id="about">
                <div className="about-content">
                    <div className="header">
                        <h2>About Us</h2>
                        <div id="underline"></div>
                    </div>
                </div>
                <img src={aboutUs} width={fullWidth ? '100%' : '40%'} alt="not found" />
                <div className="faq-container">
                    {
                        faqs.map((faq, index) => {
                            return (
                                <Question key={index} data={faq} />
                            )
                        })
                    }
                </div>
            </section>
        </main>
    )
}

export default About
