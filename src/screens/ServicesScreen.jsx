import React from 'react'
import ServiceSection from '../components/ServiceSection'
import FaqsSection from '../components/FaqsSection'

const ServicesScreen = () => {
  return (
    <div className='wrapper'>
         <div className="page-header">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2>Our Services</h2>
                        </div>
                        <div className="col-12">
                            <a href="/">Home</a>
                            <a href="/services">Our Services</a>
                        </div>
                    </div>
                </div>
            </div>
            <ServiceSection/>
            <FaqsSection/>
    </div>
  )
}

export default ServicesScreen