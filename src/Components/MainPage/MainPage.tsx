import './MainPage.css';
import Card from './MainPage-Cards/Cards';
import { useTranslation } from 'react-i18next';
import React, { useEffect, useState } from 'react'
import ImageSlider from '../Imageslider/Imageslider.jsx';

function MainPage() {

  const { i18n } = useTranslation();
  const [slides, setSlides] = useState([]);

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

  return (
    <div>
      <section className="sectionslider">
        {slides.length > 0 ? <ImageSlider slides={slides} /> : <p>Loading...</p>}
      </section>

      <section className="sectionsecond">
        <Card />
      </section>
    </div>
  )
}

export default MainPage