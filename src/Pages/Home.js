import React, { useEffect, useState } from 'react';
import { LuInstagram, LuGithub } from "react-icons/lu";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import './Home.css';
import man from '../Assets/manright.png';
import About from '../Components/About';
import Service from '../Components/Service';
import Portfolio from '../Components/Portfolio';
import Contact from '../Components/Contact';
import Education from '../Components/Education';
import { Link } from 'react-router-dom';

const Items = [
  { Name: "Full Stack Developer" },
  { Name: "MERN Stack Developer" }
];

const Home = () => {
  const [prof, setProf] = useState(0);

  // ✅ Updated useEffect to remove missing-dependency warning
  useEffect(() => {
    const timer = setTimeout(() => {
      setProf(prev =>
        prev === Items.length - 1 ? 0 : prev + 1
      );
    }, 1000);
    return () => clearTimeout(timer);
  }, [prof]);

  // Click handler (still available for manual cycling)
  const handleProNameClick = () => {
    setProf(prev =>
      prev === Items.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div>
      <div className="container">
        <div className="homeData">
          <div className="leftContainer">
            <p>Hello, I'm</p>
            <h1>Rahul Ambesange</h1>
            <pre onClick={handleProNameClick}>{Items[prof].Name}</pre>

            <div className="btnGroup">
              <Link to="/contact">Hire Me</Link>
              <a
                href={require('../Assets/Rahul new resume.pdf')}
                download="Rahul_Ambesange_CV.pdf"
              >
                Download CV
              </a>
            </div>

            <div className="logosSocial">
              <a
                href="https://linkedin.com/in/rahul-ambesange"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span><FaLinkedinIn /></span>
              </a>
              <a
                href="https://github.com/RahulAmbesange"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span><LuGithub /></span>
              </a>
              <a
                href="https://www.instagram.com/raahul_37_/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span><LuInstagram /></span>
              </a>
              <a
                href="https://x.com/a_Rahultweets?t=PgSD8xznCCZRV4cnC7BFEQ&s=09"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span><FaTwitter /></span>
              </a>
            </div>
          </div>

          <div className="rightContainer">
            <img src={man} alt="Developer" />
          </div>
        </div>
      </div>

      <hr />

      <About />
      <Service />
      <Portfolio />
      <Education />
      <Contact />
    </div>
  );
};

export default Home;
