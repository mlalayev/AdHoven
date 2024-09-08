import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Imageslider.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slidesData from '../../../ImageSliderData.json'; // Import the JSON file
import { CustomLeftArrow, CustomRightArrow } from '../../Common/ArrowsSlickSlider/Arrows';
import { useTranslation } from 'react-i18next';

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

const ImageSlider: React.FC = () => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const [startX, setStartX] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const sliderRefer = useRef<Slider | null>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
    arrows: true,
    autoplay: true,
    dotsClass: "custom-slick-dots",
    autoplaySpeed: 3000,
    nextArrow: <CustomRightArrow />,
    prevArrow: <CustomLeftArrow />,
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

  const handleMouseDown = (e: React.MouseEvent) => {
    setStartX(e.clientX);
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (startX !== null && Math.abs(e.clientX - startX) > 0.5) {
      setIsDragging(true);
    }
  };

  const handleMouseUp = (e: React.MouseEvent, path: string) => {
    if (!isDragging && startX !== null) {
      navigate(path);
    }
    setStartX(null);
    setIsDragging(false);
  };

  const getLanguageContent = (content: { en: string; az: string; ru: string }) => {
    const currentLanguage = i18n.language;
    return content[currentLanguage as keyof typeof content] || content.en;
  };

  // Make sure to access the slides array from the JSON file
  const slides = slidesData.slides;

  return (
    <div className="image-slider">
      <Slider ref={sliderRefer} {...settings}>
        {slides.map((data: Slide, index: number) => (
          <div
          className='slickSliderHolder'
          key={index}>
            <img
              className='slickSliderImage'
              src={data.image}
              alt={getLanguageContent(data.title)} // Use the getLanguageContent function for title
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
