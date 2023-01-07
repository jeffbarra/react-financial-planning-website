import React from "react";
import john from "../images/john-doe.png";
import "./About.css";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="container">
        <img src={john} alt="john" />
        <div className="col-2">
          <h2>About</h2>
          <span className="underline"></span>
          <p>
            Execute Financial is an international financial planning firm with
            offices in multiple countries all over the world. Working with
            Execute Financial gives me the ability to advise international
            clients as well as clients living in the United States.
          </p>
          <p>
            I am John Doe, a Senior Financial Advisor for Execute Financial.
          </p>
          <button className="button">Explore More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
