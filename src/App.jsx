import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen.jsx'
import AboutScreen from './screens/AboutScreen.jsx'
import ContactScreen from './screens/ContactScreen.jsx'
import ServicesScreen from './screens/ServicesScreen.jsx'
import TeamScreen from './screens/TeamScreen.jsx'
import ProjectScreen from './screens/ProjectScreen.jsx'
import ShowProjectDetails from './screens/ShowProjectDetails.jsx';
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
          <Route path="/projects" element={<ProjectScreen />} />
          <Route path="/show" element={<ShowProjectDetails />} />

        </Routes>
      </Router>
    </>
  )
}

export default App
