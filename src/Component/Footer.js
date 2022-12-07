import React from 'react';
import './footer.css';
import { FaLinkedin } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaEnvelopeOpen } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
import app from '../Component/img/app.png';
import clutch from '../Component/img/clutch.png';
import goodfirm from '../Component/img/goodfirm.png';
import itfirm from '../Component/img/itfirm.png';
import { FaStar } from "react-icons/fa";



function Footer() {
  return (
    <>
{/* section are started from here */}
      <div>
        <footer className="footer">
          <div className='__footer'>
            <div className='__footerhead'>
              <div className='container'>
                <div className='row __footerrow'>
                  <div className='col footer-head'>
                    <h5>Contact info</h5>
                    <ul className='footer-links-list'>
                      <li><a href="tel:+919648535725"><span className='__spanicon'><FaPhoneSquareAlt /> </span> +91 964 853 5725 </a></li>
                      <li><a href="tel:+919648535725"><span className='__spanicon'><FaWhatsapp /> </span> +91 964 853 5725 </a></li>
                      <li><a href="mailto:carrer@geekcode.com"><span className='__spanicon'><FaEnvelope /> </span> Carrer@Geekcode.com </a></li>
                      <li><a href="mailto:digitalprashant07@gmail.com"><span className='__spanicon'><FaEnvelopeOpen /> </span> digitalprashant07@gmail.com </a></li>
                      <li><a href="tel:+919648535725"><span className='__spanicon'><FaSkype /> </span> Digitalparshant.skype </a></li>
                    </ul>
                  </div>

                  <div className='col footer-head'>
                    <h5>Follow Us</h5>
                    <ul className='footer-links-list'>
                      <li><a href=""><span className='__spanicon'><FaLinkedin /> </span>Linkedin </a></li>
                      <li><a href=""><span className='__spanicon'><FaGithub /> </span> Github </a></li>
                      <li><a href=""><span className='__spanicon'><FaInstagram /> </span> Instagram </a></li>
                      <li><a href=""><span className='__spanicon'><FaFacebook /> </span> Facebook </a></li>
                      <li><a href=""><span className='__spanicon'><FaDribbble /> </span> Dribble </a></li>
                    </ul>
                  </div>

                  <div className='col footer-head'>
                    <h5>Services</h5>
                    <ul className='footer-links-list'>
                      <li> <a href="">Hire Dedicated Developers</a></li>
                      <li> <a href="">Web App Development</a></li>
                      <li> <a href="">Mobile App Development</a></li>
                      <li> <a href="">Search Engine Optimization</a></li>
                      <li> <a href="">Pay-Per-Click</a></li>
                      <li> <a href="">Social Media Marketing</a></li>
                    </ul>
                  </div>

                  <div className='col footer-head'>
                    <h5> Industries </h5>
                    <ul className='footer-links-list'>
                      <li> <a href="">Healthcare</a></li>
                      <li> <a href="">Education</a></li>
                      <li> <a href="">Finance</a></li>
                      <li> <a href="">Property</a></li>
                      <li> <a href="">Hotels</a></li>
                      <li> <a href="">E-commerce</a></li>
                      <li> <a href="">Retail</a></li>
                    </ul>
                  </div>

                  <div className='col footer-head'>
                    <h5> Portfolio </h5>
                    <ul className='footer-links-list'>
                      <li> <a href="">StockNow - Investment App</a></li>
                      <li> <a href="">Dochelp - Patient Monitoring</a></li>
                      <li> <a href="">Roster - Pizza Delivery</a></li>
                      <li> <a href="">Nikea - Logo Design</a></li>
                      <li> <a href="">Eptire - Blockchain Solution</a></li>
                      <li> <a href="">ShopTop - Grocery App</a></li>
                    </ul>
                  </div>
                </div>
              </div>
{/* second section are started from here */}

              <div className='__logosection' style={{ marginTop: "50px" }}>
                <div className='__logosectionhead'>
                  <div className='container'>
                    <div className='row'>
                      <div className='col-3 __logocol1'>
                        <a href='.' className='__udemy'>DigitalArc</a>
                       <div style={{marginTop:"30px"}}>
                        <span><FaStar className='fastar'/></span>
                        <span><FaStar className='fastar'/></span>
                        <span><FaStar className='fastar'/></span>
                        <span><FaStar className='fastar'/></span>
                        <span><FaStar className='fastar'/></span>
                       </div>
                        <h6 class="mt10 __heading6">Overall client rating is 4.9 out of 8,500 Clients for Udemy</h6>
                      </div>
                      <div className='col-6'>
                        <div className='ref-logo'>
                          <a href='#' className='__udemylogo'><img src={app} /> </a>
                          <a href='#' className='__udemylogo'><img src={clutch} /> </a>
                          <a href='#' className='__udemylogo'><img src={goodfirm} /> </a>
                          <a href='#' className='__udemylogo'><img src={itfirm} /> </a>
                        </div>
                      </div>
                      <div className='col-3 __logocol3'>
                        <a href="#" class="ree-btn  ree-btn-grdt1 mw-80 no-shadows">Our Brochure <FaArrowRight/></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

{/* Last section are started from here */}

              <div className="container ft-cpy">
               <div className="row">
                  <div className="col-lg-5">
                     <div className="ft-copyright">
                        <p>We are tracking any intention of piracy.</p>
                     </div>
                  </div>
                  <div className="col-lg-7">
                     <div className="ft-copyright ft-r">
                        <p>Copyright © 2021 Reevan. All rights reserved. Template By <a href="" target="blank">Prashant Maurya</a></p>
                     </div>
                  </div>
               </div>
            </div>

            </div>
          </div>
        </footer>
      </div>

    </>
  )
}

export default Footer
