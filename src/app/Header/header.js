import React from 'react';
import Img1 from '../images/cp-03.png'; 

export default function Header() {
  return (
   <>
    <div id="header">
        <div className="d-flex flex-column">
            <div className='profile'>
              <img src={Img1} alt="" className='img-fluid rounded-circle' />
              <h1 className='text-light'>
                <a href="#">Mahbubul Hasan</a>
              </h1>
              <div className='social-links mt-3 text-center'>
                <a href="#" className='twitter'>
                    <i className='bx bxl-twitter'></i>
                </a>
                <a href="#" className='facebook'>
                    <i className='bx bxl-facebook'></i>
                </a>
                <a href="#" className='instagram'>
                    <i className='bx bxl-instagram'></i>
                </a>
                <a href="#" className='youtube'>
                    <i className='bx bxl-youtube'></i>
                </a>
                <a href="#" className='linkedin'>
                    <i className='bx bxl-linkedin'></i>
                </a>
              </div>
            </div>
        </div>
    </div>
    </>
  )
}
