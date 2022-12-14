import React, { Component } from 'react';

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const validateForm = errors => {
  let valid = true;
  Object.values(errors).forEach(val => val.length > 0 && (valid = false));
  return valid;
};

export default class ContactSection extends Component{
  constructor(props) {
    super(props);
    this.state = {
      fullName: null,
      email: null,
      password: null,
      message: null,
      errors: {
        fullName: '',
        email: '',
        password: '',
        message: '',
      }
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case 'fullName': 
        errors.fullName = 
          value.length < 5
            ? 'Full Name must be at least 5 characters long!'
            : '';
        break;
      case 'email': 
        errors.email = 
          validEmailRegex.test(value)
            ? ''
            : 'Email is not valid!';
        break;
      case 'password': 
        errors.password = 
          value.length < 8
            ? 'Please write a meaningful subject!'
            : '';
        break;
      case 'message':
         errors.message = 
            value.length < 13 
            ? "Please write a message with at least 4 characters!"
            : '';
        break;
      default:
        break;
    }

    this.setState({errors, [name]: value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if(validateForm(this.state.errors)) {
      console.info('Valid Form')
    }else{
      console.error('Invalid Form')
    }
  }
  render(){
    const {errors} = this.state;
  return (
    <div id="contact" className='contact'>
        <div className='container'>
          <div className='section-title'>
                  <h2>Contact</h2>
          </div>
          <div className="contact-bg">
            <div className='row' data-aos="fade-in">
                  <div className="col-lg-6 d-flex align-items-stretch">
                     <div className="info">
                         <div className="address">
                             <i className="fa-solid fa-location-dot"></i>
                             <h4>Location:</h4>
                             <p>Mirpur-10, Block-A, L-13, H-01</p>
                         </div>
                         <div className="email">
                             <i className="fa-solid fa-envelope"></i>
                             <h4>Email:</h4>
                             <p>humairasultana059@gmail.com</p>
                         </div>
                         <div className="phone">
                             <i className="fa-solid fa-phone"></i>
                             <h4>Call:</h4>
                             <p>+8801601422365</p>
                         </div>
                      {/* ========== Google Map ========= */}
                         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d349.3026621201166!2d90.36977669973139!3d23.812335025321428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c1298eecbf29%3A0xa35f345035876e0e!2z4Ka44KeN4Kaf4KeB4Kah4KeH4Kao4KeN4Kaf4Ka44KeNIOCmquCnjeCmr-CmvuCmsuCnh-CmuA!5e0!3m2!1sen!2sbd!4v1670334718119!5m2!1sen!2sbd" frameBorder="0" style={{border: "0", width: "280px", height: "280px", alignContent: "center"}} allowFullScreen />
                     </div>
                  </div>
                 {/* ========== Contact Form ========= */}
                  <div className='col-lg-6 mt-5 mt-lg-0 d-flex align-items-stretch'>
                    <div className="wrapper">
                       <div className='form-wrapper'>
                          <form onSubmit={this.handleSubmit} noValidate>
                            <div className='fullName'>
                                <label htmlFor="fullName">Full Name</label>
                                <input type='text' name='fullName' onChange={this.handleChange} noValidate />
                                <div className="validate">
                                  {errors.fullName.length > 0 && 
                                    <span className='error'>{errors.fullName}</span>}
                                </div>
                            </div>
                            <div className='email'>
                                <label htmlFor="email">Email</label>
                                <input type='email' name='email' onChange={this.handleChange} noValidate />
                                <div className="validate">
                                  {errors.email.length > 0 && 
                                      <span className='error'>{errors.email}</span>}  
                                </div>
                            </div>
                            <div className='subject'>
                                <label htmlFor="subject">Subject</label>
                                <input type='text' name='password' onChange={this.handleChange} noValidate />
                                <div className="validate">
                                  {errors.password.length > 0 && 
                                      <span className='error'>{errors.password}</span>}
                                </div>
                            </div>
                            <div className='message'>
                              <label htmlFor="message">Message</label>
                              <textarea type="text" name="message" rows="3" onChange={this.handleChange} noValidate />
                              <div className="validate">
                                {errors.message.length > 0 && 
                                  <span className='error'>{errors.message}</span>}
                              </div>
                            </div>
                            <div className='submit'>
                                <button type="text">Send Message</button>
                            </div>
                          </form>
                        </div>
                     </div>
                 </div>
             </div>
          </div>
       </div>
          {/*  Back To Top */}
          <div className='back-to-top'>
           <a href="#">
            <i class="fa-sharp fa-solid fa-chevron-up"></i> 
           </a>
        </div>
    </div>
  )
 } 
}
