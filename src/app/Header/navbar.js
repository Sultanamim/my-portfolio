import React from 'react';
import { Link } from 'react-scroll';

export default function Navbar() {
  return (
    <>
      <div className='nav-menu'>
        <ul>
          <li className='active'>
            <Link to="hero" spy={true} smooth={true} offset={-100} duration={500}>
              <i className='bx bx-home'></i>
              <span>Home</span>
            </Link>
          </li>
          <li className=''>
            <Link to="about" spy={true} smooth={true} offset={-100} duration={500}>
              <i className='bx bx-user'></i>
              <span>About</span>
            </Link>
          </li>
          <li className=''>
            <Link to="resume" spy={true} smooth={true} offset={-100} duration={500}>
              <i className='bx bx-file'></i>
              <span>Resume</span>
            </Link>
          </li>
          <li className=''>
            <Link to="skills" spy={true} smooth={true} offset={-100} duration={500}>
              <i className='bx bx-book-content'></i>
              <span>Skills</span>
            </Link>
          </li>
          <li className=''>
            <Link to="services" spy={true} smooth={true} offset={-100} duration={500}>
              <i className='bx bx-server'></i>
              <span>Services</span>
            </Link>
          </li>
          <li className=''>
            <Link to="testimonials" spy={true} smooth={true} offset={-100} duration={500}>
             <i class="fa-regular fa-comment"></i>
              <span>Testimonials</span>
            </Link>
          </li>
          <li className=''>
            <Link to="contact" spy={true} smooth={true} offset={-50} duration={500}>
              <i className='bx bx-envelope'></i>
              <span>Contact</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}
