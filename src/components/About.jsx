import React from 'react';
import aboutI from '../assets/img/IMG-20240313-WA0056.jpg'
const About = () => (
    <div className="about wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-5 col-md-6">
                    <div className="about-img">
                        <img src={aboutI} alt="Image" />
                    </div>
                </div>
                <div className="col-lg-7 col-md-6">
                    <div className="section-header text-left">
                        <p>Welcome to VNH CONSTRUCTION LTD </p>
                        <h2>A Legacy of Quality Craftsmanship</h2>
                    </div>
                    <div className="about-text">
                        <p> VNH CONSTRUCTION LTD is your premier destination for refurbished residential and commercial properties. We specialize in a wide range of services including electrical work, plumbing, brickwork, double glazing, carpentry, painting, kitchen and bathroom fittings, tiling, bitumen, and glass fiber roofing work. Our team of skilled professionals is dedicated to delivering high-quality craftsmanship, attention to detail, and exceptional customer satisfaction. Contact us to transform your space into a stunning, functional environment tailored to your needs.</p>
                      
                        <a className="btn" href="/projects">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default About