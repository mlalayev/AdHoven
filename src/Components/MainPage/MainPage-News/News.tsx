import React, { useState } from 'react';
import './News.css';
import NewsData from '../../../../NewsData.json';

interface Article {
  id: number;
  date: string;
  title: string;
  description: string;
  category: string;
  image: string;
}

const News: React.FC = () => {
  const [visibleItems, setVisibleItems] = useState<number>(5);

  const handleLoadMore = () => {
    if (visibleItems < NewsData.length) {
      setVisibleItems(prevVisibleItems => prevVisibleItems + 5);
    }
  };

  return (
    <div className="article-container">
      <div className="article-list">
        {NewsData.slice(0, visibleItems).map(article => (
          <div key={article.id} className="article-card">
            <div className="article-image">
              <img src={article.image} alt={article.title} />
              <div className="article-category">{article.category}</div>
            </div>
            <div className="article-content">
              <span className="article-date">{article.date}</span>
              <h2 className="article-title">{article.title}</h2>
              <p className="article-description">{article.description}</p>
              <button className="read-more">Davamını Oxu »</button>
            </div>
          </div>
        ))}
      </div>
      <div className="load-more-container">
        <button 
          className={`load-more ${visibleItems >= NewsData.length ? 'disabled' : ''}`}
          onClick={handleLoadMore}
          disabled={visibleItems >= NewsData.length}
        >
          More
        </button>
      </div>
    </div>
  );
};

export default News;
