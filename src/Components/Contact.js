import React from 'react'
import './Contact.css';
import { CiLocationOn } from "react-icons/ci";
function Contact() {
  return (
    <div className='contact'>
      <div className='contact_header'>
        <h5>Contact Me</h5>
        <h2>Get In Touch With Me</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In alias dignissimos.
          rerum commodi corrupti, temporibus non quam.</p>
      </div>
      <div className='card_container1'>
        <div className='card_left_side'>
          <p>Availble 24/7</p>
          <h2>Get in Touch</h2>
          <div className='inputs'>
            <input type="email" placeholder='Enter Email' />
          </div>
          <div  className='inputs'>
            <input type="password" placeholder='Enter Password' />
          </div>
          <div>
            <textarea name="info" id=""  placeholder='message'></textarea>
          </div>
          <button className='sengMsgBtn'>Send Message</button>
        </div>
        <div className='vertical_line'></div>
        <div className="card_right_side">
  <div className='card_right_side_inside'>
    <div>
      <CiLocationOn />
    </div>
    <div className='location_name'>
      <h5>Location</h5>
      <p>Indapur, Pune</p>
    </div>
          </div>
          <div className='line'></div>
  <div className='card_right_side_inside'>
    <div>
      <CiLocationOn />
    </div>
    <div className='phone_name'> 
      <h5>Phone Number</h5>
      <p>+91-9503116307</p>
    </div>
          </div>
          <div className='line'></div>
  <div className='card_right_side_inside'>
    <div>
      <CiLocationOn />
    </div>
    <div className='email_name'> 
      <h5>Email Address</h5>
      <p>ambesangerahul7@gmail.com</p>
    </div>
  </div>
   </div>

      </div>
    </div>
  )
}

export default Contact
