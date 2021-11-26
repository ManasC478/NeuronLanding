import React, { useState, useEffect } from "react";

import HomeIcon from "@material-ui/icons/Home";
import CreateIcon from "@material-ui/icons/Create";
import ForumIcon from "@material-ui/icons/Forum";
import MoneyOffIcon from "@material-ui/icons/MoneyOff";
import HelpIcon from "@material-ui/icons/Help";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import FeatureCarousel from "./HelperComponents/FeatureCarousel";
const Features = () => {
  const [carousel, setCarousel] = useState(window.innerWidth <= 615);

  useEffect(() => {
    const setState = () => {
      setCarousel(window.innerWidth <= 615);
    };

    window.addEventListener("resize", setState);

    return () => window.removeEventListener("resize", setState);
  }, []);

  return (
    <section className='features' id='features'>
      <div className='header'>
        <h2>Features</h2>
        <div id='underline'></div>
      </div>
      <div className='feature-container'>
        {!carousel ? (
          <>
            <div className='feature-item'>
              <LocalLibraryIcon fontSize={"large"} />
              <article>
                <h4>Learn Something New</h4>
                <p>
                  Search and explore, there will always be new content for any
                  subject.
                </p>
              </article>
            </div>
            <div className='feature-item'>
              <ForumIcon fontSize={"large"} />
              <article>
                <h4>Interactive Sessions</h4>
                <p>Make new friends and groups by chatting with other users.</p>
              </article>
            </div>
            <div className='feature-item'>
              <MoneyOffIcon fontSize={"large"} />
              <article>
                <h4>Sessions are FREE</h4>
                <p>
                  Everything is free. Watch as many videos as you want for no
                  charge!
                </p>
              </article>
            </div>
            <div className='feature-item'>
              <HelpIcon fontSize={"large"} />
              <article>
                <h4>Ask Questions</h4>
                <p>
                  When confused ask the vibrant community and receive quality
                  feedback.
                </p>
              </article>
            </div>
            <div className='feature-item'>
              <CreateIcon fontSize={"large"} />
              <article>
                <h4>Find Practice</h4>
                <p>
                  Find extensive practice sets to perfect what you learned from
                  the videos!
                </p>
              </article>
            </div>
            <div className='feature-item'>
              <HomeIcon fontSize={"large"} />
              <article>
                <h4>Join a Community</h4>
                <p>
                  Be a NEURON. Join the community and add your own unique
                  impulses to help others.
                </p>
              </article>
            </div>
          </>
        ) : (
          <FeatureCarousel />
        )}
      </div>
    </section>
  );
};

export default Features;
