import React, { useState } from 'react';
import main from '../assets/img/proj1/main.jpg'
import main2 from '../assets/img/proj2/main2.jpg'
const Portfolio = () => {
  const [portfolioItems] = useState([
    {
      id: 1,
      image: main,
      title: 'Karen project',
      category: 'second',
    },
  ]);

  return (
    <div className="portfolio">
      <div className="container">
        <div className="section-header text-center">
          <p>Our Projects</p>
          <h2>Visit Our Projects</h2>
        </div>
        <div className="row portfolio-container">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className={`col-lg-4 col-md-6 col-sm-12 portfolio-item ${item.category} wow fadeInUp`}
              data-wow-delay="0.2s"
            >
              <div className="portfolio-warp">
                <div className="portfolio-img">
                  <img src={item.image} alt="Project" loading="lazy" />
                  <div className="portfolio-overlay"></div>
                </div>
                <div className="portfolio-text">
                  <h3>{item.title}</h3>
                  <a className="btn" href="/show">
                    +
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-12 load-more">
            <a className="btn" href="#">
              Load More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
