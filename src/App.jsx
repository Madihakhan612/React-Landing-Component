import React from 'react'
import Navbar from './Components/Navbar.jsx'
import './App.css'
import Hero from './Components/Hero.jsx'
import About from './Components/About.jsx'
import Services from './Components/Services.jsx'
import Contact from './Components/Contact.jsx'

export const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Contact />
    </>
  )
}

export default App