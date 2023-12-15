import React from "react";
import { IoCall } from "react-icons/io5";
import { IoIosChatboxes } from "react-icons/io";
import { BsChatDots } from "react-icons/bs";
import { FaViber } from "react-icons/fa";

import "./Contact.css";
const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        <div className="flexColStart c-left">
          {/* left side */}
          <span className="orangeText">Contact us</span>
          <span className="primaryText">24 hour call service</span>
          <span className="secondaryText">Beautiful home one call away</span>

          <div className="flexColStart contactModes">
            {/* first row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <IoCall color="red" weight="bold" />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">1234567890</span>
                  </div>
                </div>
                <div className="flexCenter button">call</div>
              </div>
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <IoIosChatboxes color="red" />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Chat</span>
                    <span className="secondaryText">1234567890</span>
                  </div>
                </div>
                <div className="flexCenter button">call</div>
              </div>
            </div>
            {/* second row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <FaViber color="red" />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Video Call</span>
                    <span className="secondaryText">1234567890</span>
                  </div>
                </div>
                <div className="flexCenter button">call</div>
              </div>
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsChatDots color="red" />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Message</span>
                    <span className="secondaryText">1234567890</span>
                  </div>
                </div>
                <div className="flexCenter button">call</div>
              </div>
            </div>
          </div>
        </div>

        <div className="c-right">
          {/* right side */}
          <div className="image-container">
            <img src="./contact.jpg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
