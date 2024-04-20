

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
      question: 'What services does Flomatexs Construction Limited offer?',
      answer: 'Flomatexs Construction Limited offers a comprehensive range of construction services including building construction, house renovation, interior design, architecture design, fixing & support, and painting.',
    },
    {
      question: 'How can I request a quote for my construction project?',
      answer: 'Look for a "Contact" or "Get a Quote" page/link on our website.',
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

