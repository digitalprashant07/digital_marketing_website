  import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Header from './Component/Header';
import Home from './Component/Home';
import Aboutus from './Component/Aboutus';
import Services from './Component/Services';
import ContactUs from './Component/ContactUs';
import Portfolio from './Component/Portfolio';
import Footer from './Component/Footer';

function App() {
  return (

  <>
   <Router>
      <Routes>
  <Route path='/'  element={<Home/>}/>
  <Route exact path='/aboutus' element={<Aboutus/>}/>
  <Route exact path='/services' element={<Services/>}/>
  <Route exact path='/portfolio' element={<Portfolio/>}/>
  <Route exact path='/contactus' element={<ContactUs/>}/>
  </Routes>
</Router>  
      </>
  );
}

export default App;
