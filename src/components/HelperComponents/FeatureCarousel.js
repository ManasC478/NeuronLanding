import React, { useState, useEffect, useCallback } from "react";

import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import HomeIcon from "@material-ui/icons/Home";
import CreateIcon from "@material-ui/icons/Create";
import ForumIcon from "@material-ui/icons/Forum";
import MoneyOffIcon from "@material-ui/icons/MoneyOff";
import HelpIcon from "@material-ui/icons/Help";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";

const FeatureCarousel = () => {
  const [x, setX] = useState(0);

  const goLeft = () => {
    x === 0 ? setX(-100 * 5) : setX(x + 100);
  };

  const goRight = useCallback(() => {
    x === -100 * 5 ? setX(0) : setX(x - 100);
  }, [x]);

  useEffect(() => {
    const automaticSlider = setInterval(() => {
      goRight();
    }, 8000);
    return () => {
      clearInterval(automaticSlider);
    };
  }, [x, goRight]);

  return (
    <>
      <button onClick={goLeft}>
        <ArrowLeftIcon fontSize={"inherit"} />
      </button>
      <div className='carousel-container'>
        <div
          className='feature-item'
          style={{ transform: `translateX(${x}%)` }}
        >
          <LocalLibraryIcon />
          <article>
            <h4>Learn Something New</h4>
            <p>
              Search and explore, there will always be new content for any
              subject.
            </p>
          </article>
        </div>
        <div
          className='feature-item'
          style={{ transform: `translateX(${x}%)` }}
        >
          <ForumIcon />
          <article>
            <h4>Interactive Sessions</h4>
            <p>Make new friends and groups by chatting with other users.</p>
          </article>
        </div>
        <div
          className='feature-item'
          style={{ transform: `translateX(${x}%)` }}
        >
          <MoneyOffIcon />
          <article>
            <h4>Sessions are FREE</h4>
            <p>
              Everything is free. Watch as many videos as you want for no
              charge!
            </p>
          </article>
        </div>
        <div
          className='feature-item'
          style={{ transform: `translateX(${x}%)` }}
        >
          <HelpIcon />
          <article>
            <h4>Ask Questions</h4>
            <p>
              When confused ask the vibrant community and receive quality
              feedback.
            </p>
          </article>
        </div>
        <div
          className='feature-item'
          style={{ transform: `translateX(${x}%)` }}
        >
          <CreateIcon />
          <article>
            <h4>Find Practice</h4>
            <p>
              Find extensive practice sets to perfect what you learned from the
              videos!
            </p>
          </article>
        </div>
        <div
          className='feature-item'
          style={{ transform: `translateX(${x}%)` }}
        >
          <HomeIcon />
          <article>
            <h4>Join a Community</h4>
            <p>
              Be a NEURON. Join the community and add your own unique impulses
              to help others.
            </p>
          </article>
        </div>
      </div>
      <button onClick={goRight}>
        <ArrowRightIcon fontSize={"inherit"} />
      </button>
    </>
  );
};

export default FeatureCarousel;
