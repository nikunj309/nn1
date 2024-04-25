import React from 'react'
import MissionVisionGoal from '../components/MissionVisionGoal '
import About from '../components/About'
import ServiceSection from '../components/ServiceSection'
// import TeamSection from '../components/TeamSection'
import FaqsSection from '../components/FaqsSection'
import SEO from '../components/SEO'
import CarouselComponent from '../components/Carousel'
import DetailsTemplate from '../components/DetailsTemplate'

const HomeScreen = () => {
    return (
        <div className="wrapper">
            <SEO
                title="VNH CONSTRUCTION LTD "
                description="Welcome to our website. We serve Barking, Newham, Dagenham, and more."
                keywords="Barking, Newham, Dagenham, Erith, Dartford, Havering, Hornchurch, Walthamstow, Epping forest, Enfield, Croydon, Wembley, Harrow, Hounslow, Slough, Woking, Watford, Luton, Chelmsford"
            />
            <CarouselComponent/>
            <MissionVisionGoal />
            <About />
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

            <DetailsTemplate/>
            <ServiceSection />
            {/* <TeamSection /> */}
            <FaqsSection />
        </div>
    )
}

export default HomeScreen