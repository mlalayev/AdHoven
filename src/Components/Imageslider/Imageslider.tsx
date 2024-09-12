import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Imageslider.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slidesData from '../../../ImageSliderData.json';
import { CustomLeftArrow, CustomRightArrow } from '../../Common/ArrowsSlickSlider/Arrows';
import { useTranslation } from 'react-i18next';

type Slide = {
  image: string;
  title: {
    en: string;
    az: string;
    ru: string;
  };
  subtitle: {
    en: string;
    az: string;
    ru: string;
  };
  path: string; // This is required
};

const ImageSlider: React.FC = () => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const [startX, setStartX] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const sliderRefer = useRef<Slider | null>(null);

  // State to hold the filtered slides based on screen size
  const [filteredSlides, setFilteredSlides] = useState<Slide[]>([]);

  // Detect screen size and adjust slides
  const filterSlidesByScreenSize = () => {
    const screenWidth = window.innerWidth;
    const slides = slidesData.slides;

    // Show first 3 slides for desktop, last 3 slides for mobile
    if (screenWidth > 700) {
      setFilteredSlides(slides.slice(0, 3)); // First 3 slides for desktop
    } else {
      setFilteredSlides(slides.slice(-3)); // Last 3 slides for mobile
    }
  };

  // Listen to window resize and filter slides accordingly
  useEffect(() => {
    filterSlidesByScreenSize();
    window.addEventListener('resize', filterSlidesByScreenSize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', filterSlidesByScreenSize);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
    arrows: true,
    autoplay: true,
    dotsClass: 'slick-dots nthchild',
    autoplaySpeed: 30000000,
    nextArrow: <CustomRightArrow />,
    prevArrow: <CustomLeftArrow />,
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

  return (
    <div className="image-slider">
      <Slider ref={sliderRefer} {...settings}>
        {filteredSlides.map((data: Slide, index: number) => (
          <div
            className="slickSliderHolder"
            key={index}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={(e) => handleMouseUp(e, data.path)}
          >
            <img
              className="slickSliderImage"
              src={data.image}
              alt={getLanguageContent(data.title)}
            />
            <div className='slider-content-text'>
              <h1>{getLanguageContent(data.title)}</h1>
              <p>{getLanguageContent(data.subtitle)}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
