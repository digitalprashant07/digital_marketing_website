import React from 'react';
import Header from './Header';
import './aboutus.css'
import Footer from './Footer';
import coder from '../Component/img/coder.jpg';
import tech from '../Component/img/tech.png';
import tech1 from '../Component/img/tech1.png';
import tech2 from '../Component/img/tech2.png';
import tech3 from '../Component/img/tech3.png';
import tech4 from '../Component/img/tech4.png';
import tech5 from '../Component/img/tech5.png';
import team from '../Component/img/team.png';
import { FaBuilding } from "react-icons/fa";


function Aboutus() {
  return (
    <div>
      <Header />
      <div className='_aboutus'>
        <div className='__aboutus'>
          <div className='container'>
            <div className='row'>
              <div className='col-6 __column'>
                <h5><FaBuilding /> Who We Are</h5>
                <h1>We are a <span className='__creative'>creative</span>  digital agency based in India.</h1>
                <p className='__colp1'>We are a team of top talent delivering enterprise solutions globally. we evolve with the advancement in technology because we believe in making our technology as your innovation.</p>
                <p className='__colp2'>Our experts provide a wide range of services including app design, web development, digital marketing, ecommerce solutions and cloud development. We stay updated with the technology to build innovative digital products that meet client requirements across multiple business verticals and domains by housing some of the best professionals in the industry.</p>
              </div>
              <div className='col-6 __column'>
                <img src={coder} alt="aboutus" className='__coder'></img>
              </div>
            </div>
          </div>

          {/* new section are started from here */}
          <section className='sec-pad'>
            <div className='__aboutarc'>
              <div className='container'>
                <div className='row'>
                  <div className='col-lg-4'>
                    <div className="page-headings side-pghd">
                      <span className="sub-heading mb15">About DigitalArc?</span>
                      <h2 className='__archead'>DigitalArc</h2>
                    </div>
                  </div>
                  <div className='col-lg-8'>
                    <h4>DigitalArc is a full-service web, app and digital marketing company based in India.</h4>
                    <p>Our experts provide a wide range of services including app design, web development, digital marketing, ecommerce solutions and cloud development. We stay updated with the technology to build innovative digital products that meet client requirements across multiple business verticals and domains by housing some of the best professionals in the industry. To transform the concepts to design, concluding with full executions, we also stay updated with the latest trending technologies. And we evolve with the advancement in technology because we believe in making our technology as your innovation.</p>
                    <p>To learn more about our approach to business and work, feel free to hop on over to our Open Contact Page.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* new section are started from here */}
          <section className='sec-pad __transparent'>
            <div className='__ethics'>
              <div className='container'>
                <div className='row justify-content-center'>
                  <div className='col-lg-7 text-center'>
                    <div className='__ethichead'>
                      <h2>Transparency & Ethics</h2>
                      <p>Lipsum dolor sit amet, consectetur adipisicing elit. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className="col-lg-4 col-sm-6">
                    <div className="ree-card r-bg-c mt60">
                      <div className="ree-card-img"><img className="__imageicons" src={tech} alt="services" /> </div>
                      <div className="ree-card-content mt40">
                        <h3 className="mb15">Client-centric Approach</h3>
                        <p>Our software house has been recognised by google for outstanding android application	quality.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-sm-6">
                    <div className="ree-card r-bg-c mt60">
                      <div className="ree-card-img">
                        <img className="__imageicons" src={tech1} alt="services" />
                      </div>
                      <div className="ree-card-content mt40">
                        <h3 className="mb15">Service Delivered in Time</h3>
                        <p>Our software house has been recognised by google for outstanding android application	quality.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-sm-6">
                    <div className="ree-card r-bg-c mt60">
                      <div className="ree-card-img"><img className="__imageicons" src={tech2} alt="services" /> </div>
                      <div className="ree-card-content mt40">
                        <h3 className="mb15">Effective Collaboration</h3>
                        <p>Our software house has been recognised by google for outstanding android application	quality.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-sm-6">
                    <div className="ree-card r-bg-c mt60">
                      <div className="ree-card-img"><img className="__imageicons" src={tech3} alt="services" /> </div>
                      <div className="ree-card-content mt40">
                        <h3 className="mb15">Employee Benefits</h3>
                        <p>Our software house has been recognised by google for outstanding android application	quality.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-sm-6">
                    <div className="ree-card r-bg-c mt60">
                      <div className="ree-card-img"><img className="__imageicons" src={tech4} alt="services" /> </div>
                      <div className="ree-card-content mt40">
                        <h3 className="mb15">Team Work</h3>
                        <p>Our software house has been recognised by google for outstanding android application	quality.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-sm-6">
                    <div className="ree-card r-bg-c mt60">
                      <div className="ree-card-img"><img className="__imageicons" src={tech5} alt="services" /> </div>
                      <div className="ree-card-content mt40">
                        <h3 className="mb15">Quality of Service</h3>
                        <p>Our software house has been recognised by google for outstanding android application	quality.</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </section>

          {/* new section are started from here */}
          <section className='sec-pad'>
            <div className='__carrer'>
              <div className='container'>
                <div className='row'>
                  <div className='col-6'>
                    <div className=''>
                      <img src={team} style={{width:"100%"}}/>
                    </div>
                  </div>
                  <div className='col-6'>
                    <div className="page-headings side-pghd">
                      <span className="sub-heading mb15">TeamWork</span>
                      <h2 className='__archead'>Teamwork is the ability to work together toward a common vision.</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Aboutus;
