

import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import im1 from "../assets/img1/B1.png"
import im2 from "../assets/img1/B2.png"
import im3 from "../assets/img1/B3.png"
import im4 from "../assets/img1/B4.png"
// import im1 from "../assets/img/home-slide-1.jpg"
// import im2 from "../assets/img/home-slide-2.jpg"
// import im3 from "../assets/img/home-slide-3.jpg"
const CarouselComponent = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <div className="carousel-image-container">
          <img
            className="d-block w-100"
            src={im1}
            alt="Carousel Image"
          />
          <div className="carousel-image-overlay"></div>
        </div>
        {/* <img
          className="d-block w-100"
          src={im1}
          alt="Carousel Image"
        /> */}
        <Carousel.Caption>
          <p className="animated fadeInRight" >We Are Professional</p>
          <h1 className="animated fadeInLeft">For Your Dream Projects</h1>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <div className="carousel-image-container">
          <img
            className="d-block w-100"
            src={im2}
            alt="Carousel Image"
          />
          <div className="carousel-image-overlay"></div>
        </div>
        <Carousel.Caption>
          <p className="animated fadeInRight">Professional Builder</p>
          <h1 className="animated fadeInLeft">We Build Your Home</h1>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <div className="carousel-image-container">
          <img
            className="d-block w-100"
            src={im3}
            alt="Carousel Image"
            style={{ background: "rgba(0, 0, 0, .3)" }}
          />
          <div className="carousel-image-overlay"></div>
        </div>
        <Carousel.Caption>
          <p className="animated fadeInRight">We Are Trusted</p>
          <h1 className="animated fadeInLeft">For Your Dream Home</h1>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <div className="carousel-image-container">
          <img
            className="d-block w-100"
            src={im4}
            alt="Carousel Image"
            style={{ background: "rgba(0, 0, 0, .3)" }}
          />
          <div className="carousel-image-overlay"></div>
        </div>
        <Carousel.Caption>
          <p className="animated fadeInRight">Trusted Expertise</p>
          <h1 className="animated fadeInLeft">Building Excellence</h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
