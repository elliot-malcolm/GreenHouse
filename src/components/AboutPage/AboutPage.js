import React from 'react';
import image from './Untitled-1.png'

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

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
      <br></br><img id="greenHouseImage" src={image}></img>
      <br></br> is a Reactjs-based app
      <br></br>for digitizing plants<br></br>and social sharing.
        <br></br>

      </h3>
    
  </div>
);

export default AboutPage;
