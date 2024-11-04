import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Accordion = () => {
  const [data, setData] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    axios.get('https://win24-assignment.azurewebsites.net/api/faq')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {data.map((item, index) => (
        <div key={index} className="accordion-item">
          <button onClick={() => toggleAccordion(index)} className="accordion-header">
            {item.title}
            <span className={`chevron ${openIndex === index ? 'open' : ''}`}><span>&#8250;</span></span>
          </button>
          <div className={`accordion-content ${openIndex === index ? 'open' : ''}`}>
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;