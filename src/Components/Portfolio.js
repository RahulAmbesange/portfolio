import React from "react";
import "./Portfolio.css";

function Portfolio() {
  return (
    <div className="portfolio-container">
      <div className="portfolio-header">
        <p>Portfolio</p>
        <h2>Check My Wonderful Works as Intern</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
          omnis harum facere ipsa voluptas repellendus id ratione velit
          voluptate possimus.
        </p>
      </div>
      <div className="portfolio-projects">
        <div className="project-card" data-tooltip="Click to see">
          <a href="https://spiffy-jelly-bc1590.netlify.app/">
            <h4>Website In Minute - Landing Page</h4>
          </a>
        </div>
        <div className="project-card" data-tooltip="Click to see">
          <a href="https://astonishing-gnome-c98cc7.netlify.app/">
            <h4>Power BI - Landing Page</h4>
          </a>
        </div>
        <div className="project-card" data-tooltip="Click to see"> 
          <a href="https://effulgent-belekoy-c81c4e.netlify.app">
            <h4>To-Do List</h4>
          </a>
        </div>
      </div>
      <div className="portfolio-projects" >
        <div className="project-card" data-tooltip="Click to see">
          <a href="https://github.com/RahulAmbesange/Age-Calculator-">
            <h4>Age Calculator</h4>
          </a>
        </div>
        <div className="project-card" data-tooltip="Click to see">
          <a href="https://github.com/RahulAmbesange/Random-Password-Generator">
            <h4>Random Password Generator</h4>
          </a>
        </div>
        <div className="project-card" data-tooltip="Click to see">
          <a href="https://main--googleminiclone.netlify.app/">
            <h4>Gemini Clone - React</h4>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
