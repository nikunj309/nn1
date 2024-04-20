import React from 'react';
import service1 from "../assets/img/service-1.jpg"
import service2 from "../assets/img/service-2.jpg"
import service3 from "../assets/img/mengi.jpg"

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
                <a className="btn" href="port.html">+</a>
            </div>
        </div>
    </div>
);

const ServiceSection = () => {
    const servicesData = [
       
        {
            imageSrc: 'https://media.istockphoto.com/id/1150199550/photo/electrician-engineer-work-tester-measuring-voltage-and-current-of-power-electric-line-in.jpg?s=612x612&w=0&k=20&c=5CE_v-zKa9tHncUdONL1jZ_HfCqNakyID8uGYXYU19A=', // Replace with your image path
            overlayText: "Safe & Functional Electrical Systems. Get a free quote for installations, repairs, or maintenance.",
            title: 'Electrical Work',
            },
          {
            imageSrc: 'https://media.istockphoto.com/id/504899590/photo/work-tool-with-plan.jpg?s=612x612&w=0&k=20&c=TMBghsGiG5MmrjZxH6pd637xLF6Wvo-lCU8rOEF0OCw=', // Replace with your image path
            overlayText: "Expert Solutions for All Leaks & Plumbing Needs. Schedule an appointment today.",
            title: 'Plumbing Work',
            },
          {
            imageSrc: 'https://media.istockphoto.com/id/1076060666/photo/industrial-worker-building-exterior-walls-using-hammer-for-laying-bricks-in-cement-detail-of.jpg?s=612x612&w=0&k=20&c=iPQtK4CLHun56ASaHd98ULpj4qpdZHvcjhiLVE17GdU=', // Replace with your image path
            overlayText: "Beautiful & Lasting Brickwork. Enhance your property with our expert services.",
            title: 'Brick Work',
              },
          {
            imageSrc: 'https://st.depositphotos.com/1440280/4574/i/600/depositphotos_45743753-stock-photo-window-fitter-at-work.jpg', // Replace with your image path
            overlayText: "Improve Efficiency & Aesthetics. Upgrade your windows with double glazing.",
            title: 'Double Glazing Work',
           },
          {
            imageSrc: 'https://media.istockphoto.com/id/1061173208/photo/young-carpenter-using-sander-while-working-on-a-piece-of-wood.webp?s=2048x2048&w=is&k=20&c=QuOBvKL_XmA8_8rerPou32TcObllGxoIJc2E1JvCDEY=', // Replace with your image path
            overlayText: "Custom Carpentry & Furniture. Create dream spaces with our skilled craftsmen.",
            title: 'Carpentry and Joinery',
             },
          {
            imageSrc: 'https://media.istockphoto.com/id/509040118/photo/painter-man-looking-a-color-palette.webp?s=2048x2048&w=is&k=20&c=GHhfV1g6UJ85F15V7yLxe9hsxB8bgnVsKdiaRFd9ba4=', // Replace with your image path
            overlayText: "Transform Your Space. Refresh your interior or exterior with our painting services.",
            title: 'Painting and Decoration',
            },
          {
            imageSrc: 'https://img.freepik.com/free-photo/various-pantry-products-ingredients_23-2148796319.jpg?t=st=1713617919~exp=1713621519~hmac=f759bb1bedc3a360a122fed1afac98070529712cea7fdaab0025c70cfd5829b3&w=1060', // Replace with your image path
            overlayText: "Dream Kitchen Renovations. Design, plan, and install your perfect kitchen.",
            title: 'Kitchen Fittings',
           },
          {
            imageSrc: 'https://media.istockphoto.com/id/1334258276/photo/plumber-repairing-a-tap-in-the-bathroom.webp?s=2048x2048&w=is&k=20&c=0IycnMDfMpnLnGq58VA_BI-vb6W-LcAynUSPckRc1rg=', // Replace with your image path
            overlayText: "Relaxing Bathroom Retreats. Let us renovate your bathroom for ultimate comfort.",
            title: 'Bathroom Works',
           },
          {
            imageSrc: 'https://img.freepik.com/free-photo/tiler-working-renovation-apartment_23-2149278614.jpg?t=st=1713617938~exp=1713621538~hmac=8f0004baa712518449988730fa6a6613029925e179c38285413740099a09ebe7&w=1060', // Replace with your image path
            overlayText: "Flawless Tile Installation. Upgrade your floors, walls, and countertops with our expertise.",
            title: 'Tiling',
            },
          {
            imageSrc: 'https://img.freepik.com/free-photo/man-working-with-protection-helmet-full-shot_23-2149343641.jpg?t=st=1713617956~exp=1713621556~hmac=0cb0eb0ad68e11dd1087c8dba6550579b913035a9c280ea3b63d53cdf62087a9&w=1060', // Replace with your image path
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
