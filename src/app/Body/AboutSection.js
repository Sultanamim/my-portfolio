import React from 'react';
import Img from "../images/img-1.jpeg";

export default function AboutSection() {
  return (
    <div id="about" className='about'>
       <div className='container'>
        <div className='section-title'>
            <h2>About</h2>
            <p className='lead'>Hello!<br /> I am <i style={{fontSize: "24px", fontWeight: "bold"}}>Humaira Sultana</i> and I am a Frontend Web Developer. Now I am a student and besides I do freelancing also. It's one kind of passionate work for me.</p>
        </div>
        <div className='row pt-2 pt-lg-3'>
            <div className='col-lg-4 mt-3 mt-lg-4' data-aos="fade-right">
                <img src={Img} className="img-fluid" alt="" />
            </div>
            
            <div className="col-lg-8 pt-4 pt-lg-5 content" data-aos="fade-down">
                <h3>Frontend Developer &amp; Web Developer</h3>
                <p className='lead'>My job is to build your website so that it is functional and user-freindly and also look attractive. </p>
                <p className="lead">I have learned web Designing and Development for 3 years and have been working at <b style={{color:"green", fontSize: "24px", fontWeight: "bold"}}>'fiverr.'</b> for the past 1 year. </p>
                <div className='row mt-3 mt-lg-5'>
                  <div className='col-lg-6'>
                        <ul>
                            <li>
                                <i className='bx bxs-chevron-right'></i><strong>Birthday:</strong> 31 December, 2000
                            </li>
                            <li>
                                <i className='bx bxs-chevron-right'></i><strong>Email:</strong> humairasultana@gmail.com
                            </li>
                            <li>
                                <i className='bx bxs-chevron-right'></i><strong>Phone:</strong> +8801992799557
                            </li>
                            <li>
                                <i className='bx bxs-chevron-right'></i><strong>City:</strong> Dhaka
                            </li>
                        </ul>
                  </div>
                  <div className='col-lg-6'>
                        <ul>
                            <li>
                                <i className='bx bxs-chevron-right'></i><strong>Age:</strong> 22
                            </li>
                            <li>
                                <i className='bx bxs-chevron-right'></i><strong>Degree:</strong> BSc{"(Hon's)"}
                            </li>
                            <li>
                                <i className='bx bxs-chevron-right'></i><strong>Freelance:</strong> Available
                            </li>
                        </ul>
                  </div>
                </div>
            </div>
            
        </div>
       </div>
    </div>
  )
}
