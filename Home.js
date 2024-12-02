import React from 'react';
import './Home.css';
import roshanimage from './roshanimage.jpg';
function Home() {
  return (
    <div className="home">
        <img src={roshanimage} alt="Description of the image" className="about-image" />
      <h1>Welcome to Kommu Roshan's Portfolio</h1>
      <p>A passionate and dedicated Computer Science graduate with strong foundations in software development and problem-solving.</p>
    </div>
  );
}

export default Home;
