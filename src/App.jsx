import { useState } from 'react'
import './App.css'
import TopBar from './components/TopBar'
import NavBar from './components/NavBar'
import Carousel from './components/Carousel'
import MissionVisionGoal from './components/MissionVisionGoal '
import About from './components/About'
import ServiceSection from './components/ServiceSection.jsx'
import TeamSection from './components/TeamSection.jsx'
import FaqsSection from './components/FaqsSection.jsx'
import BlogSection from './components/BlogSection.jsx'
import Footer from './components/Footer.jsx'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen.jsx'
import AboutScreen from './screens/AboutScreen.jsx'
import ContactScreen from './screens/ContactScreen.jsx'
import ServicesScreen from './screens/ServicesScreen.jsx'
import TeamScreen from './screens/TeamScreen.jsx'
import ProjectScreen from './screens/ProjectScreen.jsx'
// import TestimonialSection from './components/TestimonialSection.jsx'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/about" element={<AboutScreen />} />
          <Route path="/contact" element={<ContactScreen />} />
          <Route path="/services" element={<ServicesScreen />} />
          <Route path="/team" element={<TeamScreen />} />
          <Route path="/projects" element={<ProjectScreen />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
