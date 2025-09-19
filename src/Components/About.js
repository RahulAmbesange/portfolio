import React from 'react';
import './About.css';
import rahul1 from '../Assets/rahul1.jpg';

function About() {
  return (
    <div className='abContainer'>
      <div className='abLeft'>
        <img src={rahul1} alt="" />
      </div>
      <div className='abRight'>
        <h3>Rahul Ambesange</h3>
        <pre>Full Stack Developer/MERN Stack Developer</pre>
        <p>Throughout my career, I have developed and implemented full-stack solutions for various projects, focusing on delivering high-quality code and innovative features. My experience working with the MERN stack allows me to build robust and scalable applications, taking projects from concept to completion with attention to detail and a commitment to excellence.
        I am always eager to learn new technologies and improve my skills, striving to stay updated with the latest industry trends and best practices. I thrive in collaborative environments and enjoy working with cross-functional teams to deliver successful projects that exceed expectations.
        </p>
      </div>
    </div>
  )
}

export default About
