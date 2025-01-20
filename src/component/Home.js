import React from 'react';

const Home = () => {
  return (
    <div className="home">
      <header className="hero">
        <h1>Welcome to Kadam Forward</h1>
        <p>Towards a SMART career</p>
        <button className="cta-button">Get Started</button>
      </header>
      <section className="intro-video">
        <h2>Introduction</h2>
        <video controls>
          <source src="path/to/intro-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>
      <section className="call-to-action">
        <h2>Explore Our Services</h2>
        <button className="cta-button">Learn More</button>
      </section>
    </div>
  );
};

export default Home;