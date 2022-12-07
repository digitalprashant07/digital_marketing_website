import React from 'react';
import Footer from './Footer';
import Header from './Header';
import bg from './img/bg.png';
import './contact.css';
import girl from '../Component/img/girl.png';
import dollar from '../Component/img/dollar.svg';
import call from '../Component/img/call.svg';
import star from '../Component/img/star.svg';
import safety from '../Component/img/safety.svg';
import sectionimg from '../Component/img/sectionimg.svg';
import sectionimg1 from '../Component/img/sectionimg1.svg';
import sectionimg2 from '../Component/img/sectionimg2.svg';
import sectionimg3 from '../Component/img/sectionimg3.svg';
import sectionimg4 from '../Component/img/sectionimg4.svg';
import icons from '../Component/img/icons.svg';
import icons1 from '../Component/img/icons1.svg';
import icons2 from '../Component/img/icons2.svg';
import { FaArrowRight } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLock } from "react-icons/fa";






function ContactUs() {
  return (
    <>
      <Header />
      <div style={{ background: "#452650" }}>
        <div className='container '>
          <div className='row' style={{ paddingTop: '80px' }}>
            <div className='col-6' style={{ alignSelf: "center" }}>
              <span class="sub-heading mb15">Contact Us</span>
              <h1 className='__contest'>We are a creative digital agency based in India.</h1>
              <p className='__contestp'>Please fill in the form below or mail us your requirements.</p>
            </div>
            <div className='col-6'>
              <img src={girl} alt='Website development' />
            </div>
          </div>
        </div>
      </div>


      <div style={{ background: "white" }}>
        <div className='container _home-heading'>
          <div className='row sec-pad' style={{ paddingTop: '80px' }}>
            <div className='col-7 __formlarge'>
              <div className='__form-head'>
                <h2 className='__form-headh2'>Please fill in the form below.</h2>
              </div>
              <div className='__formbody'>
                <div className="container">
                  <div className='row'>
                    <div className='col-md-6'>
                      <input type="text" placeholder="Full Name" name="name" className='__forminput' />
                    </div>
                    <div className='col-md-6'>
                      <input type="email" placeholder="Email Address" name="email" className='__forminput' />
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-md-6'>
                      <input type="number" placeholder="Contact Number" name="phone" className='__forminput' />
                    </div>
                    <div className='col-md-6'>
                      <input type="text" placeholder="Skype" name="skype" className='__forminput' />
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-md-6'>
                      <input type="text" placeholder="Subject" name="subject" className='__forminput' />
                    </div>
                    <div className='col-md-6'>
                      <select className='__forminput'>
                        <option>interested in</option>
                        <option>Web Design</option>
                        <option>Graphic Design</option>
                        <option>App Development</option>
                        <option>Digital Marketing</option>
                        <option>Business Development</option>
                        <option>Other...</option>
                      </select>
                    </div>
                  </div>
                  <div className=' fieldsets __formtextarea'>
                    <textarea placeholder="Message" name="message" spellcheck="false"></textarea>
                  </div>
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck" name="example1" checked="checked" />
                    <label class="custom-control-label label-f-form" for="customCheck">I agree to the <a href="javascript:void(0)">Terms &amp; Conditions</a> of Udemy.</label>
                  </div>

                  <div className="fieldsets mt20">
                    <button type="submit" name="submit" class="ree-btn  ree-btn-grdt1 w-100">Send your inquiry <FaArrowRight/></button>
                  </div>
                  <p class="trm"><FaLock className='falock'/>We hate spam, and we respect your privacy.</p>
                  <div class="form-btm-set text-center mt15">
                    <h5>We Deliver</h5>
                    <div class="icon-setss mt20">
                      <div class="icon-rows">
                        <div className="icon-imgg"><img src={dollar} className='__tools' alt="#" /></div>
                        <div className="icon-txt">
                          <p>Best Price</p>
                        </div>
                      </div>
                      <div class="icon-rows">
                        <div className="icon-imgg"><img src={safety} className='__tools' alt="#" /></div>
                        <div className="icon-txt">
                          <p>Quality Service</p>
                        </div>
                      </div>
                      <div class="icon-rows">
                        <div className="icon-imgg"><img src={call} className='__tools' alt="#" /></div>
                        <div className="icon-txt">
                          <p>Good Support</p>
                        </div>
                      </div>
                      <div class="icon-rows">
                        <div className="icon-imgg"><img src={star} className='__tools' alt="#" /></div>
                        <div className="icon-txt">
                          <p>Satisfaction</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-5'>
              <div class="get-conct-2 pera-block d-ml50">
                <h3 className='__conct1'>Get in touch</h3>

                <div class="contact-detalnk">
                  <a href="tel:+91123456790"><FaPhoneSquareAlt className='__iconscontact'/><span>+91 964 853 5725</span></a>
                  <a href="https://wa.me/+919648535725" target="_blank"><FaWhatsapp className='__iconscontact'/> <span>+91 964 853 5725</span></a>
                  <a href="mailto:digitalprashant07@gmail.com"><FaEnvelope className='__iconscontact'/> <span>digitalprashant07@gmail.com</span></a>
                  <a href="#"><FaSkype className='__iconscontact'/> <span>digitalprashant07.skype</span></a>
                </div>

                <h3 class="mt60">Come meet us</h3>

                <div class="contact-detalnk">
                  <a href="#" class="contact-addressii"><FaMapMarkerAlt className='__iconscontact'/> <span>E-155 sector 63, 201301 Noida, Uttar-Pradesh, INDIA</span></a>
                  <a href="#"><FaLocationArrow className='__iconscontact'/> <span>Get Directions</span></a>
                </div>

                <h3 class="mt60">Follow us</h3>
                <ul class="footer_social mt30">
                  <li> <a href="#" className='___icons' target="_blank" data-toggle="tooltip" title="" data-original-title="Linkedin Account"><FaLinkedin className='__icons'/> </a></li>
                  <li> <a href="#" className='___icons' target="_blank" data-toggle="tooltip" title="" data-original-title="Instagram Profile"><FaInstagram className='__icons'/> </a> </li>
                  <li><a href="#" className='___icons' target="_blank" data-toggle="tooltip" title="" data-original-title="Github Profile"><FaGithub className='__icons'/> </a></li>
                  <li><a href="#" className='___icons' target="_blank" data-toggle="tooltip" title="" data-original-title="Youtube Channel"><FaYoutube className='__icons'/> </a></li>
                  <li><a href="#" className='___icons' target="_blank" data-toggle="tooltip" title="" data-original-title="Facebook Profile "><FaFacebook className='__icons'/> </a></li>
                </ul>
              </div>
            </div>


          </div>
        </div>
      </div>

      <div className='__newsection sec-pad'>
        <div className='__new1'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-lg-7 text-center'>
                <div className='__pagesection'>
                  <h2 className='__pagesectionhead'>We're Here to Help</h2>
                  <p className='mt-15'>Lipsum dolor sit amet, consectetur adipisicing elit. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </div>
            </div>
            <div className='row mt-30'>
              <div className='col-lg-4 col-sm-6'>
                <div className='mt-30 __definedsection'>
                  <img src={icons} style={{width:"60px", height:"60px"}}/>
                  <h3 className='__pagesectionh3'>Communicate Your Requirement</h3>
                  <p>Our software house has been recognised by google for outstanding android application quality.</p>
                </div>
              </div>
              <div className='col-lg-4 col-sm-6'>
                <div className='mt-30 __definedsection'>
              <img src={icons1} style={{width:"60px", height:"60px"}}/>
                  <h3 className='__pagesectionh3'>Understanding the Requirement</h3>
                  <p>Our software house has been recognised by google for outstanding android application quality.</p>
                </div>
              </div>
              <div className='col-lg-4 col-sm-6'>
                <div className='mt-30 __definedsection'>
                <img src={icons2} style={{width:"60px", height:"60px"}}/>
                  <h3 className='__pagesectionh3'>Udemy Respect the Client Needs</h3>
                  <p>Our software house has been recognised by google for outstanding android application quality.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className='__timesection'>
        <div className='__timehead'>
          <div className='__timebody'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-12'>
                  <div className='__icon'>
                    <div className='__icontitle'>
                      <img src={sectionimg} style={{ width: "80px" }} />
                      <p>Work at Your Time Zone</p>
                    </div>
                    <div className='__icontitle'>
                      <img src={sectionimg1} style={{ width: "80px" }} />
                      <p>Work at Your Time Zone</p>
                    </div>
                    <div className='__icontitle'>
                      <img src={sectionimg2} style={{ width: "80px" }} />
                      <p>Work at Your Time Zone</p>
                    </div>
                    <div className='__icontitle'>
                      <img src={sectionimg3} style={{ width: "80px" }} />
                      <p>Work at Your Time Zone</p>
                    </div>
                    <div className='__icontitle'>
                      <img src={sectionimg4} style={{ width: "80px" }} />
                      <p>Work at Your Time Zone</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ContactUs
