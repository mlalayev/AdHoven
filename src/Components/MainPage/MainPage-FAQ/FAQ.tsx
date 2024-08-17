import React, { useState } from 'react';
import classNames from 'classnames';
import './FAQ.css'; 
import faqData from '../../../../FAQQuestionsMainpage.json'

interface FaqItem {
  question: string;
  answer: string;
}

const Faq: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2 className="faq-title">Tez-Tez Soruşulan Suallar</h2>
      {faqData.map((item, index) => (
        <div key={index} className="faq-item">
          <div
            className="faq-question"
            onClick={() => toggleAnswer(index)}
          >
            {item.question}
            <span
              className={classNames('faq-icon', {
                'faq-icon-rotate': activeIndex === index,
              })}
            >
              {activeIndex === index ? '▲' : '▼'}
            </span>
          </div>
          <div
            className={classNames('faq-answer', {
              'faq-answer-visible': activeIndex === index,
            })}
          >
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
