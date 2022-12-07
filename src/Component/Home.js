import React from 'react';
import './home.css';
import Header from './Header';
// import { Link } from 'react-router-dom';
import Footer from './Footer';
import scene from '../Component/img/scene.svg';
import service from '../Component/img/service.png';
import service1 from '../Component/img/service1.png';
import service2 from '../Component/img/service2.png';
import service3 from '../Component/img/service3.png';
import service4 from '../Component/img/service4.png';
import service5 from '../Component/img/service5.png';
import service6 from '../Component/img/service6.png';
import social from '../Component/img/social.png';
// import test from '../Component/img/test.png';
import LOGO1 from '../Component/img/LOGO1.png';
import LOGO2 from '../Component/img/LOGO2.png';
import LOGO3 from '../Component/img/LOGO3.png';
import LOGO4 from '../Component/img/LOGO4.png';
import LOGO5 from '../Component/img/LOGO5.png';
import LOGO6 from '../Component/img/LOGO6.png';
import { FaArrowRight } from "react-icons/fa";

import travel from "../Component/img/travel.png";
import frog from "../Component/img/frog.png";
import chaal from "../Component/img/chaal.png";



function Home() {
  return (
    <>
      <Header />
      <div>
        <div className='__websitedesigning'>
          <div className='container'>
            <div className='row' >
              <div className='col home-heading'>
                <h4 className='__website'>DIGITAL MARKETING THAT DRIVES REVENUE®</h4>
                <h1 className='__websitedevelopment'>Data-driven revenue marketing</h1>
                <p className='__websitedevelopment1'>Choose Udemy as your digital marketing agency and propel your business to new heights with our award-winning digital marketing services and proprietary technology platform.</p>
                <div className='__button'>
                  <button className='css-button-3d--sky'>Let's Connect</button>
                </div>
              </div>
              <div className='col home-headings'>
                <img src={scene} alt='Website development' style={{ marginTop:"70px" }} />
              </div>
            </div>
          </div>
        </div>

        <div className='_brands'>
          <div className='__brands'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-12'>
                  <div className='hero-brands mt30 d-flex' >
                    <div className='_brandlogo'>
                      <div className='logo'>
                        <a href=''>
                          <img src={LOGO1} alt="logo1"/>
                        </a>
                      </div>
                    </div>
                    <div className='_brandlogo'>
                      <div className='logo'>
                        <a href=''>
                          <img src={LOGO2}/>
                        </a>
                      </div>
                    </div>
                    <div className='_brandlogo'>
                      <div className='logo'>
                        <a href=''>
                          <img src={LOGO3}/>
                        </a>
                      </div>
                    </div>
                    <div className='_brandlogo'>
                      <div className='logo'>
                        <a href=''>
                          <img src={LOGO4}/>
                        </a>
                      </div>
                    </div>
                    <div className='_brandlogo'>
                      <div className='logo'>
                        <a href=''>
                          <img src={LOGO5}/>
                        </a>
                      </div>
                    </div>
                    <div className='_brandlogo'>
                      <div className='logo'>
                        <a href=''>
                          <img src={LOGO6}/>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>




        <div className='__aboutsection'>
          <div className='container'>
            <div className='row __digitalagency'>
              <div className='col'>
                <img src={social} alt="aboutus" />
              </div>
              <div className='col'>
              <div className='__digitalagencycol'>
                <h4>About DigitalArc</h4>
                <p>We are a team of top talent delivering enterprise solutions globally. we evolve with the advancement in technology because we believe in making our technology as your innovation.</p>
                <p>Our experts provide a wide range of services including app design, web development, digital marketing, ecommerce solutions and cloud development. We stay updated with the ...</p>
                <button className=' css-button-3d--sky'>About Us</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className='sec-pad __transparent'>
            <div className='__ethics'>
              <div className='container'>
                <div className='row justify-content-center'>
                  <div className='col-lg-7 text-center'>
                    <div className='__ethichead'>
                      <h2>See what we can do for you</h2>
                      <p>Lipsum dolor sit amet, consectetur adipisicing elit. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className="col-lg-4 col-sm-6">
                    <div className="ree-card r-bg-c mt60">
                      <div className="ree-card-img"><img className="__imageicons" src={service1} alt="services" /> </div>
                      <div className="ree-card-content mt40">
                        <h3 className="mb15">App Development</h3>
                        <p>Our software house has been recognised by google for outstanding android application quality.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-sm-6">
                    <div className="ree-card r-bg-c mt60">
                      <div className="ree-card-img">
                        <img className="__imageicons" src={service} alt="services" />
                      </div>
                      <div className="ree-card-content mt40">
                        <h3 className="mb15">Web Development</h3>
                        <p>Our software house has been recognised by google for outstanding android application	quality.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-sm-6">
                    <div className="ree-card r-bg-c mt60">
                      <div className="ree-card-img"><img className="__imageicons" src={service2} alt="services" /> </div>
                      <div className="ree-card-content mt40">
                        <h3 className="mb15">eCommerce Service</h3>
                        <p>Our software house has been recognised by google for outstanding android application	quality.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-sm-6">
                    <div className="ree-card r-bg-c mt60">
                      <div className="ree-card-img"><img className="__imageicons" src={service5} alt="services" /> </div>
                      <div className="ree-card-content mt40">
                        <h3 className="mb15">Digital Marketing</h3>
                        <p>Our software house has been recognised by google for outstanding android application	quality.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-sm-6">
                    <div className="ree-card r-bg-c mt60">
                      <div className="ree-card-img"><img className="__imageicons" src={service3} alt="services" /> </div>
                      <div className="ree-card-content mt40">
                        <h3 className="mb15">Product Design</h3>
                        <p>Our software house has been recognised by google for outstanding android application	quality.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-sm-6">
                    <div className="ree-card r-bg-c mt60">
                      <div className="ree-card-img"><img className="__imageicons" src={service6} alt="services" /> </div>
                      <div className="ree-card-content mt40">
                        <h3 className="mb15">Cloud Services</h3>
                        <p>Our software house has been recognised by google for outstanding android application	quality.</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </section>
          <section className='sec-pad'>
            <div className='container'>
            <h2>Our Selected Works</h2>
            <div className='row' style={{marginTop:"30px"}}>
              <div className='col'>
              <div className="fwb-main-x fwb-a">
                <div className="work-thumbnails">
                  <a href="">	<img src={travel} alt="portfolio reevan" className="img-fluid"/> </a>
                </div>
                <div className="work-details">
                  <p className="mb10 text-light">UX, UI, Graphic Design</p>
                  <h4><a href="" className='text-light'>Creative business card design service </a></h4>
                </div>
              </div>
              </div>
              <div className='col'>
              <div className="fwb-main-x fwb-a">
                <div className="work-thumbnails">
                  <a href="" >	<img src={frog} alt="portfolio reevan" className="img-fluid"/> </a>
                </div>
                <div className="work-details">
                  <p className="mb10 text-light">UX, UI, Graphic Design</p>
                  <h4><a href="" className='text-light'>Creative business card design service </a></h4>
                </div>
              </div>
              </div>
              <div className='col'>
              <div className="fwb-main-x fwb-a">
                <div className="work-thumbnails">
                  <a href="">	<img src={chaal} alt="portfolio reevan" className="img-fluid"/> </a>
                </div>
                <div className="work-details">
                  <p className="mb10 text-light">UX, UI, Graphic Design</p>
                  <h4><a href="" className='text-light'>Creative business card design service </a></h4>
                </div>
              </div>
              </div>
            </div>
            </div>
          </section>

          <section>
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
                </div>
              </div>
            </div>
            <div className='col-5'>
              <img src={scene} alt='scene'/>
            </div>
            </div>
            </div>
            </div>
          </section>


      </div>
      <Footer />
    </>
  )
}

export default Home
