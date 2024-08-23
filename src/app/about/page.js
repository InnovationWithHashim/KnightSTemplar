import React from 'react';
import '@/app/about/about-us.css'; // Import the CSS file

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <section className="mission-section">
        <h1 className="mission-title">Our <span>Mission</span></h1>
        <h2 className="mission-statement">"Preserving the Legacy"</h2>
        <p className="mission-description">
          Dedicated to exploring and sharing the fascinating history and enduring legacy of the Knights Templar.
        </p>
      </section>

      <section className="team-section">
        <h1 className="team-title">Meet the <span>Team</span></h1>
        <div className="team-member">
          <h2 className="team-member-name">Alexander Gray</h2>
          <p className="team-member-bio">
            Historian with a passion for medieval history and the mysteries of the Knights Templar.
          </p>
        </div>
        <div className="team-member">
          <h2 className="team-member-name">Emma Walker</h2>
          <p className="team-member-bio">
            Researcher focused on uncovering the hidden stories of the Templars and their influence on modern society.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
