import React from 'react';
import '../App.css';

const Home = () => {
  return (
    <section className="home">
       <div className="hero">
        
        <h1>Unlock Your Future Today</h1>
        <p>“At Kadam Forward, we are committed to guiding young minds toward informed and fulfilling career choices. Our mission is to bridge the gap between ambition and opportunity by providing comprehensive career guidance, personalized mentorship, scholarship opportunities, psychometric assessment, and more.Together, let's take confident strides toward a brighter future."</p>
      
          
        <div className="cta-button">
         <button>Get Started</button>
         <button>Take a Test</button>
         <button>Explore Careers</button>
        </div>
        
      </div>
      
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