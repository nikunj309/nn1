import React from 'react'
import MissionVisionGoal from '../components/MissionVisionGoal '
import About from '../components/About'
import ServiceSection from '../components/ServiceSection'
import TeamSection from '../components/TeamSection'
import FaqsSection from '../components/FaqsSection'
// import Carousel from '../components/Carousel'
import SEO from '../components/SEO'
import CarouselComponent from '../components/Carousel'

const HomeScreen = () => {
    return (
        <div className="wrapper">
            <SEO
                title="VNH CONSTRUCTION LTD "
                description="Welcome to our website. We serve Barking, Newham, Dagenham, and more."
                keywords="Barking, Newham, Dagenham, Erith, Dartford, Havering, Hornchurch, Walthamstow, Epping forest, Enfield, Croydon, Wembley, Harrow, Hounslow, Slough, Woking, Watford, Luton, Chelmsford"
            />
            {/* <Carousel /> */}
            <CarouselComponent/>
            <MissionVisionGoal />
            <About />
            <div>
            <div className="feature wow fadeInUp" data-wow-delay="0.1s">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-md-12">
                            <div className="feature-item">
                                <div className="feature-icon">
                                    <i className="flaticon-worker"></i>
                                </div>
                                <div className="feature-text">
                                    <h3>Expert Worker</h3>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div className="feature-item">
                                <div className="feature-icon">
                                    <i className="flaticon-building"></i>
                                </div>
                                <div className="feature-text">
                                    <h3>Quality Work</h3>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div className="feature-item">
                                <div className="feature-icon">
                                    <i className="flaticon-call"></i>
                                </div>
                                <div className="feature-text">
                                    <h3>24/7 Support</h3>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

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
            </div>
            <ServiceSection />
            <TeamSection />
            <FaqsSection />
            {/* <TestimonialSection/> */}
            {/* <Footer /> */}
        </div>
    )
}

export default HomeScreen