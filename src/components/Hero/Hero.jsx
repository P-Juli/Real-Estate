import React from "react";
import "./Hero.css";
import { FaLocationDot } from "react-icons/fa6";
import CountUp from "react-countup";
import {motion} from 'framer-motion'
const Hero = () => {
  return (
    // flexcenter makes it display:flex.
    <section className="hero-wrapper flexStart">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <h1>
              Discover Your Dream
              <br /> Home
            </h1>
            <div className="orange-circle" />
          </div>
          <div className="flexColStart hero-des">
            {/* flexColStart makes it flexbox withdirection column */}
            <span>Find the most beautiful homes </span>
            <span>at the most resonable price.</span>
          </div>
          <div className="flexCenter search-bar">
            {/* search bar */}
            <FaLocationDot color="red" background="white" />
            <input type="text" />
            <button className="button">Search</button>
          </div>
          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span className="count-up">
                <CountUp start={8500} end={9005} duration={7} />+
              </span>
              <span className="houses-text">Houses</span>
            </div>

            <div className="flexColStart stat">
              <span className="count-up">
                <CountUp start={1000} end={1101} duration={7} />+
              </span>
              <span className="houses-text">Satisfied Customers</span>
            </div>

            <div className="flexColStart stat">
              <span className="count-up">
                <CountUp end={32} />+
              </span>
              <span className="houses-text">Districts Covered</span>
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="flexCenter hero-right">
          <div className="image-container">
            <img src="../../../public/hero-image.png" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
