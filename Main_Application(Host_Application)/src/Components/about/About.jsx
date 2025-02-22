import React from "react";
import "./about.css";

const About = () => {
  return (
    <section className="about-container">
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          Hello! I'm <strong>Nikesh Sharma</strong>, a passionate developer with a strong background in building modern, 
          responsive web applications. I love creating intuitive user interfaces and bringing ideas to life through code. 
          With experience in React, Node.js, and a variety of other web technologies, I strive to continuously improve and 
          stay up-to-date with the latest industry trends.
        </p>

        <h2>About This Project</h2>
        <p>
          This website is built using <strong>micro-frontends</strong>, an architectural approach that breaks down a large 
          frontend application into smaller, independently developed and deployed modules. This is my first project utilizing 
          micro-frontends, and it demonstrates how scalable and maintainable applications can be built using this approach.
        </p>

        <h2>What are Micro-Frontends?</h2>
        <p>
          Micro-frontends extend the concept of microservices to the frontend world. Instead of having a monolithic UI, the application 
          is divided into smaller, self-contained units that can be built, tested, and deployed separately. Each micro-frontend 
          can be developed using different frameworks or technologies, as long as they integrate seamlessly into the main application.
        </p>
        
        <h2>Benefits of Micro-Frontends</h2>
        <ul>
          <li><strong>Scalability:</strong> Teams can work on different parts of the application independently.</li>
          <li><strong>Technology Flexibility:</strong> Different micro-frontends can use different frameworks or libraries.</li>
          
        </ul>

     
      </div>
    </section>
  );
};

export default About;
