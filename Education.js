import React from 'react';
import './Education.css';

function EducationExperience() {
  return (
    <div className="education-experience">
      <h2>Education & Experience</h2>
      <section>
        <h3>Education</h3>
        <ul>
          <li>Bachelor of Technology (BTech, CSE) – Anurag College of Engineering, Hyderabad (GPA: 6.9/10, 2018–2022)</li>
          <li>Intermediate (MPC) – Sri Chaitanya Junior College, Hyderabad (Score: 783, 2016–2018)</li>
          <li>SSC – Sri Chaitanya E Techno School, Hyderabad (GPA: 8.3/10, 2015–2016)</li>
        </ul>
      </section>
      <section>
        <h3>Experience</h3>
        <ul>
          <li><strong>Web Developer Internship at iNeuron.ai, Bengaluru (09/2023 - 10/2023)</strong>: Developed a React-based weather application enabling users to fetch and display weather 
information by city name. Implemented key features including API integration with 
OpenWeatherMap, user input handling, and dynamic rendering of weather details. Utilized 
React hooks, such as useState, for state management. Ensured an intuitive user interface 
with styled components using CSS. Demonstrated proficiency in front-end development, API 
integration, and responsive design.  .</li>
          <li><strong>Web Developer Internship at iNeuron.ai, Bengaluru (12/2023 - 01/2024)</strong>: To-do list project This is a straightforward To-Do List web application built using HTML, CSS, 
and JavaScript. It provides a clean and user-friendly interface to manage your tasks 
efficiently. The project aims to showcase fundamental web development skills and serve as 
a starting point for those looking to create their own task management applications. Features 
Add tasks with due dates and descriptions Mark tasks as complete Delete tasks Responsive 
design for a seamless experience on various devices Local storage support to persist tasks 
even after refreshing the page.</li>
        </ul>
      </section>
    </div>
  );
}

export default EducationExperience;
