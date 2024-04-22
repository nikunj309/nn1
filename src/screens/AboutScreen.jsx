import React from 'react'
import About from '../components/About'
import FaqsSection from '../components/FaqsSection'
import DetailsTemplate from '../components/DetailsTemplate'

const AboutScreen = () => {
    return (
        <div className="wrapper">
            <div className="page-header">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2>About Us</h2>
                        </div>
                        <div className="col-12">
                            <a href="/">Home</a>
                            <a href="/about">About Us</a>
                        </div>
                    </div>
                </div>
            </div>
            <About />
            <DetailsTemplate />
            <FaqsSection />
        </div>
    )
}

export default AboutScreen