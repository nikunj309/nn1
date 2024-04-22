// import React, { useState } from 'react';
// import im1 from "../assets/img1/im1.jpeg"

// const Carousel = () => {
    
//     const carouselData = [
//         {
//             imageSrc: im1,
//             caption: 'Luxury Kitchen Design',
//             title: 'Create Your Dream Kitchen',
//             link: 'https://api.whatsapp.com/send?phone=+254 722 158950'
//         },
//         {
//             imageSrc: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGx1bWJpbmd8ZW58MHx8MHx8fDA%3D',
//             caption: 'Modern Home Construction',
//             title: 'Build Your Dream Home with Us',
//             link: 'https://api.whatsapp.com/send?phone=+254 722 158950'
//         },
//         {
//             imageSrc: 'https://plus.unsplash.com/premium_photo-1683141410787-c4dbd2220487?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//             caption: 'Award-Winning Home Design',
//             title: 'Expert Design for Your Dream Home',
//             link: 'https://api.whatsapp.com/send?phone=+254 722 158950'
//         }
//     ];

//     const [activeIndex, setActiveIndex] = useState(0);

//     const handlePrev = () => {
//         setActiveIndex((prevIndex) => (prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1));
//     };

//     const handleNext = () => {
//         setActiveIndex((prevIndex) => (prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1));
//     };

//     return (
//         <div id="carousel" className="carousel slide" data-ride="carousel">
//             <ol className="carousel-indicators">
//                 {carouselData.map((item, index) => (
//                     <li key={index} data-target="#carousel" data-slide-to={index} className={index === activeIndex ? 'active' : ''}></li>
//                 ))}
//             </ol>

//             <div className="carousel-inner">
//                 {carouselData.map((item, index) => (
//                     <div key={index} className={`carousel-item ${index === activeIndex ? 'active' : ''}`}>
//                         <img src={item.imageSrc}  alt="Carousel Image" />
//                         <div className="carousel-caption">
//                             <p className="animated fadeInRight" style={{color:"white"}}>{item.caption}</p>
//                             <h1 className="animated fadeInLeft">{item.title}</h1>
//                             <br/><br/><br/><br/><br/><br/><br/><br/>
//                             <a href={item.link} className="btn" >WhatsApp Chat!</a>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev" onClick={handlePrev}>
//                 <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//                 <span className="sr-only">Previous</span>
//             </a>
//             <a className="carousel-control-next" href="#carousel" role="button" data-slide="next" onClick={handleNext}>
//                 <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                 <span className="sr-only">Next</span>
//             </a>
//         </div>
//     );
// }

// export default Carousel;

import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import im1 from "../assets/img/home-slide-1.jpg"
import im2 from "../assets/img/home-slide-2.jpg"
import im3 from "../assets/img/home-slide-3.jpg"
const CarouselComponent = () => {
 return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={im1}
          alt="Carousel Image"
        />
        <Carousel.Caption>
          <p className="animated fadeInRight" style={{color:"white"}}>We Are Professional</p>
          <h1 className="animated fadeInLeft">For Your Dream Projects</h1>
         
          <Button variant="dark" href="https://api.whatsapp.com/send?phone=+44 7586479703">
            WhatsApp Chat!
          </Button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={im2}
          alt="Carousel Image"
        />
        <Carousel.Caption>
          <p className="animated fadeInRight">Professional Builder</p>
          <h1 className="animated fadeInLeft">We Build Your Home</h1>
          <Button variant="dark" href="https://api.whatsapp.com/send?phone=+44 7586479703">
            WhatsApp Chat!
          </Button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={im3}
          alt="Carousel Image"
          style={{background:"rgba(0, 0, 0, .3)"}}
        />
        <Carousel.Caption>
          <p className="animated fadeInRight">We Are Trusted</p>
          <h1 className="animated fadeInLeft">For Your Dream Home</h1>
          <Button variant="dark" href="https://api.whatsapp.com/send?phone=+44 7586479703">
            WhatsApp Chat!
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
 );
};

export default CarouselComponent;
