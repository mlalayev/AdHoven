import React, { useState } from 'react';
import classNames from 'classnames';
import './FAQ.css';
import faqData from '../../../../FAQQuestionsMainpage.json';
import { useTranslation } from 'react-i18next';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqData {
  az: FaqItem[];
  en: FaqItem[];
  ru: FaqItem[];
}

// Define a type for valid language keys
type LanguageKey = keyof FaqData;

const Faq: React.FC = () => {
  const { t, i18n } = useTranslation();

  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Type assertion for faqData to match FaqData interface
  const currentFaqData = faqData as FaqData;

  // Cast i18n.language to LanguageKey to ensure it's a valid key
  const currentLanguage = i18n.language as LanguageKey;

  return (
    <div className="faq-container">
      <h2 className="faq-title">{t('faqTitle')}</h2>
      {currentFaqData[currentLanguage].map((item: FaqItem, index: number) => (
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
