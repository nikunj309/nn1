import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import TopBar from './components/TopBar.jsx'
import NavBar from './components/NavBar.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppIcon from './components/WhatsAppIcon.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TopBar/>
    <NavBar/>
    <WhatsAppIcon/>
    <App />
    <Footer/>
  </React.StrictMode>,
)
