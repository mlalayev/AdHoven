import React, { useState, useEffect } from 'react';
import './Cards.css';
import jsonData from '../../../../SectionTwoCardsData.json';

interface Slide {
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
}

const CustomSlider: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const [visibleSlides, setVisibleSlides] = useState<number>(3);
    const slides: Slide[] = jsonData;

    const updateVisibleSlides = () => {
        if (window.innerWidth <= 576) {
            setVisibleSlides(1);
        } else if (window.innerWidth <= 768) {
            setVisibleSlides(2);
        } else {
            setVisibleSlides(3);
        }
    };

    useEffect(() => {
        updateVisibleSlides();
        window.addEventListener('resize', updateVisibleSlides);
        return () => window.removeEventListener('resize', updateVisibleSlides);
    }, []);

    const handleDotClick = (index: number) => {
        setCurrentSlide((index * visibleSlides)/ dotsCount);
    };

    const dotsCount = Math.ceil(slides.length / visibleSlides);
    const translateXValue = -(currentSlide * (100 / visibleSlides));

    const handlePrevClick = () => {
        if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 0.5);
        }
    };

    const handleNextClick = () => {
        if (currentSlide < slides.length - visibleSlides - 1.5) {
            setCurrentSlide(currentSlide + 0.5);
        }
    };

    return (
        <div className="custom-slider">
            <div
                className="custom-slides"
                style={{
                    transform: `translateX(${translateXValue}%)`,
                    width: `${slides.length * (100 / visibleSlides)}%`,
                }}
            >
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className="custom-slide"
                        style={{ width: `${100 / visibleSlides}%` }}
                    >
                        <img src={slide.image} alt={slide.title.en} />
                        <div className="custom-slide-content">
                            <h1>{slide.title.en}</h1>
                            <p>{slide.courses.en}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button className="custom-prev" onClick={handlePrevClick} disabled={currentSlide === 0}>
                ‹
            </button>
            <button className="custom-next" onClick={handleNextClick} disabled={currentSlide >= slides.length - visibleSlides}>
                ›
            </button>

            <div className="custom-dots">
                {Array.from({ length: dotsCount }).map((_, index) => (
                    <span
                        key={index}
                        className={`custom-dot ${index === Math.floor(currentSlide / visibleSlides) ? 'custom-active-dot' : ''}`}
                        onClick={() => handleDotClick(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default CustomSlider;
