import React from 'react';

const Footer = () => {
  return (
    <div className="footer wow fadeIn" data-wow-delay="0.3s">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-3">
            <div className="footer-contact">
              <h2>Office Contact</h2>
              <p><i className="fa fa-map-marker-alt"></i>21 Eltisley road
                Ilford
                IG1 2EP</p>
              <p><i className="fa fa-phone-alt"></i> +44 7586479703</p>
              {/* <p><i className="fa fa-phone-alt"></i>+254 723 049800</p> */}
              {/* <p><i className="fa fa-envelope"></i>Flomatexsbuildingconstractor@gmail.com</p> */}
              <div className="footer-social">
                <a href=""><i className="fab fa-twitter"></i></a>
                <a href=""><i className="fab fa-facebook-f"></i></a>
                <a href=""><i className="fab fa-linkedin-in"></i></a>
                <a href=""><i className="fab fa-instagram"></i></a>
                <a href=""><i className="fab fa-youtube"></i></a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="footer-link">
              <h2>Services Areas</h2>
              <a href="">Building Construction</a>
              <a href="">House Renovation</a>
              <a href="">Architecture Design</a>
              <a href="">Interior Design</a>
              <a href="">Painting</a>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="footer-link">
              <h2>Useful Pages</h2>
              <a href="/about">About Us</a>
              <a href="/contact">Contact Us</a>
              <a href="/team">Our Team</a>
              <a href="/projects">Projects</a>
              <a href="">Testimonial</a>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="newsletter">
              <h2>Newsletter</h2>
              <p>
                Stay Informed: Receive the latest updates and news directly to your inbox.
                Get Exclusive Content: Access subscriber-only articles, offers, and promotions.
                Be Inspired: Discover new ideas, trends, and insights to inspire your journey.
              </p>
              <div className="form">
                <input className="form-control" placeholder="Email here" />
                <button className="btn">Submit</button>
              </div>
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
          <div style={{textAlign:"center"}}>
            <p>&copy; <a href="">VNH CONSTRUCTION LTD </a>, All Right Reserved.</p>
          </div>
          {/* <div className="col-md-6">
            <p>Designed By <a href="http://dennisnziokidnx.com/">DNX EMPIRE</a></p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
