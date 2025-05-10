import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import EducationTimeline from './components/Education'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer';
function App() {


  return (
    <>
        <Navbar />
        <Hero/>
        <About/>
        <EducationTimeline/>
        <Skills/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default App
