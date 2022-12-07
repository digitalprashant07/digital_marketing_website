import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import "./portfolio.css";
import edu from "../Component/img/edu.png";
import travel from "../Component/img/travel.png";
import frog from "../Component/img/frog.png";
import chaal from "../Component/img/chaal.png";
import robot from "../Component/img/robot.png";
import com from "../Component/img/com.png";

function Portfolio() {
  return (
    <div>
      <Header />
      <div className="__profession">
        <div className="__professionals">
          <div className="container">
            <div className="row __professionalperson">
              <div className="col-3"></div>
              <div className="col-6">
                <h2 className="text-center">OUR PORTFOLIO</h2>
                <h6 className="text-center">
                  {" "}
                  visual collection of our work, showcasing to you
                </h6>
              </div>
              <div className="col-3"></div>
            </div>
            <div className="row">
              <div className="col-md-6 col-sm-6">
                <img
                  className="zoom"
                  style={{ width: "100%" }}
                  src={edu}
                  alt="edu"
                />
                <div>
                  <h6 className="text-center"> CIA academy</h6>
                  <p className="text-center">Education Website</p>
                </div>
              </div>
              <div className="col-md-6 col-sm-6">
                <img
                  className="zoom"
                  style={{ width: "100%" }}
                  src={chaal}
                  alt="travel "
                />
                <div>
                  <h6 className="text-center">ChaalChakra</h6>
                  <p className="text-center">Astrology Website</p>
                </div>
              </div>
              <div className="col-md-6 col-sm-6">
                <img
                  className="zoom"
                  style={{ width: "100%" }}
                  src={frog}
                  alt="edu"
                />
                <div>
                  <h6 className="text-center">Bull & Frog const. </h6>
                  <p className="text-center">Construction Website</p>
                </div>
              </div>
              <div className="col-md-6 col-sm-6">
                <img
                  className="zoom"
                  style={{ width: "100%" }}
                  src={travel}
                  alt="travel "
                />
                <div>
                  <h6 className="text-center">Fauget</h6>
                  <p className="text-center">Travel Website</p>
                </div>
              </div>

              <div className="col-md-6 col-sm-6">
                <img
                  className="zoom"
                  style={{ width: "100%" }}
                  src={robot}
                  alt="edu"
                />
                <div>
                  <h6 className="text-center"> NAXLY </h6>
                  <p className="text-center">Finance Website</p>
                </div>
              </div>
              <div className="col-md-6 col-sm-6">
                <img
                  className="zoom"
                  style={{ width: "100%" }}
                  src={com}
                  alt="travel "
                />
                <div>
                  <h6 className="text-center">Mitchell USA</h6>
                  <p className="text-center">Ecommerce Website</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Portfolio;
