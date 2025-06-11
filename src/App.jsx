import { useState } from 'react'
import './App.css'
import NavbarTop from './components/NavbarTop/NavbarTop'
import Container from './components/Container/Container'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import Welcome from './components/Welcome/Welcome'
import Slider from './components/Slider/Slider'
import Services from './components/Services/Services'
import About from './components/About/About'
import Logo from './components/Logo/Logo'
import Blog from './components/Blog/Blog'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Bottom from './components/Bottom/Bottom'
import BackToTop from './components/BackToTop/BackToTop'

function App() {

  return (
    <>
     <NavbarTop/>
     <Navbar/>
     <Banner/>
     <Welcome/>
     <Slider/>
     <Services/>
     <About/>
     <Logo/>
     <Blog/>
     <Contact/>
     <Footer/>
     <Bottom/>
     <BackToTop/>
    </>
  )
}

export default App
