import React from 'react';
import blog1 from '../assets/img/blog-1.jpg'
import blog2 from '../assets/img/blog-2.jpg'
import blog3 from '../assets/img/proj7/main.jpg'

const BlogItem = ({ imgSrc, title, author, category, description }) => (
  <div className="col-lg-4 col-md-6 wow fadeInUp">
    <div className="blog-item">
      <div className="blog-img">
        <img src={imgSrc} alt="Image" />
      </div>
      <div className="blog-title">
        <h3>{title}</h3>
        <a className="btn" href="single.html">+</a>
      </div>
      <div className="blog-meta">
        <p>By <a href="">{author}</a></p>
        <p>In <a href="">{category}</a></p>
      </div>
      <div className="blog-text">
        <p>{description}</p>
      </div>
    </div>
  </div>
);

const BlogSection = () => {
  const blogItems = [
    {
      imgSrc: blog1,
      title: 'Insightful Articles',
      author: 'Admin',
      category: 'Construction',
      description: 'Dive into insightful articles that uncover hidden gems of knowledge and spark meaningful conversations.',
    },
    {
      imgSrc: blog2,
      title: 'Inspiring Stories',
      author: 'Admin',
      category: 'Construction',
      description: 'Explore a collection of inspiring stories that ignite curiosity and fuel imagination.',
    },
    {
      imgSrc: blog3,
      title: 'Expert Advice',
      author: 'Admin',
      category: 'Construction',
      description: 'Gain access to expert advice and practical tips to enhance your skills and elevate your personal and professional life.',
    },
  ];

  return (
    <div className="blog">
      <div className="container">
        <div className="section-header text-center">
          <p>Latest Blog</p>
          <h2>Latest From Our Blog</h2>
        </div>
        <div className="row">
          {blogItems.map((blog, index) => (
            <BlogItem key={index} {...blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
