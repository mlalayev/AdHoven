import React from 'react';
import './Social.css';
import { IoLogoFacebook } from "react-icons/io5";
import { GrLinkedinOption } from "react-icons/gr";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { LiaTelegramPlane } from "react-icons/lia";
import { TbRectangleVerticalFilled } from "react-icons/tb";

const Social: React.FC = () => {
    return (
        <div className="social-card">
            <span className='spanicon'><TbRectangleVerticalFilled color='#6351CE' size={20} /><h3>Sosial’da İzlɛ</h3></span>

            <div className="icons">
                <a href="#facebook" className="icon facebook"><IoLogoFacebook color='white' size={20} /></a>
                <a href="#linkedin" className="icon linkedin"><GrLinkedinOption color='white' size={20} /></a>
                <a href="#youtube" className="icon youtube"><FaYoutube color='white' size={20} /></a>
                <a href="#instagram" className="icon instagram"><FaInstagram color='white' size={20} /></a>
                <a href="#telegram" className="icon telegram"><LiaTelegramPlane color='white' size={20} /></a>
            </div>
        </div>
    );
};

export default Social;