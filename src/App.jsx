import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar';
import Content from './components/content';
import About from './components/about'
import Skill from './components/skill';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Footer from './components/footer';
function App() {
  

  return (
    <>
   
    <Navbar/>
    <Content />
    <About />
    <Skill />
    <Portfolio/>
    <Contact />
    <Footer />
    </>
  )
}

export default App
