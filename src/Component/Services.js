import React from 'react';
import Header from './Header';
import './service.css';
import { FaArrowRight } from "react-icons/fa";
import Footer from './Footer';
import service from '../Component/img/service.png';
import service1 from '../Component/img/service1.png';
import service2 from '../Component/img/service2.png';
import service3 from '../Component/img/service3.png';
import service4 from '../Component/img/service4.png';
import service5 from '../Component/img/service5.png';
import service6 from '../Component/img/service6.png';
import service7 from '../Component/img/service7.png';
import service8 from '../Component/img/service8.png';
import service9 from '../Component/img/service9.png';
import service10 from '../Component/img/service10.png';
import service11 from '../Component/img/service11.png';
import service12 from '../Component/img/service12.png';
import service13 from '../Component/img/service13.png';
import service14 from '../Component/img/service14.png';
import service15 from '../Component/img/service15.png';
import service16 from '../Component/img/service16.png';
import service17 from '../Component/img/service17.png';
import service18 from '../Component/img/service18.png';
import client from '../Component/img/client.png';
import tech from '../Component/img/tech.png';
import tech2 from '../Component/img/tech2.png';




function Services() {
  return (
    <div>
      <Header />
      <div className='__services'>
        <div className='__servicesmain'>
          <div className='__serviceshead'>
            <section className='__servicetitle'>
              <div className='container'>
                <div className="row pt80 pb30 justify-content-center">
                  <div className="col-lg-9">
                    <div className="page-headings service-page">
                      <span className="sub-heading mb15 aos-init aos-animate" data-aos="fade-in" data-aos-delay="200">Our Services</span>
                      <h1 data-aos="fade-in" data-aos-delay="400" className="aos-init __serviceh1 aos-animate"><span className="ree-text rt45">DigitalArc</span>, A web development agency in India where experience meets innovation.</h1>
                      <p className="mt30 h-light aos-init aos-animate" data-aos="fade-in" data-aos-delay="600">We are a team of top talent delivering enterprise solutions globally. we evolve with the advancement in technology because we believe in making our technology as your innovation.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Design section */}
            <section className='sec-pad'>
              <div className="container">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="page-headings m-center">
                      <h3>We make the collaboration of people and interface more intensive and exciting.</h3>
                      <a href="" className="ree-btns  ree-btn-grdt3 mt40">Need a Designer <FaArrowRight /> </a>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="ml25 m-ml0 m-mt60">
                      <h2 className="h1a m-center">Design Service</h2>
                      <div className="services-blocks-set mt30">
                        <div className="servic-block-a">
                          <img src={service} alt="service" className="icon70 mb20" />
                          <a href="#" className="link-serv"><FaArrowRight /></a>
                          <h4 className="mb15"><a href="#"> Websites Design </a></h4>
                          <p>We create comprehensive and sophisticated yet simple to use interfaces for your web app.</p>
                        </div>
                        <div className="servic-block-a">
                          <img src={service1} alt="service" className="icon70 mb20" />
                          <a href="#" className="link-serv"><FaArrowRight /> </a>
                          <h4 className="mb15"><a href="#">Mobile Apps Design</a></h4>
                          <p>We create comprehensive and sophisticated yet simple to use interfaces for your web app.</p>
                        </div>
                        <div className="servic-block-a">
                          <img src={service2} alt="service" className="icon70 mb20" />
                          <a href="#" className="link-serv"><FaArrowRight /> </a>
                          <h4 className="mb15"><a href="#">UX/UI Design</a></h4>
                          <p>We create comprehensive and sophisticated yet simple to use interfaces for your web app.</p>
                        </div>
                        <div className="servic-block-a">
                          <img src={service3} alt="service" className="icon70 mb20" />
                          <a href="#" className="link-serv"><FaArrowRight /> </a>
                          <h4 className="mb15"><a href="#">Branding</a></h4>
                          <p>We create comprehensive and sophisticated yet simple to use interfaces for your web app.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Development section */}
            <section className='sec-pad __development'>
              <div className="container">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="page-headings m-center">
                      <h3>We make the collaboration of people and interface more intensive and exciting.</h3>
                      <a href="" class="ree-btns  ree-btn-grdt3 mt40">Need a Designer <FaArrowRight /> </a>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="ml25 m-ml0 m-mt60">
                      <h2 className="h1a m-center">Development Service</h2>
                      <div className="services-blocks-set mt30">
                        <div className="servic-block-a">
                          <img src={service4} alt="service" className="icon70 mb20" />
                          <a href="#" class="link-serv"><FaArrowRight /> </a>
                          <h4 className="mb15"><a href="#"> App Development </a></h4>
                          <p>We create comprehensive and sophisticated yet simple to use interfaces for your web app.</p>
                        </div>
                        <div className="servic-block-a">
                          <img src={service5} alt="service" className="icon70 mb20" />
                          <a href="#" className="link-serv"><FaArrowRight /> </a>
                          <h4 className="mb15"><a href="#">Web Development</a></h4>
                          <p>We create comprehensive and sophisticated yet simple to use interfaces for your web app.</p>
                        </div>
                        <div className="servic-block-a">
                          <img src={service6} alt="service" className="icon70 mb20" />
                          <a href="#" className="link-serv"><FaArrowRight /> </a>
                          <h4 className="mb15"><a href="#">eCommerce Development</a></h4>
                          <p>We create comprehensive and sophisticated yet simple to use interfaces for your web app.</p>
                        </div>
                        <div className="servic-block-a">
                          <img src={service7} alt="service" className="icon70 mb20" />
                          <a href="#" className="link-serv"><FaArrowRight /> </a>
                          <h4 className="mb15"><a href="#">Cloud Development</a></h4>
                          <p>We create comprehensive and sophisticated yet simple to use interfaces for your web app.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Marketing sectoion */}
            <section className='sec-pad'>
              <div className="container">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="page-headings m-center">
                      <h3>We make the collaboration of people and interface more intensive and exciting.</h3>
                      <a href="" className="ree-btns  ree-btn-grdt3 mt40">Need a Designer <FaArrowRight /> </a>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="ml25 m-ml0 m-mt60">
                      <h2 className="h1a m-center">Marketing Service</h2>
                      <div className="services-blocks-set mt30">
                        <div className="servic-block-a">
                          <img src={service8} alt="service" className="icon70 mb20" />
                          <a href="#" class="link-serv"><FaArrowRight /> </a>
                          <h4 className="mb15"><a href=""> Search Engine Optimization </a></h4>
                          <p>We create comprehensive and sophisticated yet simple to use interfaces for your web app.</p>
                        </div>
                        <div className="servic-block-a">
                          <img src={service9} alt="service" className="icon70 mb20" />
                          <a href="#" className="link-serv"><FaArrowRight /> </a>
                          <h4 className="mb15"><a href="#">Social Media Optimization</a></h4>
                          <p>We create comprehensive and sophisticated yet simple to use interfaces for your web app.</p>
                        </div>
                        <div className="servic-block-a">
                          <img src={service10} alt="service" className="icon70 mb20" />
                          <a href="#" className="link-serv"><FaArrowRight /></a>
                          <h4 className="mb15"><a href="#">Pay-Per-Click</a></h4>
                          <p>We create comprehensive and sophisticated yet simple to use interfaces for your web app.</p>
                        </div>
                        <div className="servic-block-a">
                          <img src={service11} alt="service" className="icon70 mb20" />
                          <a href="#" className="link-serv"><FaArrowRight /></a>
                          <h4 className="mb15"><a href="#">Online Reputation Management</a></h4>
                          <p>We create comprehensive and sophisticated yet simple to use interfaces for your web app.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>



            <section className="r-bg-7  sec-pad">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <div className="page-headings text-center">
                      <h2 className="mb15">Development Process We Follow</h2>
                      <p>Our design process follows a proven approach. We begin with a deep understanding of your needs and create a planning template.</p>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center mt30">
                  <div className="col-lg-3 col-md-4 col-sm-6 mt30">
                    <div className="process-content ree-card">
                      <span className="setps hst-1">01</span>
                      <div className="process-block">
                        <div className="process-icon">
                          <img src={service12} alt="service" class="icon70 mb20" />
                        </div>
                        <h4>Requirement Gathering</h4>
                        <p>Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi. </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 mt30">
                    <div className="process-content ree-card">
                      <span className="setps hst-2">02</span>
                      <div className="process-block ">
                        <div className="process-icon">
                          <img src={service13} alt="service" class="icon70 mb20" />
                        </div>
                        <h4>Design</h4>
                        <p>Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi. </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 mt30 ">
                    <div className="process-content ree-card">
                      <span className="setps hst-3">03</span>
                      <div className="process-block">
                        <div className="process-icon">
                          <img src={service14} alt="service" class="icon70 mb20" />
                        </div>
                        <h4>Prototype</h4>
                        <p>Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi. </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 mt30">
                    <div className="process-content ree-card">
                      <span className="setps hst-4">04</span>
                      <div className="process-block">
                        <div className="process-icon">
                          <img src={service15} alt="service" class="icon70 mb20" />
                        </div>
                        <h4>Development</h4>
                        <p>Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi. </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 mt30">
                    <div className="process-content ree-card">
                      <span className="setps hst-5">05</span>
                      <div className="process-block">
                        <div className="process-icon">
                          <img src={service16} alt="service" class="icon70 mb20" />
                        </div>
                        <h4>Quality Assurance</h4>
                        <p>Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi. </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-4 col-sm-6 mt30">
                    <div className="process-content ree-card">
                      <span className="setps hst-6">06</span>
                      <div className="process-block">
                        <div className="process-icon">
                          <img src={service17} alt="service" class="icon70 mb20" />
                        </div>
                        <h4>Deployment</h4>
                        <p>Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi. </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-4 col-sm-6 mt30">
                    <div className="process-content ree-card">
                      <span className="setps hst-6">07</span>
                      <div className="process-block">
                        <div className="process-icon">
                          <img src={service18} alt="service" class="icon70 mb20" />
                        </div>
                        <h4>Support &amp; Maintenance</h4>
                        <p>Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="r-bg-d  sec-pad">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <div className="page-headings text-center">
                      <h2 className="mb15">Industries We Serve</h2>
                      <p>Our design process follows a proven approach. We begin with a deep understanding of your needs and create a planning template. </p>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center mt30">
                  <div className="col-lg-3 col-sm-6 col-6">
                    <div className="industry-workfor">
                      <img src={tech} alt="img" />
                      <h6>Real estate</h6>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 col-6">
                    <div className="industry-workfor">
                      <img src={tech2} alt="img" />
                      <h6>Tour & Travels</h6>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 col-6">
                    <div className="industry-workfor">
                      <img src={service12} alt="img" />
                      <h6>Education</h6>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 col-6">
                    <div className="industry-workfor">
                      <img src={service3} alt="img" />
                      <h6>Transport</h6>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 col-6">
                    <div className="industry-workfor">
                      <img src={service9} alt="img" />
                      <h6>Event</h6>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 col-6">
                    <div className="industry-workfor">
                      <img src={service8} alt="img" />
                      <h6>eCommerce</h6>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 col-6">
                    <div className="industry-workfor">
                      <img src={service17} alt="img" />
                      <h6>Game</h6>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 col-6">
                    <div className="industry-workfor">
                      <img src={service18} alt="img" />
                      <h6>Healthcare</h6>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 col-6">
                    <div className="industry-workfor">
                      <img src={service4} alt="img" />
                      <h6>Finance</h6>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 col-6">
                    <div className="industry-workfor">
                      <img src={service6} alt="img" />
                      <h6>Restaurant</h6>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 col-6">
                    <div className="industry-workfor">
                      <img src={service10} alt="img" />
                      <h6>On-Demand</h6>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 col-6">
                    <div className="industry-workfor">
                      <img src={service14} alt="img" />
                      <h6>Grocery</h6>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="sec-pad r-bg-e">
              <div className="container">
                <div className="ree">
                  <div className="row">
                    <div className="col-lg-6 vcenter">
                      <div className="cta-heading">
                        <span className="sub-heading mb15">Contact Us</span>
                        <h2>Have a <span className="ree-text rt40">project</span> in mind? Let's get to chat.</h2>
                        <a href="" className="ree-btn  ree-btn-grdt1  mt40 mr20"> Contact </a>
                        <a href="" className="ree-btns  whatsapp-bg mt40" target="_blank"> Whatsapp </a>

                      </div>
                    </div>
                    <div className="col-lg-6 vcenter text-center">
                      <div className="sol-img-png">
                        <img src={client} alt="working with client" className="img-fluid" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

          </div>
        </div>

      </div>

      <Footer />
    </div>
  )
}

export default Services
