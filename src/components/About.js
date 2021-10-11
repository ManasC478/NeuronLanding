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
            answer: "Neuron is a free all-in-one community-sourced platform for education. Users can upload and watch sessions, chat in real-time with others, and access important resources. Neuron was built with the purpose to empower underprivileged communities and allow the community to educate each other."
        },
        {
            question: "Why should I use Neuron?",
            answer: "By using Neuron, you are part of a community of learners who hold each other up. Neuron also has a unique combination of  features that will enhance your learning experience."
        },
        {
            question: "Do I have to pay for Neuron?",
            answer: "Neuron is completely free! We want to remove barriers for education and we designed Neuron from the ground up to meet that goal."
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
