import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Cards.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slides from '../../../../SectionTwoCardsData.json';
import { CustomLeftArrow, CustomRightArrow } from '../../../Common/ArrowsSlickSlider/Arrows'; // Import custom arrows
import { useTranslation } from 'react-i18next'; // Import useTranslation from react-i18next

type Slide = {
  image: string;
  title: {
    en: string;
    az: string;
    ru: string;
  };
  courses: {
    en: string;
    az: string;
    ru: string;
  };
  path: string;
};

const CustomSlider: React.FC = () => {
  const navigate = useNavigate();
  const { i18n } = useTranslation(); // Access i18n instance

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    swipe: true,
    arrows: true,
    autoplay: true,
    dotsClass: "slick-dots",
    autoplaySpeed: 3000,
    nextArrow: <CustomRightArrow />, // Use custom right arrow
    prevArrow: <CustomLeftArrow />,  // Use custom left arrow
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleImageClick = (path: string) => {
    navigate(path);
  };

  const getLanguageContent = (content: { en: string; az: string; ru: string }) => {
    const currentLanguage = i18n.language;
    return content[currentLanguage as keyof typeof content] || content.en; // Fallback to 'en' if language is not available
  };

  return (
    <div className="slick-slider-container">
      <Slider {...settings}>
        {slides.map((slide: Slide, index: number) => (
          <div key={index} className="slick-slide">
            <img
              className="slider-img"
              src={slide.image}
              alt={getLanguageContent(slide.title)}
              onClick={() => handleImageClick(slide.path)}
              style={{ cursor: 'pointer' }}
            />
            <div className="slick-slide-content">
              <h1>{getLanguageContent(slide.title)}</h1>
              <p>{getLanguageContent(slide.courses)}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CustomSlider;
