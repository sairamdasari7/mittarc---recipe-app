// AboutUs.js

import React from 'react';
import './About.css'; // Import CSS file for styling

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <h2>About Us</h2>
        <div className="about-content">
          <div className="about-text">
            <p>Welcome to our recipe food website! We are a team of passionate food enthusiasts who love to explore culinary delights from around the world.</p>
            <p>Our mission is to share our love for cooking and provide you with delicious recipes, cooking tips, and inspiration to create memorable meals for yourself and your loved ones.</p>
          </div>
          <div className="about-images">
            <img src="team-member1.jpg" alt="Team Member 1" />
            <img src="team-member2.jpg" alt="Team Member 2" />
            {/* Add more team member images here */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
