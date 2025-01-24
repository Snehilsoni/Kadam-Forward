import React from 'react';
import '../App.css';

const Home = () => {
  return (
    <section className="home">
      <div className="hero">
        <h1>Unlock Your Future Today</h1>
        <p>Discover your career path with us.</p>
          <div className="cta-button">
         <button>Get Started</button>
         <button>Take a Test</button>
         <button>Explore Careers</button>
        </div>
       </div>
      <section className="intro-video">
        <h2>Introduction</h2>
        <video controls>
          <source src="path/to/intro-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>
      <section class="quick-links">
      
      <div class="icon">Career Library</div>
      <div class="icon">Psychometric Tests</div>
      <div class="icon">Scholarships</div>
      <div class="icon">Mentoring</div>
      </section>
    </section>
  );
};

export default Home;