import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './News.css';
import NewsData from '../../../../NewsData.json';

// Define the structure of a single notification
interface Notification {
  id: number;
  date: string;
  title: string;
  description: string;
  category: string;
  image: string;
}

// Define the structure of notifications data
interface NotificationsData {
  az: Notification[];
  en: Notification[];
  ru: Notification[];
}

// Define the structure of the entire NewsData
interface NewsDataType {
  notifications: NotificationsData;
}

const News = () => {
  const { t, i18n } = useTranslation();
  const [visibleItems, setVisibleItems] = useState(5);

  // Type assertion for the imported JSON data
  const newsData = (NewsData as NewsDataType).notifications[i18n.language as keyof NotificationsData] || [];

  const handleLoadMore = () => {
    if (visibleItems < newsData.length) {
      setVisibleItems(prevVisibleItems => prevVisibleItems + 5);
    }
  };

  const articles: Notification[] = newsData.slice(0, visibleItems);

  return (
    <div className="article-container">
      <div className="article-list">
        {articles.map((article: Notification) => (
          <div key={article.id} className="article-card">
            <div className="article-image">
              <img src={article.image} alt={article.title} />
              <div className="article-category">{article.category}</div>
            </div>
            <div className="article-content">
              <span className="article-date">{article.date}</span>
              <h2 className="article-title">{article.title}</h2>
              <p className="article-description">{article.description}</p>
              <button className="read-more">{t('readMore')}</button>
            </div>
          </div>
        ))}
      </div>
      <div className="load-more-container">
        <button
          className={`load-more ${visibleItems >= newsData.length ? 'disabled' : ''}`}
          onClick={handleLoadMore}
          disabled={visibleItems >= newsData.length}
        >
          {t('more')}
        </button>
      </div>
    </div>
  );
};

export default News;
