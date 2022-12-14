import React, { useState } from 'react';
import Img1 from '../images/img-3.jpg';
import Navbar from './navbar';

export default function Header() {
  const[sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  }
  return (
   <> 
   <div>
            {/*  ===== Mobile-menu-button ==== */}
     <button type="button" className='mobile-nav-toggle d-xl-none' onClick={showSidebar}>
             {/* <i className='icofont-navigation-menu'></i>  */}
             <i className='bx bx-menu'></i> 
          </button>

          {/*  ======== Header ======= */}
   <div className={sidebar? 'mobile-nav-active': 'mobile-nav'}>
      <div id="header">
          <div className="d-flex flex-column">
              <div className='profile'>
                <img src={Img1} alt="" className='img-fluid' />
                <h2 className='text-light'>
                  <a href="#">Humaira Sultana</a>
                </h2>
                <div className='social-links mt-3 text-center'>
                  <a href="#" className='twitter'>
                      <i className='bx bxl-twitter'></i>
                  </a>
                  <a href="https://www.facebook.com/humaira.sultana.750/?viewas=100000686899395&show_switched_toast=0&show_invite_to_follow=0&show_switched_tooltip=0&show_podcast_settings=0&show_community_transition=0&show_community_review_changes=0&show_community_rollback=0&show_follower_visibility_disclosure=0" target="blank" className='facebook'>
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

          {/*  ===== Navbar ==== */}
         <Navbar />
      </div>
    </div>
    </div>
    </>
  )
}
