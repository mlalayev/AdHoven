import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// Custom Left Arrow
const CustomLeftArrow: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
    return (
        <div className="slick-arrow slick-prev" onClick={onClick}>
            <IoIosArrowBack size={20} color='white' className='arrow-icon' />
        </div>
    );
};

// Custom Right Arrow
const CustomRightArrow: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
    return (
        <div className="slick-arrow slick-next" onClick={onClick}>
            <IoIosArrowForward size={20} color='white' className='arrow-icon' />
        </div>
    );
};

export { CustomLeftArrow, CustomRightArrow };
