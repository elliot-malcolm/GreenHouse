import React from 'react';
import image from './greenThumbimg.png'

const AboutPage = () => (
  <div className="container">
    <div id="aboutEmoji">
    <span
        className="plantEmoji"
        role="img"
        aria-label=""
        aria-hidden="true"
    >
        🌱
    </span>
    </div>
      <h3 id="readme">
      <br></br><img id="greenHouseImage2" src={image}></img>
      <br></br> is a Reactjs-based app
      <br></br>for sharing plants<br></br>and community exchange.
        <br></br>

      </h3>
    
  </div>
);

export default AboutPage;
