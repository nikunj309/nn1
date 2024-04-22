

import React from 'react';

const Footer = () => {
 return (
    <div className="footer wow fadeIn" data-wow-delay="0.3s">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-3">
            <div className="footer-contact">
              <h2>Office Contact</h2>
              <p><i className="fa fa-map-marker-alt"></i>21 Eltisley road, Ilford, IG1 2EP</p>
              <p><i className="fa fa-phone-alt"></i> +44 7586479703</p>
              <div className="footer-social">
                <a href="" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                <a href="" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                <a href="" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                <a href="" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                <a href="" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="footer-link">
              <h2>Useful Pages</h2>
              <ul>
                <li><a href="/about">About Us</a></li>
                <li><a href="/contact">Contact Us</a></li>
                <li><a href="/projects">Projects</a></li>
                <li><a href="/services">Services</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-lg-6">
            <div className="newsletter">
              <p>
                Specializing in the complete transformation of residential and commercial properties, our services include electrical, plumbing, brickwork, double glazing, carpentry, joinery, painting, decoration, kitchen and bathroom works, tiling, and roofing. We bring your spaces back to life with quality, durability, and style.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container footer-menu">
        <div className="f-menu">
          <a href="">Terms of use</a>
          <a href="">Privacy policy</a>
          <a href="">Cookies</a>
          <a href="">Help</a>
          <a href="">FQAs</a>
        </div>
      </div>
      <div className="container copyright">
        <div className="row">
          <div style={{ textAlign: "center" }}>
            <p>&copy; <a href="">VNH CONSTRUCTION LTD </a>, All Right Reserved.</p>
          </div>
        </div>
      </div>
    </div>
 );
};

export default Footer;
