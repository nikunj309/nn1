import React from 'react'
// import TopBar from '../components/TopBar'
// import NavBar from '../components/NavBar'
import About from '../components/About'
import FaqsSection from '../components/FaqsSection'
// import Footer from '../components/Footer'

const AboutScreen = () => {
    return (
        <div className="wrapper">
            {/* <TopBar />
            <NavBar /> */}
            <div className="page-header">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2>About Us</h2>
                        </div>
                        <div className="col-12">
                            <a href="">Home</a>
                            <a href="">About Us</a>
                        </div>
                    </div>
                </div>
            </div>
            <About />

            <div className="fact">
                <div className="container-fluid">
                    <div className="row counters">
                        <div className="col-md-6 fact-left wow slideInLeft">
                            <div className="row">
                                <div className="col-6">
                                    <div className="fact-icon">
                                        <i className="flaticon-worker"></i>
                                    </div>
                                    <div className="fact-text">
                                        <h2 data-toggle="counter-up">109</h2>
                                        <p>Expert Workers</p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="fact-icon">
                                        <i className="flaticon-building"></i>
                                    </div>
                                    <div className="fact-text">
                                        <h2 data-toggle="counter-up">485</h2>
                                        <p>Happy Clients</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 fact-right wow slideInRight">
                            <div className="row">
                                <div className="col-6">
                                    <div className="fact-icon">
                                        <i className="flaticon-address"></i>
                                    </div>
                                    <div className="fact-text">
                                        <h2 data-toggle="counter-up">189</h2>
                                        <p>Completed Projects</p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="fact-icon">
                                        <i className="flaticon-crane"></i>
                                    </div>
                                    <div className="fact-text">
                                        <h2 data-toggle="counter-up">20</h2>
                                        <p>Running Projects</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FaqsSection/>
            {/* <Footer/> */}
        </div>
    )
}

export default AboutScreen