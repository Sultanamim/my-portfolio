import React from 'react'

export default function SkillSection() {
  return (
    <div id="skills" className='skills'>
       <div className='container'>
         <div className='section-title'>
            <h2>Skills</h2>
            <p className='lead'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
         </div>
         <div className="row skills-content">
            <div className="col-lg-6" data-aos="fade-up">
                <div className="progress">
                    <span className="skill">HTML<i className="val">100%</i></span>
                    <div className="progress-bar-wrap">
                        <div className="progress-bar" role="progressbar" style={{width:"100%", background: "#149ddd"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                        </div>
                    </div>
                </div>
                <div className="progress">
                    <span className="skill">CSS<i className="val">90%</i></span>
                    <div className="progress-bar-wrap">
                        <div className="progress-bar" role="progressbar" style={{width:"90%", background: "#149ddd"}}  aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                        </div>
                    </div>
                </div>
                <div className="progress">
                    <span className="skill">Javascript<i className="val">95%</i></span>
                    <div className="progress-bar-wrap">
                        <div className="progress-bar" role="progressbar" style={{width:"95%", background: "#149ddd"}}  aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                <div className="progress">
                    <span className="skill">React JS<i className="val">86%</i></span>
                    <div className="progress-bar-wrap">
                        <div className="progress-bar" role="progressbar" style={{width:"86%", background: "#149ddd"}}  aria-valuenow="86" aria-valuemin="0" aria-valuemax="100">
                        </div>
                    </div>
                </div>
                <div className="progress">
                    <span className="skill">WordPress<i className="val">92%</i></span>
                    <div className="progress-bar-wrap">
                        <div className="progress-bar" role="progressbar" style={{width:"92%", background: "#149ddd"}}  aria-valuenow="92" aria-valuemin="0" aria-valuemax="100">
                        </div>
                    </div>
                </div>
                <div className="progress">
                    <span className="skill">Redux<i className="val">78%</i></span>
                    <div className="progress-bar-wrap">
                        <div className="progress-bar progress-bar-striped" role="progressbar" style={{width:"78%", background: "#149ddd"}}  aria-valuenow="78" aria-valuemin="0" aria-valuemax="100">
                        </div>
                    </div>
                </div>
            </div>
         </div>
       </div>
    </div>
  )
}
