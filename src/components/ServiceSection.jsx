import React from 'react';
import p1 from "../assets/img1/1.jpg"
import p2 from "../assets/img1/2.jpg"
import p3 from "../assets/img1/3.jpg"
import p4 from "../assets/img1/4.jpg"
import p5 from "../assets/img1/5.jpg"
import p6 from "../assets/img1/6.jpg"
import p7 from "../assets/img1/7.png"
import p8 from "../assets/img1/8.jpg"
import p10 from "../assets/img1/10.png"
import p11 from "../assets/img1/11.png"

const ServiceItem = ({ imageSrc, overlayText, title }) => (
    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
        <div className="service-item">
            <div className="service-img">
                <img src={imageSrc} alt="Image" />
                <div className="service-overlay">
                    <p>{overlayText}</p>
                </div>
            </div>
            <div className="service-text">
                <h3>{title}</h3>
                <a className="btn" href="/projects">+</a>
            </div>
        </div>
    </div>
);

const ServiceSection = () => {
    const servicesData = [
       
        {
            imageSrc: p1,
            overlayText: "Safe & Functional Electrical Systems. Get a free quote for installations, repairs, or maintenance.",
            title: 'Electrical Work',
            },
          {
            imageSrc: p2,
            overlayText: "Expert Solutions for All Leaks & Plumbing Needs. Schedule an appointment today.",
            title: 'Plumbing Work',
            },
          {
            imageSrc: p3,
            overlayText: "Beautiful & Lasting Brickwork. Enhance your property with our expert services.",
            title: 'Brick Work',
              },
          {
            imageSrc: p7,
            overlayText: "Improve Efficiency & Aesthetics. Upgrade your windows with double glazing.",
            title: 'Double Glazing Work',
           },
          {
            imageSrc: p8,
            overlayText: "Custom Carpentry & Furniture. Create dream spaces with our skilled craftsmen.",
            title: 'Carpentry and Joinery',
             },
          {
            imageSrc:p10,
            overlayText: "Transform Your Space. Refresh your interior or exterior with our painting services.",
            title: 'Painting and Decoration',
            },
          {
            imageSrc: p4,
            overlayText: "Dream Kitchen Renovations. Design, plan, and install your perfect kitchen.",
            title: 'Kitchen Fittings',
           },
          {
            imageSrc: p11,
            overlayText: "Relaxing Bathroom Retreats. Let us renovate your bathroom for ultimate comfort.",
            title: 'Bathroom Works',
           },
          {
            imageSrc:p6,
            overlayText: "Flawless Tile Installation. Upgrade your floors, walls, and countertops with our expertise.",
            title: 'Tiling',
            },
          {
            imageSrc: p5,
            overlayText: "Reliable & Protective Roofing. Ensure your property's safety with our roofing solutions.",
            title: 'Bitumen and Glass Fiber Roofing Work',
           }
    ];

    return (
        <div className="service">
            <div className="container">
                <div className="section-header text-center">
                    <p>Our Services</p>
                    <h2>We Provide Services</h2>
                </div>
                <div className="row">
                    {servicesData.map((service, index) => (
                        <ServiceItem key={index} {...service} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServiceSection;
