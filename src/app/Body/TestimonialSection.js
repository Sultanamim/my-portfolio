import React from 'react';
import Img1 from '../images/cp-01.jpg';
import Img2 from '../images/p-01.jpg';
import Img3 from '../images/p-02.jpg';
import Img4 from '../images/p-05.jpg';
import Img5 from '../images/p-04.jpg';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function TestimonialSection() {
  return (
    <div id="testimonials" className="testimonials">
      <div className="container">
        <div className="section-title">
            <h2>Testimonials</h2>
        </div>
        <OwlCarousel items={3} className='' loop margin={10} nav>
                <div className="item testimonials-carousel">
                    <div className="testimonials-item" data-aos="fade-up">
                        <p>
                            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                            The passage experienced a surge in popularity during the 1960s when Letraset used it on their  dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software.
                            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                        </p>
                        <img src={Img1} className='testimonial-img' alt='' />
                        <h3>Mahbubul Hasan</h3>
                        <h4>CEO &amp; Founder</h4>
                    </div>
                </div>
                <div className="item testimonials-carousel">
                    <div className="testimonials-item" data-aos="fade-up" data-aos-delay="100">
                        <p>
                            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                            The passage experienced a surge in popularity during the 1960s when Letraset used it on their  dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software.
                            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                        </p>
                        <img src={Img2} className='testimonial-img' alt='' />
                        <h3>sara Willson</h3>
                        <h4>Designer</h4>
                    </div>
                </div>
                <div className="item testimonials-carousel">
                    <div className="testimonials-item" data-aos="fade-up" data-aos-delay="200">
                        <p>
                            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                            The passage experienced a surge in popularity during the 1960s when Letraset used it on their  dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software.
                            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                        </p>
                        <img src={Img3} className='testimonial-img' alt='' />
                        <h3>Soul Goodman</h3>
                        <h4>Store Owner</h4>
                    </div>
                </div>
                <div className="item testimonials-carousel">
                    <div className="testimonials-item" data-aos="fade-up" data-aos-delay="300">
                        <p>
                            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                            The passage experienced a surge in popularity during the 1960s when Letraset used it on their  dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software.
                            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                        </p>
                        <img src={Img4} className='testimonial-img' alt='' />
                        <h3>Matt Brandon</h3>
                        <h4>Freelancer</h4>
                    </div>
                </div>
                <div className="item testimonials-carousel">
                    <div className="testimonials-item" data-aos="fade-up" data-aos-delay="400">
                        <p>
                            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                            The passage experienced a surge in popularity during the 1960s when Letraset used it on their  dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software.
                            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                        </p>
                        <img src={Img5} className='testimonial-img' alt='' />
                        <h3>Jena Karlis</h3>
                        <h4>Entrepeneur</h4>
                    </div>
                </div>
        </OwlCarousel>
      </div>
    </div>
  )
}
