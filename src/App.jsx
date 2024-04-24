import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen.jsx'
import AboutScreen from './screens/AboutScreen.jsx'
import ContactScreen from './screens/ContactScreen.jsx'
import ServicesScreen from './screens/ServicesScreen.jsx'
import ProjectScreen from './screens/ProjectScreen.jsx'
import ShowProjectDetails from './screens/ShowProjectDetails.jsx';
import ShowProjectDetails2 from './screens/ShowProjectDetails2.jsx';

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
          <Route path="/show2" element={<ShowProjectDetails2/>} />

        </Routes>
      </Router>
    </>
  )
}

export default App
