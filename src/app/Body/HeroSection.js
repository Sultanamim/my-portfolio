import React from 'react';
import Typical from 'react-typical';



export default function HeroSection() {
  return (
    <> 
    <div id="hero">
        <div className='d-flex flex-column justify-content-center align-items-center'>
          <div className='hero-container' data-aos="fade-in">
            <h1>Humaira Sultana</h1>
            <p>I am {" "}
               <span>
                  <Typical
                        loop={Infinity}
                        steps={[
                             "Web Designer",
                              2000,
                             "Frontend Developer",
                              2000,
                             "Freelancer",
                              2000,
                           ]}
                       />
              </span></p>
          </div>
          <div className=''>
             <button className='button1'>Get In Touch</button>
          </div>
          </div>
          </div>
    </>
  )
}