import React from 'react';
import './Education.css';
import { Link } from 'react-router-dom';


function Education() {
  return (
    <div className='education'>
        
           <h2>Education</h2>
        <div className='education_container'>
           <div>
              <p> 2020-2021</p>
              <h5 className='classdegree'>Bachelor of Computer Science</h5>
              <div>
              <p className='percentage'>Completed Bachelor of Computer Science (BSc) with 7.8 CGPA in April 2021</p>
             </div>
              <div className='dot-and-line'>
              <span></span><div className="line"></div>
              </div>
              <p className='clgName'>Vidya Pratishthan Commerece and Science College,Indapur</p>
              <p>Pune,Maharastra,India.</p>
           </div>
           <div>
              <p>2019-2020</p>
              <h5 className='classdegree'>H.S.C.</h5>
             <p className='percentage'>57.60%</p>
              <div className='dot-and-line'>
              <span></span><div className="line"></div>
              </div>
              <p className='clgName'>Narayandas ramdas highschool and junior college, Indapur</p>
              <p>Pune,Maharastra,India.</p>
           </div>
           <div>
              <p>2017-2018</p>
              <h5 className='classdegree'>S.S.C.</h5>
              <p className='percentage'>69.30%</p>
              <div className='dot-and-line'>
              <span></span><div className="line"></div>
              </div>
              <p className='clgName'>Sou. Kasturabai shripati kadam vidyalaya, Indpaur</p>
              <p>Pune,Maharastra,India.</p>
           </div>
        </div>
        <div className="card_project">
        <div className='card_container'>
          <h1>Hire Me For Your Project</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, libero.</p>
        </div>
        <Link to='/contact'>Hire Me</Link>
        </div>
    </div>
  )
}

export default Education
