import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Cards.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slides from '../../../../SectionTwoCardsData.json';

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
  const navigate = useNavigate(); // useNavigate instead of useHistory

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
    navigate(path); // navigate to the specified path
  };

  return (
    <div className="slick-slider-container">
      <Slider {...settings}>
        {slides.map((slide: Slide, index: number) => (
          <div key={index} className="slick-slide">
            <img
              className="slider-img"
              src={slide.image}
              alt={slide.title.en}
              onClick={() => handleImageClick(slide.path)}
              style={{ cursor: 'pointer' }}
            />
            <div className="slick-slide-content">
              <h1>{slide.title.en}</h1>
              <p>{slide.courses.en}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CustomSlider;
