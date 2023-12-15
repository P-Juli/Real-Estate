import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "./Value.css";
import "react-accessible-accordion/dist/fancy-example.css";
import data from "../../utils/accordion";

const Value = () => {
  return (
    <section className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        {/* left side */}
        <div className="v-left">
          <div className="image-container">
            <img src="public/value.png" />
          </div>
        </div>

        {/* right side */}
        <div className="flexColStart v-right">
          <span className="orangeText">Our Value </span>
          <span className="Primarytext">Value We Give To You</span>
          <span className="secondaryText">
            Stressful Days of Home Purchasing are gone
          </span>

          <Accordion allowZeroExpanded>
            {data.map((item, index) => (
              <AccordionItem key={index} uuid={index} className="accordianItem">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <div className="flexCenter icon">{item.icon}</div>
                    <span className="primaryText">{item.heading}</span>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p className="secondaryText">{item.detail}</p>
                </AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;
