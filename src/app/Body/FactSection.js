import React from 'react';
import CountUp from 'react-countup';

export default function FactSection() {
  return (
    <>
      <section id="resume" className="facts">
        <div className="container">
            <div className="section-title">
                <h2>Resume</h2>
                <p className='lead'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
            </div>
            <div className="row no-gutters">
                <div className="col-lg-3 col-md-6 d-md-flex align-items-md-strech" data-aos="fade-up">
                    <div className='count-box'>
                      <i className='bx bx-smile'></i>
                      <span>
                        <CountUp end={212} duration={6} />
                      </span>
                      <p><strong>Happy Clients</strong> Consequyer Quae</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 d-md-flex align-items-md-strech" data-aos="fade-up" data-aos-delay="100">
                    <div className='count-box'>
                      <i className='bx bxs-folder-open'></i>
                      <span>
                        <CountUp end={521} duration={6} />
                      </span>
                      <p><strong>Projects</strong> adipisct atqua cum</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 d-md-flex align-items-md-strech" data-aos="fade-up" data-aos-delay="200">
                    <div className='count-box'>
                      <i className='bx bx-support' ></i>
                      <span className='counter'>
                        <CountUp end={1465} duration={6} />
                      </span>
                      <p><strong>Hours of Support</strong> Consequyer Quae</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 d-md-flex align-items-md-strech" data-aos="fade-up" data-aos-delay="300">
                    <div className='count-box'>
                     <i className='bx bxs-user'></i>
                      <span className='counter'>
                        <CountUp end={15} duration={6} />
                      </span>
                      <p><strong>Hard Workers</strong> rerun asperiose dolor</p>
                    </div>
                </div>     
            </div>
        </div>
      </section>
    </>
  )
}
