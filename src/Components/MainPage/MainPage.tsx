import React, { useState, useEffect } from 'react';
import './MainPage.css';
import Card from './MainPage-Cards/Cards';
import { useTranslation } from 'react-i18next';
import ImageSlider from '../Imageslider/Imageslider';
import RightPart from '../PageRightPart/RightPart';
import { useLocation } from 'react-router-dom';

const MainPage: React.FC = () => {
  const { i18n } = useTranslation();
  const location = useLocation();
  const [slides, setSlides] = useState<any[]>([]);
  const [isNewsTrue, setIsNewsTrue] = useState(true);
  const [isTextPart, setIsTextPart] = useState(true);
  const [isFaqsTrue, setIsFaqsTrue] = useState(true);

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const response = await fetch('../../../SliderImgText.json');
        const data = await response.json();
        setSlides(data[i18n.language] || []);
      } catch (error) {
        console.error('Error fetching the slides data:', error);
      }
    };

    fetchSlides();
  }, [i18n.language]);

  useEffect(() => {
    setIsNewsTrue(true); 
    setIsTextPart(true); 
    setIsFaqsTrue(true); 
  }, []);

  return (
    <div>
      {/* <section className="sectionslider"
        style={{
          display: 'flex',
          justifyContent: 'center'
        }}>
        {slides.length > 0 ? <ImageSlider /> : <p>Loading...</p>}
      </section> */}
      <section className="sectionsecond">
        <Card />
      </section>

      <RightPart
        isNewsTrue={isNewsTrue}
        isTextPart={!isTextPart}
        isFaqsTrue={isFaqsTrue}
        currentPath={location.pathname} // Pass currentPath
      />
    </div>
  );
};

export default MainPage;
