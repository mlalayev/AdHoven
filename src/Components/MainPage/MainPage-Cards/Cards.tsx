import React from 'react';
import './Cards.css'
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
};

const CustomSlider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
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

  return (
    <div className="slick-slider-container">
      <Slider {...settings}>
        {slides.map((slide: Slide, index: number) => (
          <div key={index} className="slick-slide">
            <img className='slider-img' src={slide.image} alt={slide.title.en} />
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
