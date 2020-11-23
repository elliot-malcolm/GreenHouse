import React from 'react';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const AboutPage = () => (
  <div className="container">
    <div>
      <h3 className="plantEmoji">🌱</h3><h3 id="readme">
      <br></br>GreenHouse is a Reactjs based app for digitizing plants and sharing them.
        <br></br>
          Status in progress
      </h3>
    </div>
  </div>
);

export default AboutPage;
