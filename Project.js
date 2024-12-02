import React from 'react';
import './Project.css';

function Projects() {
  return (
    <div className="projects">
      <h2>Projects</h2>
      <section>
        <h3>Plant Species Recognition</h3>
        <p>Led a collaborative effort with a team of four to develop a robust system for the Automatic Identification 
and Recognition of medical plants. Spearheaded the collection of a diverse image dataset featuring 
various plant names to facilitate comprehensive feature extraction. Successfully implemented the 
project utilizing Convolutional Neural Network (CNN) algorithms, showcasing adept teamwork and 
technical proficiency in the field of computer vision and image recognition. .</p>
      </section>
      <section>
        <h3>Blockchain-based Data Storage with Privacy and Authentication in IoT</h3>
        <p>Developed a blockchain-based decentralized framework with integrated authentication and privacy 
features to enhance the security of wireless sensor network communication. Collaborated with a team 
of 4 to implement this innovative solution, which involved storing a substantial volume of sensed 
information in cloud storage. Applied the SHA algorithm to fortify data security within the project. .</p>
      </section>
    </div>
  );
}

export default Projects;
