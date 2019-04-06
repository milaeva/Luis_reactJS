import React, { Component } from 'react';
// import './App.css';
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import About from './components/About/About'
import Services from './components/Services/Services'
import Skills from './components/Skills/Skills'
import Portpholio from './components/Portpholio/Portpholio'
import Testimonials from './components/Testimonials/Testimonials'
import TestimonialsIcon from './components/TestimonialsIcon/TestimonialsIcon'
import Feedback from './components/Feedback/Feedback'

const App = () => {
  return (
    <div>
      <Header/>
      <Home/>
      <About/>
      <Services/>
      <Skills/>
      <Portpholio/>
      <Testimonials/>
      <TestimonialsIcon/>
      <Feedback/>
    </div>
  )
}

export default App;
