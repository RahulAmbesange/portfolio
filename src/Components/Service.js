import React from 'react';
import './Service.css';
import { FaWebAwesome } from "react-icons/fa6";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiMobile4 } from "react-icons/ci";
import { VscGraph } from "react-icons/vsc";
import { MdWidthNormal } from "react-icons/md";

function Service() {
  return (
    <div>
      <div className='center'>
        <p>Service</p>
      <h2>What I Do</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem maxime, consequatur perferendis quae hic pariatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, eius.</p>
     </div>
      <div className='cards'>
      <div className="card">
            <div>
            <HiOutlineDesktopComputer />
            </div>
            <h3>Web Design</h3>
        </div>
          <div className="card">
            <div>
            <MdWidthNormal />
            </div>
            <h3>Responsive Design</h3>
        </div>
          
          <div className="card">
            <div>
            <CiMobile4 />
            </div>
            <h3>App Design</h3>
        </div>
          <div className="card">
            <div>
            <VscGraph />
            </div>
            <h3>SEO</h3>
        </div>
      </div>
      <div className='skills-header'>
        <p>Skills</p>
        <h3>Why Choose Me</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quod quia modi, nostrum officiis eaque reprehenderit. Consectetur ex magnam reprehenderit? </p>
      </div>
      <div className='skills-container'>
        <div className='skill'>
          <h6>React</h6>
          <div className='skill-line'>
            <div className='skill-progress react-progress'></div>
          </div>
        </div>
        <div className='skill'>
          <h6>Javascript</h6>
          <div className='skill-line'>
            <div className='skill-progress react-progress1'></div>
          </div>
        </div>
        <div className='skill'>
          <h6>NodeJs</h6>
          <div className='skill-line'>
            <div className='skill-progress react-progress2'></div>
          </div>
        </div>
        <div className='skill'>
          <h6>MongoDB</h6>
          <div className='skill-line'>
            <div className='skill-progress react-progress3'></div>
          </div>
        </div>
        <div className='skill'>
          <h6>ExpressJs</h6>
          <div className='skill-line'>
            <div className='skill-progress react-progress4'></div>
          </div>
        </div>
        <div className='skill'>
          <h6>HTML</h6>
          <div className='skill-line'>
            <div className='skill-progress react-progress5'></div>
          </div>
        </div>
        <div className='skill'>
          <h6>CSS</h6>
          <div className='skill-line'>
            <div className='skill-progress react-progress6'></div>
          </div>
        </div>
        <div className='skill'>
          <h6>Bootstrap</h6>
          <div className='skill-line'>
            <div className='skill-progress react-progress7'></div>
          </div>
        </div>
      </div>
     </div>
  )
}

export default Service
