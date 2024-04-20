

import React, { useState } from 'react';

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => setIsOpen(!isOpen);

  return (
    <div className="card">
      <div className="card-header" onClick={toggleAnswer}>
        <a className="card-link collapsed">
          {question} {isOpen ? <span style={{marginLeft:"50px"}}>-</span> : <span style={{marginLeft:"50px"}}>+</span>}
        </a>
      </div>
      {isOpen && (
        <div className="card-body">
          {answer}
        </div>
      )}
    </div>
  );
};

const FaqsSection = () => {
  const faqs = [
    {
      question: ' What is the process for electrical work in refurbished properties?',
      answer: 'Our electrical work process involves a thorough assessment of the existing system, identifying outdated components, and replacing or upgrading them to ensure safety and compliance with local codes.',
    },
    {
      question: 'How does your company handle the replacement of kitchen fittings and bathroom works?',
      answer: 'We specialize in overhauling kitchen fittings and bathroom works, selecting high-quality materials and finishes that match the propertys style. We ensure installations are done to the highest standards, focusing on durability, functionality, and energy efficiency.',
    },
  ];

  return (
    <div className="faqs">
      <div className="container">
        <div className="section-header text-center">
          <p>Frequently Asked Questions</p>
          <h2>You May Ask</h2>
        </div>
        <div className="row">
          <div className="col-md-12">
            {faqs.map((faq, index) => (
              <FaqItem key={index} {...faq} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqsSection;

