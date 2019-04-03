import React, { Component } from 'react';
// import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Skills from './components/Skills'
import Portpholio from './components/Portpholio'
import Testimonials from './components/Testimonials'
import TestimonialsIcon from './components/TestimonialsIcon'
import Feedback from './components/Feedback'

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
