import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import { BsWhatsapp } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";
import Home from './Home';




function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to={Home} >DigitalArc</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={'/'} className="nav-link" aria-current="page">Home</Link>
              </li>
              <li className="nav-item">
                <Link to={'/aboutus'} className="nav-link">About Us</Link>
              </li>
              <li className="nav-item dropdown">
                <Link to={'/services'} className="nav-link">Services</Link>
              </li>
              <li className="nav-item">
                <Link to={'/portfolio'} className="nav-link">Portfolio</Link>
              </li>
              <li className="nav-item">
                <Link to={'/contactus'} className="nav-link">Contact us</Link>
              </li>
            </ul>
            <form className="d-flex">
              <div style={{ marginRight: "15px" }} >
                <button className="btn btn-outline-success __whatsapp"><BsWhatsapp /> WhatsApp here</button>
              </div>
              <div>
                <button className="btn btn-outline-primary __email"><FaEnvelope /> Request Quote</button>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header;
